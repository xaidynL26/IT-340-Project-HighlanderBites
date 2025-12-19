const BASE = import.meta.env.VITE_API_BASE || "/api";

/* ---------- LOGIN ---------- */
export async function apiLogin({ email, password }) {
  const r = await fetch(`${BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(data.message || "Login failed");
  return data; // { token, user, mfaRequired? }
}

/* ---------- REGISTER ---------- */
export async function apiRegister({ email, password, fullName }) {
  const r = await fetch(`${BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, fullName }),
  });

  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(data.message || "Registration failed");
  return data;
}

/* ---------- MFA: VERIFY CODE ---------- */
export async function apiVerifyMfa({ token }) {
  const jwt = localStorage.getItem("hb_token");

  const r = await fetch(`${BASE}/auth/mfa/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({ token }),
  });

  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(data.message || "Invalid MFA code");
  return data;
}

/* ---------- LOGOUT ---------- */
export async function apiLogout() {
  localStorage.removeItem("hb_token");
  localStorage.removeItem("hb_user");
  return true;
}
