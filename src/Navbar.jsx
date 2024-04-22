import React from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import styles from "../src/Navbar.module.css";


function Navbar() {
    
    const navigate = useNavigate();

    // Event handler for sign-up button click
    const handleSignUpClick = () => {
      // Navigate to the sign-up component
      navigate("/SignUpForm");
    };
      const handleLoginClick = () => {
        // Navigate to the sign-up component
        navigate("/LoginForm");
    };

  return <>
<nav className={`navbar navbar-expand-lg bg-light ${styles.navbar}`}>
      <div className={`container-fluid ${styles.bg}`}>
        <Link className={`navbar-brand ${styles.heading}`} to="/">PhotoGallery</Link> {/* Replace "Your Logo" with your actual logo or brand name */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <button className={`nav-link btn btn-link ${styles.btn}`} onClick={handleSignUpClick}>Sign Up</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link btn btn-link ${styles.btn}`} onClick={handleLoginClick}>Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
  
  </>
    
  


}

export default Navbar;
