import { useEffect, useState } from "react";

export default function MFASetup() {
  const [qr, setQr] = useState("");
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("hb_token");
    fetch("/api/auth/mfa/setup", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(r => r.json())
      .then(d => setQr(d.qrCode));
  }, []);

  const verify = async () => {
    const token = localStorage.getItem("hb_token");
    const r = await fetch("/api/auth/mfa/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ code }),
    });
    setMsg(r.ok ? "✅ MFA enabled" : "❌ Invalid code");
  };

  return (
    <div>
      <h2>Enable MFA</h2>
      {qr && <img src={qr} alt="QR" />}
      <input
        placeholder="6‑digit code"
        value={code}
        onChange={e => setCode(e.target.value)}
      />
      <button onClick={verify}>Verify</button>
      <p>{msg}</p>
    </div>
  );
}
