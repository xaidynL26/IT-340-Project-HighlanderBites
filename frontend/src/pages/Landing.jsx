import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="hb-landing">
      <header className="hb-hero">
        <img src="/logo.png" alt="Highlander Bites logo" className="hb-logo" />
        <h1 className="hb-title">Highlander Bites</h1>
        <p className="hb-sub">NJIT Food Truck • Order ahead, skip the line</p>

        <div className="hb-cta-row">
          <Link to="/menu" className="hb-btn hb-btn-primary">Start Order</Link>
          <Link to="/login" className="hb-btn hb-btn-ghost">Sign In</Link>
        </div>
      </header>

      <section className="hb-features">
        <div className="hb-feature">
          <h3>Fresh & Fast</h3>
          <p>Order your favorites—ready when you arrive.</p>
        </div>
        <div className="hb-feature">
          <h3>Pickup by the Bookstore</h3>
          <p>Find us at the NJIT Food Truck location.</p>
        </div>
        <div className="hb-feature">
          <h3>Secure Checkout</h3>
          <p>Sign in, place your order, and track the status.</p>
        </div>
      </section>
    </div>
  );
}
