import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true },
  },
  { _id: false } // ✅ THIS IS THE FIX
);

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [orderItemSchema],
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "placed",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);

