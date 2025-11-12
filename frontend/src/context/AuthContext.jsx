import { createContext, useContext, useEffect, useState } from 'react';
import { apiLogin, apiLogout } from '../api/auth';

const AuthCtx = createContext(null);
export const useAuth = () => useContext(AuthCtx);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);     // {email, name, ...}
  const [token, setToken] = useState(null);   // if you use JWT in localStorage
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // try to restore session from localStorage (if you use tokens)
    const t = localStorage.getItem('hb_token');
    const u = localStorage.getItem('hb_user');
    if (t && u) { setToken(t); setUser(JSON.parse(u)); }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const data = await apiLogin({ email, password });
    // choose one model: token-in-localStorage OR HttpOnly cookie
    if (data.token) {
      localStorage.setItem('hb_token', data.token);
      setToken(data.token);
    }
    if (data.user) {
      localStorage.setItem('hb_user', JSON.stringify(data.user));
      setUser(data.user);
    } else {
      // fallback minimal user
      const u = { email };
      localStorage.setItem('hb_user', JSON.stringify(u));
      setUser(u);
    }
    return data;
  };

  const logout = async () => {
    try { await apiLogout(); } catch {}
    localStorage.removeItem('hb_token');
    localStorage.removeItem('hb_user');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthCtx.Provider value={{ user, token, loading, login, logout, isAuthed: !!(user || token) }}>
      {children}
    </AuthCtx.Provider>
  );
}
