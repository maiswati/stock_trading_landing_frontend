import React from "react";
import kite from "../assets/kite-logo.svg";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    axios
      .post("http://localhost:3002/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        setEmail("");
        setPassword("");
        navigate("/");
      });
  };
  return (
    <div
      className="m-auto border container mt-5 mb-5 rounded-1 shadow"
      style={{ width: "40%" }}
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
        <h2 className="fw-light">Login to Kite</h2>
      </div>
      <div className="row p-4">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="form-control mb-4 m-auto"
          style={{ width: "75%" }}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="form-control m-auto mb-3"
          style={{ width: "75%" }}
          placeholder="Password"
        />
        <button
          className="btn btn-custom m-auto"
          onClick={handleLogin}
          style={{ width: "75%" }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
