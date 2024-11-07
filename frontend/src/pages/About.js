import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
     
      <h1 className="company-name">Techi Guard</h1>
      <div className="description-container">
        <p className="description">
          Techi Guard is a leading provider of innovative security solutions, dedicated to protecting individuals and businesses from potential threats. Recently, we launched our cutting-edge product line, including advanced surveillance systems and smart monitoring solutions, designed to enhance security for our clients.
        </p>
      </div>
      <h2 className="departments-title">Available Departments:</h2>
      <div className="departments-container">
        <div className="department-card">
          <h3>Research and Development</h3>
          <p>Focused on creating innovative security solutions and enhancing existing products.</p>
        </div>
        <div className="department-card">
          <h3>Customer Support</h3>
          <p>Ensuring client satisfaction and providing assistance with our products and services.</p>
        </div>
        <div className="department-card">
          <h3>Sales and Marketing</h3>
          <p>Driving product awareness and building relationships with potential clients.</p>
        </div>
        <div className="department-card">
          <h3>Human Resources</h3>
          <p>Managing talent acquisition and employee welfare to support our growing team.</p>
        </div>
        <div className="department-card">
          <h3>IT Services</h3>
          <p>Supporting technology infrastructure and ensuring system security and efficiency.</p>
        </div>
      </div>
      <p className="employees-count">Total Employees: 150</p>
    </div>
  );
};

export default About;
