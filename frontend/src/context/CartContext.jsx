import { createContext, useContext, useState } from 'react';
const Ctx = createContext();
export function CartProvider({children}) {
  const [items, setItems] = useState([]);
  const add = (it)=> setItems(prev=>{
    const i = prev.findIndex(p=>p.id===it.id);
    if (i>-1) { const c=[...prev]; c[i]={...c[i], qty:c[i].qty+(it.qty||1)}; return c; }
    return [...prev, {...it, qty: it.qty||1}];
  });
  const update = (id, qty)=> setItems(prev=> prev.map(i=> i.id===id? {...i, qty:Number(qty)} : i));
  const remove = (id)=> setItems(prev=> prev.filter(i=> i.id!==id));
  const clear = ()=> setItems([]);
  const total = items.reduce((s,i)=> s+i.price*i.qty, 0);
  return <Ctx.Provider value={{items, add, update, remove, clear, total}}>{children}</Ctx.Provider>;
}
export const useCart = ()=> useContext(Ctx);
