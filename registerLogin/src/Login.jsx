import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Login() {

  

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http:///localhost:3000/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/");
        }
        else {
          alert("Invalid credentials");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
      <Navbar/>
      </div>

      <form>

        
        <h2>Login Form</h2>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Login
        </button>
      </form>

      <p>Dont have an account</p>
      <Link to="/register">Register</Link>
    </>
  );
}

export default Login;
