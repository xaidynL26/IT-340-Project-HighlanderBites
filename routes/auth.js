import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import speakeasy from "speakeasy";
import QRCode from "qrcode";
import User from "../models/User.js";
import auth from "../middleware/auth.js";

const router = express.Router();

/* REGISTER */
router.post("/register", async (req, res) => {
  const { email, password, fullName } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(409).json({ message: "User exists" });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ email, passwordHash, fullName });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  res.json({ user, token });
});

/* LOGIN */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ message: "Invalid credentials" });

  // 🔐 MFA CHECK
  if (user.mfaEnabled) {
    return res.json({ mfaRequired: true, userId: user._id });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  res.json({ token, user });
});

/* MFA SETUP */
router.post("/mfa/setup", auth, async (req, res) => {
  const secret = speakeasy.generateSecret({
    name: "Highlander Bites",
  });

  const user = await User.findById(req.user.userId);
  user.mfaSecret = secret.base32;
  await user.save();

  const qrCode = await QRCode.toDataURL(secret.otpauth_url);
  res.json({ qrCode });
});

/* MFA VERIFY */
router.post("/mfa/verify", auth, async (req, res) => {
  const { code } = req.body;
  const user = await User.findById(req.user.userId);

  const ok = speakeasy.totp.verify({
    secret: user.mfaSecret,
    encoding: "base32",
    token: code,
    window: 1,
  });

  if (!ok) return res.status(400).json({ message: "Invalid code" });

  user.mfaEnabled = true;
  await user.save();
  res.json({ message: "MFA enabled" });
});

export default router;

