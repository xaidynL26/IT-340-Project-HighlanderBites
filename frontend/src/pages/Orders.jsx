// src/pages/Orders.jsx
import { useEffect, useState } from "react";
import { myOrders } from "../api/api";
import "./Orders.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await myOrders(); // should return an array
        setOrders(Array.isArray(data) ? data : (data?.orders ?? []));
      } catch (e) {
        console.error(e);
        setError("Failed to load orders.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section className="orders-page">
      <div className="orders-container">
        <header className="orders-header">
          <div>
            <h1 className="orders-title">My Orders</h1>
            <p className="orders-subtitle">Your recent bites, all in one place 🍔✨</p>
          </div>

          <div className="orders-chip">
            <span className="dot" />
            <span>{loading ? "Loading..." : `${orders.length} order(s)`}</span>
          </div>
        </header>

        {loading && (
          <div className="orders-grid">
            {[...Array(3)].map((_, i) => (
              <div className="order-card skeleton" key={i}>
                <div className="row">
                  <div className="sk sk-title" />
                  <div className="sk sk-badge" />
                </div>
                <div className="sk sk-line" />
                <div className="sk sk-line" />
                <div className="sk sk-line short" />
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="orders-state error">
            <h2>Uh oh 😵</h2>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && orders.length === 0 && (
          <div className="orders-state empty">
            <div className="empty-emoji">🧁</div>
            <h2>No orders yet</h2>
            <p>Place your first order and it’ll show up here.</p>
          </div>
        )}

        {!loading && !error && orders.length > 0 && (
          <div className="orders-grid">
            {orders.map((order) => (
              <article className="order-card pop" key={order._id}>
                <div className="order-top">
                  <div>
                    <div className="order-meta">
                      <span className="order-id">#{String(order._id).slice(-6).toUpperCase()}</span>
                      <span className="order-date">
                        {new Date(order.createdAt).toLocaleString()}
                      </span>
                    </div>
                    <div className="order-total">
                      Total <span>${Number(order.total).toFixed(2)}</span>
                    </div>
                  </div>

                  <span className={`status-badge ${String(order.status || "placed").toLowerCase()}`}>
                    {order.status || "placed"}
                  </span>
                </div>

                <div className="divider" />

                <ul className="items-list">
                  {order.items?.map((item, idx) => (
                    <li className="item" key={idx}>
                      <span className="item-name">{item.name}</span>
                      <span className="item-qty">× {item.qty}</span>
                      <span className="item-price">
                        ${(Number(item.price) * Number(item.qty)).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

