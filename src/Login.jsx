import React from 'react'
import { Link } from 'react-router-dom'
import App, { AppContext } from './App';
import { useContext } from 'react';


export default function Login() {
  const {user, setUser} = useContext(AppContext);
  const handleSubmit = () => {
    console.log(user);
  }
  return (
    <div>
        
        
        
        <h2>Login Form</h2>
        <p>< input type="text" placeholder='Enter username'/></p>
        <p><input type="password" placeholder='Enter password'/></p>
        <p><button onClick={handleSubmit}>Login</button></p>
        <hr />
        <Link to='/register'>Create an Account!</Link>
        
        
    </div>
  )
}