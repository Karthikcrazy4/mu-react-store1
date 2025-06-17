import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // send exactly { name, email, password }
      const { data } = await axios.post(`${API}/api/users/register`, form);
      if (!data?.email) throw new Error();
      navigate("/login");
    } catch {
      setError("❌ Registration failed");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        {error && <div className="error-msg">{error}</div>}

        <label>
          Name
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            className="input-field"
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="input-field"
            autoComplete="username"
          />
        </label>

        <label>
          Password
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            className="input-field"
            autoComplete="new-password"
          />
        </label>

        <button type="submit" className="submit-btn">
          Sign Up
        </button>

        <p className="login-link">
          Already a member? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}
