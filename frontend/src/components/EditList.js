
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchEmployees, deleteEmployeeById } from '../services/employeeService';
import '../styles/EditList.css';

const EditList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const employeesData = await fetchEmployees();
        setEmployees(employeesData);
      } catch (error) {
        console.error('Failed to fetch employees:', error);
      }
    };
    getEmployees();
  }, []);

  const handleShowDetails = (employee) => {
    navigate(`/employee/${employee._id}/edit`);
  };

  const handleDelete = async (employee) => {
    // Show confirmation dialog before deleting
    const confirmDelete = window.confirm(`Are you sure you want to delete ${employee.name}?`);
    if (!confirmDelete) return; // If user cancels, exit function

    try {
      await deleteEmployeeById(employee._id); // Call the delete service
      setEmployees(employees.filter(e => e._id !== employee._id)); // Remove employee from state

      // Show success alert after deletion
      window.alert(`${employee.name} was deleted successfully.`);
    } catch (error) {
      console.error('Failed to delete employee:', error);
    }
  };

  return (
    <div>
      <h2>Edit List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            {employee.name} - {employee.position}
            <button onClick={() => handleShowDetails(employee)}>Edit</button>
            <button onClick={() => handleDelete(employee)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditList;
