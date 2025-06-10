import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Appcontext } from "./App";

export default function Login() {
  const [user, setUser] = useContext(Appcontext);
  const handleSubmit = () => {
    console.log(user);
  };
  return (
    <div>
      <h2>Login Form</h2>
      <p><input type="text" /></p>
      <p><input type="password" /></p>
      <p><button>Login</button></p>
      <hr />
      <p>
        <Link to="/register">Create Account</Link>
      </p>
    </div>
  );
}
