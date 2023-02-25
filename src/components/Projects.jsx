/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import photo1 from "./../assets/images/1.jpg";
import photo2 from "./../assets/images/2.jpg";

function Projects() {
  const [projects] = useState([
    {
      title: "Online Examination System",
      img: photo1,
      gLink: "https://github.com/prasenjeetmahato/Online-Examination-System",
      lLink: "https://github.com/prasenjeetmahato/",
      desc: `The universities are shut due to the lockdown imposed by the government in order to contain the deadly novel coronavirus. In order to stay connected with the students and prevent the academic loss, most of the colleges and universities are conducting their classes online and also opting for online examination systems.

      So, imagine a scenario where all of your students are sitting at home in this quarantine environment and you want to conduct exams for those students.

      With the help of technology, you can easily conduct exams where students are distributed across multiple locations. They can appear for the Online Examination while sitting at their homes.`
    },
    {
      title: "My Portfolio",
      img: photo2,
      gLink: "https://github.com/prasenjeetmahato/",
      lLink: "https://github.com/prasenjeetmahato/",
      desc: `A portfolio is simply a generic term for a grouping of things. Depending on the context and industry, it can be a collection of assets, products or other items. A portfolio in project management refers to a grouping of projects, and programs. It can also include other project-related activities and responsibilities. The purpose of a portfolio is to establish centralized management and oversight for many projects and programs.`
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/prasenjeetmahato/"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
              {project.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;