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

export default AddEmployee;*/
import React, { useState } from 'react';
import { addEmployee } from '../services/employeeService';
import { useNavigate } from 'react-router-dom';
import './EmployeeStyle.css';

const AddEmployee = () => {
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLanguageChange = (e) => {
        const { value, checked } = e.target;
        setEmployee((prev) => {
            const newLanguages = checked
                ? [...prev.languagesKnown, value]
                : prev.languagesKnown.filter(lang => lang !== value);
            return { ...prev, languagesKnown: newLanguages };
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await addEmployee(employee);
            navigate('/'); // Redirect to employee list or home page after adding
        } catch (error) {
            console.error('Failed to add employee:', error);
        }
    };

    return (
        <div>
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Employee Name:
                    <input type="text" name="name" value={employee.name} onChange={handleChange} placeholder="Employee Name" required />
                </label>
                <label>
                    Position:
                    <input type="text" name="position" value={employee.position} onChange={handleChange} placeholder="Employee Position" required />
                </label>
                <label>
                    Department:
                    <select name="department" value={employee.department} onChange={handleChange} required>
                        <option value="">Select Department</option>
                        <option value="Development">Development</option>
                        <option value="Quality Assurance (QA)">Quality Assurance (QA)</option>
                        <option value="Project Management">Project Management</option>
                        <option value="Product Management">Product Management</option>
                        <option value="User Experience (UX)/User Interface (UI)">User Experience (UX)/User Interface (UI)</option>
                        <option value="Sales and Marketing">Sales and Marketing</option>
                        <option value="Customer Support">Customer Support</option>
                        <option value="IT and Infrastructure">IT and Infrastructure</option>
                        <option value="Human Resources (HR)">Human Resources (HR)</option>
                        <option value="Finance">Finance</option>
                        <option value="Legal">Legal</option>
                        <option value="Research and Development (R&D)">Research and Development (R&D)</option>
                    </select>
                </label>
                <label>
                    Salary:
                    <input type="number" name="salary" value={employee.salary} onChange={handleChange} placeholder="Salary" required />
                </label>
                <label>
                    Date of Birth:
                    <input type="date" name="dob" value={employee.dob} onChange={handleChange} required />
                </label>
                <label>
                    Date of Joining:
                    <input type="date" name="dateOfJoining" value={employee.dateOfJoining} onChange={handleChange} required />
                </label>
                <label>
                    Marital Status:
                    <select name="maritalStatus" value={employee.maritalStatus} onChange={handleChange} required>
                        <option value="">Select Marital Status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                    </select>
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={employee.email} onChange={handleChange} placeholder="Email" required />
                </label>
                <label>
                    Phone Number:
                    <input type="tel" name="phoneNumber" value={employee.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
                </label>
                <label>
                    Address:
                    <input type="text" name="address" value={employee.address} onChange={handleChange} placeholder="Address" required />
                </label>
                <label>
                    Emergency Contact Name:
                    <input type="text" name="emergencyContact" value={employee.emergencyContact} onChange={handleChange} placeholder="Emergency Contact Name" required />
                </label>
                <label>
                    Relationship to Emergency Contact:
                    <input type="text" name="relationshipToEmergency" value={employee.relationshipToEmergency} onChange={handleChange} placeholder="Relationship to Emergency Contact" required />
                </label>
                <label>
                    Blood Group:
                    <input type="text" name="bloodGroup" value={employee.bloodGroup} onChange={handleChange} placeholder="Blood Group" required />
                </label>
                <label>
                    Education Details:
                    <input type="text" name="education" value={employee.education} onChange={handleChange} placeholder="Education Details" />
                </label>
                <fieldset>
                    <legend>Languages Known:</legend>
                    {['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Italian', 'Portuguese', 'Russian', 'Arabic'].map(lang => (
                        <label key={lang}>
                            <input 
                                type="checkbox" 
                                value={lang} 
                                checked={employee.languagesKnown.includes(lang)} 
                                onChange={handleLanguageChange} 
                            />
                            {lang}
                        </label>
                    ))}
                </fieldset>
                <button type="submit">Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployee;

