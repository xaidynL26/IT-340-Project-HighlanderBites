import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart(){
  const { items, update, remove, total } = useCart();

  if (!items.length) return <p>Cart is empty.</p>;

  return (
    <section>
      <h1>Your Cart</h1>
      <table className="table">
        <thead><tr><th>Item</th><th>Qty</th><th>Price</th><th></th></tr></thead>
        <tbody>
          {items.map(it => (
            <tr key={it.id}>
              <td>{it.name}</td>
              <td>
                <input type="number" min="1" value={it.qty}
                  onChange={e=> update(it.id, e.target.value)} />
              </td>
              <td>${(it.qty*it.price).toFixed(2)}</td>
              <td><button onClick={()=> remove(it.id)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="total">Total: ${total.toFixed(2)}</p>
      <Link to="/checkout" className="btn">Checkout</Link>
    </section>
  );
}
