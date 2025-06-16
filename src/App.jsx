import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeProvider";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./Login";
import Logout from "./Logout";  
import Order from "./Order";
import Register from "./Register";
import "./App.css";

// export your AppContext once:
export const AppContext = createContext({
  users: [],
  setUsers: () => {},
  cart: {},
  setCart: () => {},
  email: null,
  setEmail: () => {},
  orders: [],
  setOrders: () => {},
});

function AppContent() {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState({});
  const [email, setEmail] = useState();

  return (
    <AppContext.Provider
      value={{ users, setUsers, cart, setCart, email, setEmail, orders, setOrders }}
    >
      <BrowserRouter>
        <Header name="mu-react-store" />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/order" element={<Order />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
