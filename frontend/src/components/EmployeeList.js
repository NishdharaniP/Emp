import React, { useEffect, useState } from 'react';
import { fetchEmployees, deleteEmployee } from '../services/employeeService';
import { Link } from 'react-router-dom';
import './EmployeeStyle.css';
const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

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

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this employee?')) {
            try {
                await deleteEmployee(id);
                setEmployees(employees.filter(employee => employee._id !== id));
            } catch (error) {
                console.error('Failed to delete employee:', error);
            }
        }
    };

    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map((employee) => (
                    <li key={employee._id}>
                        {employee.name} - {employee.position}
                        
                        <button onClick={() => handleDelete(employee._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
