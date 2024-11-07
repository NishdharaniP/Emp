
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NavBar.css'; // Import the updated CSS

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">StaffSync</div>
        <div className="nav-links">
          
          <button className="card-button dashboard" onClick={() => navigate('/dashboard')}>
            Home
          </button>
          <button className="card-button about" onClick={() => navigate('/about')}>
            About
          </button>
        
          <button className="card-button summary" onClick={() => navigate('/tasksavailable')}>
           TaskAvailable
          </button>
          <button className="card-button collaborates" onClick={() => navigate('/collaborates')}>
            Collaborates
          </button>
          <button className="card-button add-employee" onClick={() => navigate('/add')}>
            Add Employee
          </button>
          <button className="card-button edit-employee" onClick={() => navigate('/edit')}>
            Edit Employee
          </button>
          <button className="card-button employee-list" onClick={() => navigate('/list')}>
            Employee List
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
