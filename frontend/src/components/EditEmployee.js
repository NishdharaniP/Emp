import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEmployee, updateEmployee } from '../services/employeeService';

import './EmployeeStyle.css';

const EditEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                const employeeData = await getEmployee(id);
                setEmployee(employeeData);
            } catch (error) {
                setError('Could not fetch employee data');
            }
        };

        if (id) {
            fetchEmployeeData();
        }
    }, [id]);

    if (error) {
        return <p>{error}</p>;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            [name]: value,
        }));
    };

    const handleLanguageChange = (e) => {
        const { value, checked } = e.target;
        setEmployee((prevEmployee) => {
            const newLanguages = checked
                ? [...prevEmployee.languagesKnown, value]
                : prevEmployee.languagesKnown.filter(lang => lang !== value);
            return { ...prevEmployee, languagesKnown: newLanguages };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateEmployee(id, employee);
            window.alert(`${employee.name} was updated successfully.`);
            navigate('/edit'); // Redirect to employee list or home page after updating
        } catch (error) {
            console.error('Failed to update employee:', error);
            setError('Failed to update employee data');
        }
    };

    return (
        <div>
           
            {employee && (
                <form onSubmit={handleSubmit}>
                    <label>
                        Employee Name:
                        <input 
                            type="text" 
                            name="name" 
                            value={employee.name || ''} 
                            onChange={handleInputChange} 
                        />
                    </label>
                    <label>
                        Position:
                        <input 
                            type="text" 
                            name="position" 
                            value={employee.position || ''} 
                            onChange={handleInputChange} 
                        />
                    </label>
                    <label>
                        Department:
                        <select name="department" value={employee.department} onChange={handleInputChange}>
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
                        <input 
                            type="number" 
                            name="salary" 
                            value={employee.salary || ''} 
                            onChange={handleInputChange} 
                        />
                    </label>
                    <label>
                        Date of Birth:
                        <input 
                            type="date" 
                            name="dob" 
                            value={employee.dob || ''} 
                            onChange={handleInputChange} 
                        />
                    </label>
                    <label>
                        Date of Joining:
                        <input 
                            type="date" 
                            name="dateOfJoining" 
                            value={employee.dateOfJoining || ''} 
                            onChange={handleInputChange} 
                        />
                    </label>
                    <label>
                        Marital Status:
                        <select name="maritalStatus" value={employee.maritalStatus} onChange={handleInputChange}>
                            <option value="">Select Marital Status</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Widowed">Widowed</option>
                        </select>
                    </label>
                    {/* Add other fields like email, password, phone number, etc. similarly */}
                    <label>
                    Email:
                    <input type="email" name="email" value={employee.email} onChange={handleInputChange} placeholder="Email" required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={employee.password} onChange={handleInputChange} placeholder="Password" required />
                </label>
                <label>
                    Aadhar Number:
                    <input type="text" name="aadharNo" value={employee.aadharNo} onChange={handleInputChange} placeholder="Aadhar Number" required />
                </label>
                <label>
                    PAN Number:
                    <input type="text" name="panNo" value={employee.panNo} onChange={handleInputChange} placeholder="PAN Number" required />
                </label>
                <label>
                    GitHub ID:
                    <input type="text" name="githubId" value={employee.githubId} onChange={handleInputChange} placeholder="GitHub ID" />
                </label>
                <label>
                    LinkedIn Profile:
                    <input type="url" name="linkedIn" value={employee.linkedIn} onChange={handleInputChange} placeholder="LinkedIn Profile" />
                </label>
                <label>
                    Phone Number:
                    <input type="tel" name="phoneNumber" value={employee.phoneNumber} onChange={handleInputChange} placeholder="Phone Number" required />
                </label>
                <label>
                    Address:
                    <input type="text" name="address" value={employee.address} onChange={handleInputChange} placeholder="Address" required />
                </label>
                <label>
                    Emergency Contact:
                    <input type="tel" name="emergencyContact" value={employee.emergencyContact} onChange={handleInputChange} placeholder="Emergency Contact" required />
                </label>
                <label>
                    Relationship to Emergency Contact:
                    <input type="text" name="relationshipToEmergency" value={employee.relationshipToEmergency} onChange={handleInputChange} placeholder="Relationship to Emergency Contact" required />
                </label>
                <label>
                    Blood Group:
                    <input type="text" name="bloodGroup" value={employee.bloodGroup} onChange={handleInputChange} placeholder="Blood Group" required />
                </label>
                <label>
                    Education Details:
                    <input type="text" name="education" value={employee.education} onChange={handleInputChange} placeholder="Education Details" />
                </label>
                    <fieldset>
                        <legend>Languages Known:</legend>
                        {['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Italian', 'Portuguese', 'Russian', 'Arabic'].map(lang => (
                            <label key={lang}>
                                <input 
                                    type="checkbox" 
                                    value={lang} 
                                    checked={employee.languagesKnown?.includes(lang)} 
                                    onChange={handleLanguageChange} 
                                />
                                {lang}
                            </label>
                        ))}
                    </fieldset>

                    <button type="submit">Update Employee</button>
                </form>
            )}
        </div>
    );
};

export default EditEmployee;
