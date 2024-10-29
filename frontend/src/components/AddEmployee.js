/*import React, { useState } from 'react';
import { addEmployee } from '../services/employeeService'; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';
import './EmployeeStyle.css';
const AddEmployee = () => {
  const [employee, setEmployee] = useState({ name: '', position: '', department: '', salary: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEmployee(employee);
      navigate('/'); // Redirect to the employee list after adding
    } catch (error) {
      console.error('Error adding employee:', error);
      // You can show a user-friendly message here
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={employee.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={employee.position}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={employee.department}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={employee.salary}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
*/
// src/components/AddEmployee.js
import React, { useState } from 'react';
import { addEmployee } from '../services/employeeService';
import { useNavigate } from 'react-router-dom';
import './EmployeeStyle.css';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({ name: '', position: '', department: '', salary: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEmployee(employee);
      navigate('/'); // Redirect to the employee list after adding
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={employee.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={employee.position}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={employee.department}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={employee.salary}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
