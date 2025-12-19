import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import cartRoutes from "./routes/cart.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();

// Needed because __dirname doesn't exist in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ----------------------------
// LOGGING
// ----------------------------
const logDir = "/var/log/highlander";
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const logFile = path.join(logDir, "backend.log");
const logStream = fs.createWriteStream(logFile, { flags: "a" });

app.use((req, res, next) => {
  const logEntry = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl}\n`;
  logStream.write(logEntry);
  console.log(logEntry.trim());
  next();
});

// ----------------------------
// CORE SETUP
// ----------------------------
app.use(cors());
app.use(express.json());

// MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Highlander Bites backend is running");
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});

