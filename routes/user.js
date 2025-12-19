import express from "express";
import User from "../models/User.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// All routes in this file require auth
router.use(auth);

// GET /api/user/profile
router.get("/profile", async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-passwordHash");

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.json({ user });
  } catch (err) {
    console.error("Error getting profile:", err);
    return res.status(500).json({ message: "Server error." });
  }
});

// PUT /api/user/profile
router.put("/profile", async (req, res) => {
  try {
    const updates = {};
    if (req.body.fullName) {
      updates.fullName = req.body.fullName;
    }

    const user = await User.findByIdAndUpdate(
      req.user.userId,
      updates,
      { new: true }
    ).select("-passwordHash");

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.json({
      message: "Profile updated successfully.",
      user
    });
  } catch (err) {
    console.error("Error updating profile:", err);
    return res.status(500).json({ message: "Server error." });
  }
});

export default router;

