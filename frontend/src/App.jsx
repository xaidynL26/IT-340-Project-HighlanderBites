import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shell from "./layout/Shell";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <Shell />, children: [
    { index: true, element: <Menu /> },
    { path: "menu", element: <Menu /> },
    { path: "cart", element: <Cart /> },
    { path: "checkout", element: <Checkout /> },
    { path: "orders", element: (
        <ProtectedRoute>
          <Orders />
        </ProtectedRoute>
      ) },
  ]},
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

export default function App(){
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
}
