import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthed, loading } = useAuth();
  if (loading) return null; // or a spinner
  return isAuthed ? children : <Navigate to="/login" replace />;
}
