import express from "express";
import auth from "../middleware/auth.js";

const router = express.Router();

// All cart routes require auth
router.use(auth);

// GET /api/cart
router.get("/", async (req, res) => {
  try {
    return res.json({
      message: "Cart fetched successfully (placeholder).",
      cart: {
        userId: req.user.userId,
        items: []
      }
    });
  } catch (err) {
    console.error("Error getting cart:", err);
    return res.status(500).json({ message: "Server error." });
  }
});

// POST /api/cart/add
router.post("/add", async (req, res) => {
  try {
    return res.status(201).json({
      message: "Item added to cart (placeholder).",
      item: req.body
    });
  } catch (err) {
    console.error("Error adding to cart:", err);
    return res.status(500).json({ message: "Server error." });
  }
});

export default router;

