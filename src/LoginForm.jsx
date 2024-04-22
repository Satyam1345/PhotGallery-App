import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

   
    

const  response = await fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify
      ({
        username: username,
        password:password,
    })})

    const res = await response.json();
    console.log(res);
    if (res.statusCode === 201) {
      // Redirect to appropriate page after successful login
      navigate("/NewPage");
    } else {
      alert("Invalid credentials");
    }
        // navigate("/NewPage");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center align-items-center vw-100">
          <div className="col-md-6">
            <div className="card">
              <h2 className="card-header text-center">Sign In</h2>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      placeholder="Enter your username"
                      value={username}
                      onChange={handleUsernameChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      name="remember_me"
                      id="remember_me"
                      className="form-check-input"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label htmlFor="remember_me" className="form-check-label">Remember Me</label>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center">
                <p>Don't have an account? <a href="/SignUpForm">Sign Up</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
