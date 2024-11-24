import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/register", { name, email, password })
      .then((res) => console.log(res))
      navigate("/login")
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form>
        <h2>Register Form</h2>
        <div className="form-group">
          <label>Name</label>
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="exampleInputName1"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
      <p>Already have an account</p>
      <Link to="/login">Login</Link>
    </>
  );
}

export default Register;
