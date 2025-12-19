import { createContext, useContext, useEffect, useState } from "react";
import { apiLogin, apiVerifyMfa, apiLogout } from "../api/auth";

const AuthCtx = createContext(null);
export const useAuth = () => useContext(AuthCtx);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [mfaPending, setMfaPending] = useState(false);
  const [tempToken, setTempToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = localStorage.getItem("hb_token");
    const u = localStorage.getItem("hb_user");
    if (t && u) {
      setToken(t);
      setUser(JSON.parse(u));
    }
    setLoading(false);
  }, []);

  // STEP 1: normal login
  const login = async (email, password) => {
    const data = await apiLogin({ email, password });

    // MFA REQUIRED
    if (data.mfaRequired) {
      setMfaPending(true);
      setTempToken(data.tempToken);
      return { mfaRequired: true };
    }

    // NO MFA
    finishLogin(data);
    return data;
  };

  // STEP 2: verify MFA code
  const verifyMfa = async (code) => {
    const data = await apiVerifyMfa({
      token: tempToken,
      code,
    });

    finishLogin(data);
    setMfaPending(false);
    setTempToken(null);
  };

  const finishLogin = (data) => {
    if (data.token) {
      localStorage.setItem("hb_token", data.token);
      setToken(data.token);
    }
    if (data.user) {
      localStorage.setItem("hb_user", JSON.stringify(data.user));
      setUser(data.user);
    }
  };

  const logout = async () => {
    try { await apiLogout(); } catch {}
    localStorage.clear();
    setUser(null);
    setToken(null);
    setMfaPending(false);
    setTempToken(null);
  };

  return (
    <AuthCtx.Provider
      value={{
        user,
        token,
        loading,
        login,
        verifyMfa,
        logout,
        mfaPending,
        isAuthed: !!token,
      }}
    >
      {children}
    </AuthCtx.Provider>
  );
}

