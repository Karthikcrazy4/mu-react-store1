import React, { useState, useContext } from 'react';
import App, { AppContext } from './App';
import { Link } from 'react-router-dom';

export default function Register() {
  const {user, setUser} = useContext(AppContext);
  //const [user, setUser] = useState({});
  const clicked = () => {
    console.log(user);
};

   {/*
  const [count, setCount] = useState(0);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);

 const handleClick = () => {
    alert("Hello World!");
  };

  const updateCount = () => {
    setCount(count + 1);
  };

  const addToCount = () => {
    setCount(prev => prev + 1);
  };

  const subtractFromCount = () => {
    setCount(prev => prev - 1);
  };

  const addEmUp = () => {
    const a = Number(num1);
    const b = Number(num2);
    setSum(a + b);
  };
*/}
  return (
    <div>
      <h2>Register</h2>
      <p>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Enter email address"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Enter new password"
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
        />
      </p>
      <p>
        <button onClick={clicked}>Submit</button>
      </p>
      <hr />
      <p>
        <Link to="/login">Already a member? Login here...</Link>
      </p>
    {/*
      <hr />
      <button onClick={handleClick}>Click</button>
      <hr />
      <p>
        {count}
        <br />
        <button onClick={updateCount}>Update Count</button>
      </p>
      <p>
        <button onClick={addToCount}>+</button>
        <button onClick={subtractFromCount}>-</button>
      </p>

      <input
        type="number"
        placeholder="Enter number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={addEmUp}>Submit</button>
      <p>{sum}</p>
      */}
    </div>
  );
}