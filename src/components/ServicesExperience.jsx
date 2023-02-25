import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "UI Design",
      desc: "My aim to create interfaces which users find easy to use and pleasurable.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "Product Design",
      desc: "In a successful product design timeline, the finished product will meet the specifications of the business, help build the brand and bring in a profit, solve the users' problem, and provide aesthetic value wherever possible.",
      active: false,
    },
    {
      icon: "fa-ruler",
      title: "Branding",
      desc: "Branding is the process of creating a strong, positive perception of a company, its products or services in the customer’s mind by combining such elements as logo, design, mission statement, and a consistent theme throughout all marketing communications. Effective branding helps companies differentiate themselves from their competitors and build a loyal customer base.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>1</h3>
            <p>Year Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>01</h4>
              <p>Years Experience</p>
            </div>
            <div className="portfolio">
              <h4>0</h4>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h4>2+</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>2+</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;