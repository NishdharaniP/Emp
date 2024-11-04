// components/HomePage.js
import React from 'react';
import '../styles/Home.css';

const Home= () => {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="hero-section">
        <h1 className="hero-title">Welcome to StaffSync</h1>
        <p className="hero-subtitle">Empowering You to Manage Your Workforce Efficiently</p>
      </header>

      {/* About Section */}
      <section className="about-section">
        <h2>About StaffSync</h2>
        <p>
          StaffSync is a comprehensive employee management solution designed to simplify your workflow and boost productivity. With an intuitive interface and powerful tools, StaffSync provides a central platform for managing your team’s daily operations. Whether it’s tracking attendance, monitoring performance, or managing payroll, we help you streamline essential HR processes, saving time and resources.
        </p>
        <p>
          Our system is built to be scalable and adaptable, making it suitable for small businesses and large enterprises alike. We aim to create a seamless experience that lets managers and employees stay connected, informed, and motivated, fostering a workplace where both efficiency and job satisfaction thrive.
        </p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Our Key Features</h2>
        <div className="features-grid">
          <div className="feature-card attendance">
            <img src="https://img.icons8.com/fluency/96/attendance.png" alt="Attendance" />
            <h3>Attendance Tracking</h3>
            <p>Seamlessly monitor and record employee attendance with real-time updates. StaffSync’s attendance tracking ensures accurate reporting and provides month-end attendance summaries for easy payroll processing.</p>
          </div>
          <div className="feature-card tasks">
            <img src="https://img.icons8.com/fluency/96/task-completed.png" alt="Task Management" />
            <h3>Task Management</h3>
            <p>Assign and oversee tasks, set deadlines, and track progress to ensure that projects stay on course. StaffSync provides managers with an overview of team productivity, helping identify strengths and areas for improvement.</p>
          </div>
          <div className="feature-card performance">
            <img src="https://img.icons8.com/fluency/96/performance.png" alt="Performance Monitoring" />
            <h3>Performance Monitoring</h3>
            <p>Get valuable insights into employee performance with automated reports. Track key performance indicators to support ongoing development and reward high achievers.</p>
          </div>
          <div className="feature-card payroll">
            <img src="https://img.icons8.com/fluency/96/money-bag.png" alt="Payroll Management" />
            <h3>Payroll Management</h3>
            <p>Automate payroll calculations based on attendance, overtime, and bonuses. Our payroll management ensures timely payments and minimizes errors, helping you maintain a satisfied workforce.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, please don’t hesitate to reach out. Our support team is here to help you make the most out of StaffSync.</p>
        <div className="contact-details">
          <p><strong>Email:</strong> support@staffsync.com</p>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p><strong>Address:</strong> 1234 Management Lane, Business City, BC 12345</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} StaffSync. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
