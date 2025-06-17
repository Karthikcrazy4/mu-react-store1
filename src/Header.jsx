import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import { AppContext } from "./App";
import CircularText from "./CircularText";
import "./Header.css";
import "./Login.jsx";
export default function Header({ name }) {
  const { theme, setTheme } = useTheme();
  const { email } = useContext(AppContext);
  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="header-main">
      <div className="top-nav">
        {/* 🔁 Rotating Logo wrapped in Link */}
        <Link to="/" className="logo-link">
          <CircularText text={name} spinDuration={20} onHover="speedUp" className="circular-title" />
        </Link>

        <div className="location">Delivering to Hyderabad 500062</div>

        <div className="search-bar">
          <select className="search-category">
            <option>All</option>
          </select>
          <input type="text" placeholder="Search Amazon.in" />
          <button className="search-btn">🔍</button>
        </div>

        <div className="language">🇮🇳 EN</div>
<Link to="/login" className="account">
  {email ? "Hello, " + email : "Hello, sign in"}<br /><b>Account & Lists</b>
</Link>

        <div className="orders">Returns<br /><b>& Orders</b></div>
        <Link to="/cart" className="cart">🛒 Cart</Link>
        <button className="theme-toggle" onClick={toggle}>{theme === "dark" ? "🌞" : "🌙"}</button>
      </div>

      <div className="bottom-nav">
        <Link to="/" className="nav-link">All</Link>
        <Link className="nav-link">Fresh</Link>
        <Link className="nav-link">Mobiles</Link>
        <Link className="nav-link">Fashion</Link>
        <Link className="nav-link">Electronics</Link>
        <Link className="nav-link">Toys</Link>
        <Link className="nav-link">Home</Link>
        <Link className="nav-link">Books</Link>
        <Link className="nav-link">Computers</Link>
      </div>
    </header>
  );
}
