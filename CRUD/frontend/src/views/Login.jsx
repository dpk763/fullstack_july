import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"; // Import CSS

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const navigation = useNavigate();
  
      useEffect(()=>{
          const token = localStorage.getItem('token');
          if(token){
              navigation('/dashboard');
          }
      },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/users/login", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data);
        navigation('/dashboard');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Welcome Back</h2>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>
          Don’t have an account?{" "}
          <Link to="/" className="signup-link">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
