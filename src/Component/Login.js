import React, { useState } from "react";
import apiurl from "./config";
import axios from "axios";
import Header from "./Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("user_email", email);
    formData.append("user_password", password);

    const customHeaders = {
      Accept: "application/json, text/plain, */*",
    };

    try {
      const response = await axios.post(
        `${apiurl[0].apiUrl}React/login_react`,
        formData,
        {
          headers: customHeaders,
        }
      );


    } catch (error) {
      
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit} text="center">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
          <br />
          <span className="form-validation" style={{ color: "red" }}></span>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            id="form-login-password-2"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
          <br />
          <span
            className="form-validation"
            id="unicpass"
            style={{ color: "red" }}
          ></span>
        </div>
        <div className="mt-4">
          <div className="row">
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-outline btn-block btn-lg"
                style={{
                  backgroundColor: "#000080",
                  color: "white",
                  borderRadius: 20,
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
