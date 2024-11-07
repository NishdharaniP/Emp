import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchEmployees } from '../services/employeeService';
import '../styles/EmployeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const employeesData = await fetchEmployees();
        console.log('Fetched employees:', employeesData); // Debugging: Log fetched data
        setEmployees(employeesData);
      } catch (error) {
        console.error('Failed to fetch employees:', error);
      }
    };
    getEmployees();
  }, []);

  const handleShowDetails = (employee) => {
    navigate(`/employee/${employee._id}`, { state: { employee } });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <i className="fa fa-search search-icon"></i> {/* Search Icon */}
      </div>
      <ul>
        {filteredEmployees.map((employee) => (
          <li key={employee._id} className="employee-item">
            <div className="employee-info">
              <div className="employee-name">
                <i className="fa fa-user employee-icon"></i>
                {employee.name}
              </div>
              <button onClick={() => handleShowDetails(employee)}>Show Details</button>
              <div className="tooltip">
                <strong>{employee.name}</strong><br />
                Position: {employee.position}<br />
                Department: {employee.department}<br />
                Email: {employee.email}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
