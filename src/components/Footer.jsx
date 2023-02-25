/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Prasenjeet.</span>
        <div className="links">
          <a href="https://www.facebook.com/profile.php?id=100088814093205">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.youtube.com/@prasenjeetmahato2455/about">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://twitter.com/Er_ReBeLsTaR">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/prasenjeet-mahato-b9981a200/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/prasenjeetmahato">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By Prasenjeet
        </p>
      </div>
    </footer>
  );
}

export default Footer;