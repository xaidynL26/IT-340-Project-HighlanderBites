import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mfaCode, setMfaCode] = useState("");
  const [needsMfa, setNeedsMfa] = useState(false);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const nav = useNavigate();
  const { login } = useAuth();

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setBusy(true);

    try {
      const data = await login(
        email,
        password,
        needsMfa ? mfaCode : undefined
      );

      if (data?.mfaRequired) {
        setNeedsMfa(true);
        setBusy(false);
        return;
      }

      nav("/menu");
    } catch (e) {
      setErr(e.message || "Login failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src="/logo.png" alt="Highlander Bites" className="logo" />

        <h2>{needsMfa ? "Enter Authenticator Code" : "Welcome Back"}</h2>

        <form onSubmit={submit}>
          {!needsMfa ? (
            <>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </>
          ) : (
            <input
              placeholder="6-digit code"
              value={mfaCode}
              onChange={(e) => setMfaCode(e.target.value)}
              required
            />
          )}

          {err && <p className="error">{err}</p>}

          <button type="submit" disabled={busy}>
            {busy
              ? needsMfa
                ? "Verifying…"
                : "Signing in…"
              : needsMfa
              ? "Verify"
              : "Login"}
          </button>
        </form>

        {!needsMfa && (
          <p className="hint">
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        )}
      </div>
    </div>
  );
}

