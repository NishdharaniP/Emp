import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchEmployees } from '../services/employeeService';
import '../styles/EmployeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
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

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            {employee.name} - {employee.position}
            <button onClick={() => handleShowDetails(employee)}>Show Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;

