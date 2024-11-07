import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchEmployees, deleteEmployeeById } from '../services/employeeService';
import '../styles/EditList.css';

const EditList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
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

  // Filter employees based on search input
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="edit-list">
      <h2>Edit List</h2>
      
      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <i className="fa fa-search search-icon"></i> {/* Search Icon */}
      </div>

      <ul>
        {filteredEmployees.map((employee) => (
          <li key={employee._id}>
            <div className="employee-info">
              {/* Edit Icon before Name */}
              <i className="fa fa-edit edit-icon"></i>
              <span className="employee-name">{employee.name}</span>
            </div>
            
            <div className="button-container">
              <button onClick={() => handleShowDetails(employee)}>Edit</button>
              <button onClick={() => handleDelete(employee)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditList;
