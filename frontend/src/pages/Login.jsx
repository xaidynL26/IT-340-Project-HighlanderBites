import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const nav = useNavigate();
  const { login } = useAuth();

  const submit = async (e) => {
    e.preventDefault();
    setErr(""); setBusy(true);
    try {
      await login(email, password);
      nav("/menu");
    } catch (e) {
      setErr(e.message || "Login failed");
    } finally { setBusy(false); }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src="/logo.png" alt="Highlander Bites" className="logo" />
        <h2>Welcome Back</h2>
        <form onSubmit={submit}>
          <input type="email" placeholder="Email" value={email}
                 onChange={(e)=>setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password}
                 onChange={(e)=>setPassword(e.target.value)} required />
          {err && <p className="error">{err}</p>}
          <button type="submit" disabled={busy}>{busy? 'Signing in…':'Login'}</button>
        </form>
        <p className="hint">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
