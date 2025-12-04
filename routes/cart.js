const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();

// All cart routes require auth
router.use(auth);

// GET /api/cart
// Placeholder: later we will load the user's cart from the database
router.get("/", async (req, res) => {
  try {
    // For now, just send a placeholder response
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
// Placeholder: later we will add an item to the user's cart
router.post("/add", async (req, res) => {
  try {
    // Example: itemId and quantity would come from req.body
    // For now, just echo it back
    return res.status(201).json({
      message: "Item added to cart (placeholder).",
      item: req.body
    });
  } catch (err) {
    console.error("Error adding to cart:", err);
    return res.status(500).json({ message: "Server error." });
  }
});

module.exports = router;
