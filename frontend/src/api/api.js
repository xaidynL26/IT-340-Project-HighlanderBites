const BASE = import.meta.env.VITE_API_BASE || "/api";

/**
 * Get menu items from database
 * GET /api/menu
 */
export async function getMenu() {
  const res = await fetch(`${BASE}/menu`);

  if (!res.ok) {
    throw new Error("Failed to fetch menu");
  }

  return res.json();
}

/**
 * Place an order
 * POST /api/orders
 */
export async function placeOrder(payload) {
  const res = await fetch(`${BASE}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to place order");
  }

  return res.json();
}

/**
 * Get logged-in user's orders
 * GET /api/orders/me
 */
export async function myOrders() {
  const res = await fetch(`${BASE}/orders/me`);
  if (!res.ok) {
    throw new Error("Failed to fetch orders");
  }
  return res.json(); // ✅ array
}
