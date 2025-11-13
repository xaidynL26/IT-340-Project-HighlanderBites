import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Shell(){
  const { user, isAuthed, logout } = useAuth();
  const nav = useNavigate();

  const doLogout = async () => {
    await logout();
    nav("/login");
  };

  return (
    <div className="page">
      <header className="topbar" style={{ background:"#D7263D", color:"#fff" }}>
        <div className="wrap">
          <Link className="brand" to="/menu">
            <img src="/logo.png" alt="Highlander Bites" width="44" height="44" />
            <span>Highlander Bites</span>
          </Link>
          <nav className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/checkout">Checkout</NavLink>
            <NavLink to="/orders">My Orders</NavLink>
            {isAuthed ? (
              <button onClick={doLogout} style={{ marginLeft: 8, border:'none', background:'rgba(255,255,255,.15)', color:'#fff', padding:'8px 10px', borderRadius:10, cursor:'pointer' }}>
                Logout {user?.name ? `(${user.name})` : ''}
              </button>
            ) : (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              </>
            )}
          </nav>
        </div>
      </header>
      <main className="container"><Outlet/></main>
      <footer className="footer">© {new Date().getFullYear()} Highlander Bites</footer>
    </div>
  );
}
