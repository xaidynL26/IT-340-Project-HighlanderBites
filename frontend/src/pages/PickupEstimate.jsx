import { Link } from "react-router-dom";
import "./PickupEstimate.css";

export default function PickupEstimate() {
  // simple fake estimate (you can randomize later)
  const minutes = 15;

  return (
    <section className="pickup-page">
      <div className="pickup-card">
        <div className="pickup-icon">🍔</div>

        <h1>Your Order Is Being Prepared!</h1>

        <p className="pickup-time">
          Estimated pickup time:
          <span>{minutes} minutes</span>
        </p>

        <p className="pickup-subtext">
          Thanks for ordering from <strong>Highlander Bites</strong> 🚚
        </p>

        <Link to="/orders" className="pickup-btn">
          View My Orders
        </Link>

        <Link to="/menu" className="pickup-link">
          Order More Food →
        </Link>
      </div>
    </section>
  );
}

