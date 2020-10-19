import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img
          className="footer-img"
          src={require("../Images/logo.png")}
          alt=""
        />
      </div>
      <small className="website-rights">
        © 2020 Zuper. All Rights Reserved.
      </small>
      <div className="social-icon">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.facebook.com/Zuper-104503528113448/"
        >
          <span className="fab fa-facebook-f" aria-hidden="true"></span>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/ivan-lopes-135b8b1a/"
        >
          <span className="fab fa-linkedin-in" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
