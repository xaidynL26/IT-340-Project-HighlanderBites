const BASE = import.meta.env.VITE_API_BASE || '/api';

export async function getMenu() {
  const r = await fetch(`${BASE}/menu`);
  return r.json();
}
export async function placeOrder(payload) {
  const r = await fetch(`${BASE}/orders`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(payload)
  });
  return r.json();
}
export async function myOrders() {
  const r = await fetch(`${BASE}/orders/me`);
  return r.json();
}
