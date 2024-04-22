import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';
import styles from "../src/SignUpForm.module.css";

function SignUpForm() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify
        ({
          name: name,
          username:username,
          phonenumber:phoneNumber,
          password:password
      }),
      })
      if (response.ok) {
        navigate("/LoginForm");
        // Form data successfully submitted     JSON.stringify
        // You can perform additional actions here, e.g., display success message, redirect user, etc.
      } else {
        console.error("some error is there");
       
      }
    }catch (error) {
        console.error("Error submitting form data:", error);
        
      }
    // console.log("Form submitted");
    // console.log("Name:", name);
    // console.log("Username:", username);
    // console.log("Phone Number:", phoneNumber);
    // console.log("Password:", password);
     
    };


  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center align-items-center vw-100">
          <div className={`col-md-6 ${styles.formContainer}`}>
            <div className="card">
              <h2 className="card-header text-center">Sign Up</h2>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className={`form-label ${styles.label}`}>Enter your Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className={`form-control ${styles.input}`}
                      placeholder="Name"
                      value={name}
                      onChange={handleNameChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="username" className={`form-label ${styles.label}`}>Enter your Username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className={`form-control ${styles.input}`}
                      placeholder="Username"
                      value={username}
                      onChange={handleUsernameChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phoneNumber" className={`form-label ${styles.label}`}>Enter your Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      className={`form-control ${styles.input}`}
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className={`form-label ${styles.label}`}>Enter your Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className={`form-control ${styles.input}`}
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                  <button type="submit" className="btn btn-primary d-block mx-auto" 
                  >Sign Up</button>

                  </div>
                </form>
              </div>
              <div className="card-footer text-center">
                <p>Already have an account? <a href="/LoginForm">Log In</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
