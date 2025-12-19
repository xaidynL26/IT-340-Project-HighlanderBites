// src/pages/Checkout.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { placeOrder } from "../api/api";
import "./Checkout.css";

export default function Checkout() {
  const { items, clear, total } = useCart();
  const navigate = useNavigate();

  const [showPayment, setShowPayment] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  const handleShowPayment = () => {
    if (!items.length) return;
    setShowPayment(true);
    setError("");
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!cardName || !cardNumber || !cardExpiry || !cardCvv) {
      setError("Please fill out all card fields (demo only).");
      return;
    }

    setBusy(true);
    setError("");

    try {
      // ✅ SEND ORDER TO BACKEND
      await placeOrder({
        items,
        total,
      });

      // clear cart AFTER successful save
      clear();

      // go to success page
      navigate("/pickup-estimate");
    } catch (err) {
      console.error(err);
      setError("Failed to place order.");
    } finally {
      setBusy(false);
    }
  };

  if (!items.length) {
    return (
      <section className="checkout-page">
        <h1 className="checkout-title">Checkout</h1>
        <p>Your cart is empty.</p>
      </section>
    );
  }

  return (
    <section className="checkout-page">
      <div className="checkout-container">
        {/* ORDER SUMMARY */}
        <div className="checkout-summary">
          <h1 className="checkout-title">Order Summary</h1>
          <p>Total: ${total.toFixed(2)}</p>

          {!showPayment && (
            <button className="btn-primary" onClick={handleShowPayment}>
              Proceed to Payment
            </button>
          )}
        </div>

        {/* PAYMENT FORM */}
        {showPayment && (
          <form className="checkout-payment" onSubmit={handlePlaceOrder}>
            <h2>Payment Details (Demo)</h2>

            {error && <p className="checkout-error">{error}</p>}

            <input
              placeholder="Name on Card"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
            <input
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <input
              placeholder="MM/YY"
              value={cardExpiry}
              onChange={(e) => setCardExpiry(e.target.value)}
            />
            <input
              placeholder="CVV"
              value={cardCvv}
              onChange={(e) => setCardCvv(e.target.value)}
            />

            <button className="btn-primary" disabled={busy}>
              {busy ? "Processing..." : "Place Order"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

