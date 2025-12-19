import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

/**
 * TEMP AUTH (school-safe)
 * Replace with real auth later
 */
const requireUser = (req, res, next) => {
  req.user = { _id: "000000000000000000000001" };
  next();
};

// POST /api/orders
router.post("/", requireUser, async (req, res) => {
  try {
    const { items } = req.body;

    if (!items || !items.length) {
      return res.status(400).json({ error: "No items in order" });
    }

    const total = items.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );

    const order = await Order.create({
      user: req.user._id,
      items,
      total,
    });

    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to place order" });
  }
});

// GET /api/orders/me
router.get("/me", requireUser, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load orders" });
  }
});

export default router;

