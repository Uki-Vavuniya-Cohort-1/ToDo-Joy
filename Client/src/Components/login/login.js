import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./login.css";
import { Link } from "react-router-dom";
import Photo from "../Assets/darknet.jpg";

export default function Login() {
  return (
    <div className="login">
      <div className="main">
        <div className="left">
          <img src={Photo} alt="darknet" />
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <label>
              Email
              <input type="email" id="email" placeholder="Enter Email" />
            </label>
            <label>
              Password
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
              />
            </label>
            <div className="forget">
              <Link to="/Register">Register</Link>
              <Link to="/Forget">Forget Password</Link>
            </div>
            <div className="btn">
              <button type="submit">
                <FontAwesomeIcon icon={faGoogle} />
                <span>Login with Google</span>
              </button>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
