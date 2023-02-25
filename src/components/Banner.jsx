/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import photo from "./../assets/images/My_Pic.jpg";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src={photo} alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Prasenjeet Mahato</h6>
            <h3>Full Stack Web Developer</h3>
            <p>
            Aspiring Full Stack Developer with a solid foundation in Java. Completed a Java Full Stack Web Development Course from @Unikaksha and am eager to apply my knowledge to real world projects. Proficient in HTML, CSS, JAVASCRIPT and MYSQL. Looking for opportunity to grow and make a difference…..!!
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;