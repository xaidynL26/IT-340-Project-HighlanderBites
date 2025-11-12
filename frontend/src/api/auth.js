const BASE = import.meta.env.VITE_API_BASE || '/api';

export async function apiLogin({ email, password }) {
  const r = await fetch(`${BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type':'application/json' },
    credentials: 'include', // if your backend sets HttpOnly cookie
    body: JSON.stringify({ email, password })
  });
  if (!r.ok) throw new Error((await r.json().catch(()=>({message:'Login failed'}))).message || 'Login failed');
  return r.json(); // e.g. { token, user }
}

export async function apiRegister({ name, email, password }) {
  const r = await fetch(`${BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify({ name, email, password })
  });
  if (!r.ok) throw new Error((await r.json().catch(()=>({message:'Registration failed'}))).message || 'Registration failed');
  return r.json(); // e.g. { user, token? }
}

export async function apiLogout() {
  // if cookie-based: call backend endpoint to clear cookie
  const r = await fetch(`${BASE}/auth/logout`, { method:'POST', credentials:'include' });
  // if token-in-localStorage: just resolve
  return r.ok;
}
