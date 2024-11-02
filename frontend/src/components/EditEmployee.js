/*import React, { useEffect, useState } from 'react';
import { getEmployee, updateEmployee } from '../services/employeeService';
import { useParams, useNavigate } from 'react-router-dom';
import './EmployeeStyle.css';
const EditEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({ name: '', position: '', department: '', salary: '' });

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const data = await getEmployee(id);
                setEmployee(data);
            } catch (error) {
                console.error('Failed to fetch employee:', error);
            }
        };
        fetchEmployee();
    }, [id]);

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await updateEmployee(id, employee);
            navigate('/');
        } catch (error) {
            console.error('Failed to update employee:', error);
        }
    };

    return (
        <div>
            <h2>Edit Employee</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={employee.name}
                    onChange={handleChange}
                    placeholder="Employee Name"
                    required
                />
                <input
                    type="text"
                    name="position"
                    value={employee.position}
                    onChange={handleChange}
                    placeholder="Employee Position"
                    required
                />
                <input
                    type="text"
                    name="department"
                    value={employee.department}
                    onChange={handleChange}
                    placeholder="Department"
                    required
                />
                <input
                    type="number"
                    name="salary"
                    value={employee.salary}
                    onChange={handleChange}
                    placeholder="Salary"
                    required
                />
                <button type="submit">Update Employee</button>
            </form>
        </div>
    );
};

export default EditEmployee;
// src/components/EmployeeList.js
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
        setEmployees(employees.filter((employee) => employee._id !== id));
      } catch (error) {
        console.error('Failed to delete employee:', error);
      }
    }
  };

  return (
    <div>
      <h2>Employee List</h2>
      <Link to="/add">Add Employee</Link>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            {employee.name} - {employee.position}
            <Link to={`/edit/${employee._id}`}>Edit</Link>
            <button onClick={() => handleDelete(employee._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
*/

// src/components/EmployeeList.js
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
        console.log('Fetched employees:', employeesData); // Debugging: Log fetched data
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
        setEmployees(employees.filter((employee) => employee._id !== id));
        console.log(`Deleted employee with id ${id}`); // Debugging: Log deleted ID
      } catch (error) {
        console.error('Failed to delete employee:', error);
      }
    }
  };

  return (
    <div>
      <h2>EditEmployee</h2>
      
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            {employee.name} - {employee.position}
            <Link to={`/edit/${employee._id}`}>Edit</Link>
            <button onClick={() => handleDelete(employee._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
/*
// src/components/EditEmployee.js
import React, { useEffect, useState } from 'react';
import { getEmployee, updateEmployee } from '../services/employeeService';
import { useParams, useNavigate } from 'react-router-dom';
import './EmployeeStyle.css';

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: '',
    position: '',
    department: '',
    salary: '',
    dob: '',
    dateOfJoining: '',
    maritalStatus: '',
    email: '',
    phoneNumber: '',
    address: '',
    emergencyContact: '',
    relationshipToEmergency: '',
    bloodGroup: '',
    education: '',
    languagesKnown: []
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await getEmployee(id);
        if (data) {
          setEmployee(data);
        } else {
          console.error('Employee data is not available.');
        }
      } catch (error) {
        console.error('Failed to fetch employee:', error);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: name === 'languagesKnown' ? value.split(',') : value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateEmployee(id, employee);
      navigate('/');
    } catch (error) {
      console.error('Failed to update employee:', error);
    }
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        
      </form>
    </div>
  );
};

export default EditEmployee;

*/