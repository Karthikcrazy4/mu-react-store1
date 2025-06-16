// src/Login.jsx
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "./App";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const [user, setUser] = useState({ email: "", pass: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setEmail, email } = useContext(AppContext);
  const API = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { data } = await axios.post(`${API}/api/users/login`, user);
      if (!data?.email) throw new Error();
      setEmail(data.email);
      navigate("/");
    } catch {
      setError("❌ Access Denied");
    }
  };

  return (
    <div className="login-container">
      {/* Home link is disabled until you’re logged in */}
      {email ? (
        <Link to="/" className="home-link">
          ← Home
        </Link>
      ) : (
        <span className="home-link disabled">← Home</span>
      )}

      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <div className="error-msg">{error}</div>}

        <label>
          Email
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
            className="input-field"
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={user.pass}
            onChange={(e) => setUser({ ...user, pass: e.target.value })}
            required
            className="input-field"
          />
        </label>

        <button type="submit" className="submit-btn">
          Log In
        </button>

        <p className="register-link">
          Don’t have an account? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
