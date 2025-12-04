require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const cartRoutes = require("./routes/cart");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const connectDB = require("./config/db");

const app = express();

// ----------------------------
// SIMPLE LOGGING SYSTEM (Phase 3)
// ----------------------------

// Create /var/log/highlander if it doesn’t exist
const logDir = "/var/log/highlander";
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

// Create write stream for backend.log
const logFile = path.join(logDir, "backend.log");
const logStream = fs.createWriteStream(logFile, { flags: "a" });

// Logging middleware
app.use((req, res, next) => {
  const logEntry = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl}\n`;
  logStream.write(logEntry);
  console.log(logEntry.trim()); // still logs to console
  next();
});

// ----------------------------
// CORE SETUP
// ----------------------------
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/cart", cartRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Highlander Bites backend is running");
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});

