import React from "react";
import kite from "../../assets/kite-logo.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const handleSignup = () => {
    axios
      .post("https://stock-trading-backend-j3jm.onrender.com/signup", {
        email: email,
        password: password,
        username: username,
      })
      .then((res) => {
        console.log(res);
        setEmail("");
        setPassword("");
        setUsername("");
        navigate("/login");
      });
  };

  return (
    <div
      className="m-auto shadow border container mt-5 mb-5 rounded-1"
      style={{ width: "70%" }}
    >
      <div className="row text-center p-5">
        <img
          className="m-auto"
          src={kite}
          alt="kite"
          style={{ width: "30%" }}
        />
      </div>
      <div className="row text-center">
        <h2 className="fw-light">Sign up to Kite</h2>
      </div>
      <div className="row p-4">
        <input
          type="email"
          className="form-control mb-4 m-auto"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          style={{ width: "75%" }}
          placeholder="Email"
        />
        <input
          type="password"
          className="form-control m-auto"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          style={{ width: "75%" }}
          placeholder="Password"
        />
        <input
          type="text"
          className="form-control mt-4 mb-4 m-auto"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          style={{ width: "75%" }}
          placeholder="Username"
        />
        <button
          className="btn btn-custom m-auto"
          onClick={handleSignup}
          style={{ width: "75%" }}
        >
          Sign up
        </button>
        <p className="text-center mt-2 mb-2">OR</p>
        <NavLink style={{ textDecoration: "none" }} to="/login">
          <p className="text-center">Login</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SignupPage;
