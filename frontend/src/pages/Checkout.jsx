import { useState } from 'react';
import { placeOrder } from '../api/api';
import { useCart } from '../context/CartContext';

export default function Checkout(){
  const { items, clear, total } = useCart();
  const [ok, setOk] = useState(false);
  const [busy, setBusy] = useState(false);

  const place = async () => {
    if (!items.length) return;
    setBusy(true);
    try { await placeOrder({ items }); clear(); setOk(true); }
    finally { setBusy(false); }
  };

  return (
    <section>
      <h1>Checkout</h1>
      <button disabled={!items.length || busy} onClick={place}>
        Place Order (${total.toFixed(2)})
      </button>
      {ok && <p>Order placed! Check “My Orders” for status.</p>}
    </section>
  );
}
