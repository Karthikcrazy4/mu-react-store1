// src/Header.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import { AppContext } from "./App";
import { FaHome } from "react-icons/fa";          // ← import home icon
import CircularText from "./CircularText";
import "./Header.css";

export default function Header({ name }) {
  const { theme, setTheme } = useTheme();
  const { email } = useContext(AppContext);
  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="header">
      <CircularText text={name} spinDuration={20} onHover="speedUp" className="circular-title" />

      <div className="header-controls">
        <nav className="nav">
          <Link to="/" className="nav-link">
            <FaHome style={{ verticalAlign: "middle", marginRight: "0.25rem" }} />
            Home
          </Link>
          <Link to="/cart" className="nav-link">Cart</Link>
          {email ? (
            <Link to="/logout" className="nav-link">Logout</Link>
          ) : (
            <Link to="/login" className="nav-link">Login</Link>
          )}
        </nav>
        <button className="theme-btn" onClick={toggle}>
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </div>
    </header>
  );
}
