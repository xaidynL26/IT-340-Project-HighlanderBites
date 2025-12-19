// src/pages/Cart.jsx
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const { items, update, remove, total } = useCart();

  if (!items.length) {
    return (
      <section className="cart-page">
        <div className="cart-container">
          <h1 className="cart-title">Your Cart</h1>
          <div className="cart-empty">
            <p>Your cart is feeling a little lonely 🛒</p>
            <Link to="/menu" className="btn-secondary">
              Browse the Menu
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">Your Cart</h1>

        <div className="cart-layout">
          {/* Left: items */}
          <div className="cart-items">
            {items.map((it) => (
              <div className="cart-item-card" key={it.id}>
                {it.image && (
                  <div className="cart-item-image-wrap">
                    <img
                      src={it.image}
                      alt={it.name}
                      className="cart-item-image"
                    />
                  </div>
                )}

                <div className="cart-item-main">
                  <div className="cart-item-header">
                    <h2 className="cart-item-name">{it.name}</h2>
                    <button
                      type="button"
                      className="cart-remove-btn"
                      onClick={() => remove(it.id)}
                    >
                      Remove
                    </button>
                  </div>

                  {it.description && (
                    <p className="cart-item-desc">{it.description}</p>
                  )}

                  <div className="cart-item-footer">
                    <div className="cart-qty-control">
                      <label htmlFor={`qty-${it.id}`}>Qty</label>
                      <input
                        id={`qty-${it.id}`}
                        type="number"
                        min="1"
                        value={it.qty}
                        onChange={(e) =>
                          update(it.id, Number(e.target.value) || 1)
                        }
                      />
                    </div>

                    <p className="cart-item-price">
                      ${(it.price * it.qty).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: summary */}
          <aside className="cart-summary">
            <h2>Order Summary</h2>
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            {/* If you ever add tax / fees, they can go here */}

            <div className="cart-summary-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Link to="/checkout" className="btn-primary cart-checkout-btn">
              Proceed to Checkout
            </Link>
            <Link to="/menu" className="cart-continue-link">
              ← Continue shopping
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
