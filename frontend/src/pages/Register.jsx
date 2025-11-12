import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { apiRegister } from "../api/auth";
import "./Login.css"; // reuse same styles

export default function Register(){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [err,setErr] = useState("");
  const [ok,setOk] = useState(false);
  const [busy,setBusy] = useState(false);
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr(""); setBusy(true);
    try {
      await apiRegister({ name, email, password });
      setOk(true);
      // optionally auto-redirect after 1s:
      setTimeout(()=> nav("/login"), 1000);
    } catch(e) {
      setErr(e.message || "Registration failed");
    } finally { setBusy(false); }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src="/logo.png" alt="Highlander Bites" className="logo" />
        <h2>Create Account</h2>
        <form onSubmit={submit}>
          <input type="text" placeholder="Full name" value={name}
                 onChange={e=>setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email}
                 onChange={e=>setEmail(e.target.value)} required />
          <input type="password" placeholder="Password (min 6)"
                 value={password} onChange={e=>setPassword(e.target.value)} required />
          {err && <p className="error">{err}</p>}
          {ok && <p className="hint" style={{color:'green'}}>Registered! Redirecting…</p>}
          <button type="submit" disabled={busy}>{busy? 'Creating…':'Register'}</button>
        </form>
        <p className="hint">Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}
