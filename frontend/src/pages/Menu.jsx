import { useEffect, useState } from 'react';
import { getMenu } from '../api/api';
import { useCart } from '../context/CartContext';

export default function Menu(){
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const { add } = useCart();

  useEffect(() => {
    getMenu().then(data => { setMenu(data); setLoading(false); })
             .catch(_ => { setMenu([]); setLoading(false); });
  }, []);

  if (loading) return <p>Loading…</p>;

  return (
    <section>
      <h1>Menu</h1>
      <div className="grid">
        {menu.map(m => (
          <article key={m._id||m.id} className="card">
            {m.image && <img src={m.image} alt={m.name} />}
            <h3>{m.name}</h3>
            <p className="price">${m.price.toFixed(2)}</p>
            <button onClick={()=> add({ id:m._id||m.id, name:m.name, price:m.price, qty:1 })}>
              Add to Cart
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
