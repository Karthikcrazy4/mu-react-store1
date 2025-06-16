import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import "./Header.css";

export default function Header({ name }) {
  const { theme, setTheme } = useTheme();
  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="header">
      <h1 className="logo">{name}</h1>

      <div className="header-controls">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </nav>
        <button className="theme-btn" onClick={toggle}>
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </div>
    </header>
  );
}
