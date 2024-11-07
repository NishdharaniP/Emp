import React, { useState, useEffect } from 'react';
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
        password: '',
        phoneNumber: '',
        address: '',
        emergencyContact: '',
        relationshipToEmergency: '',
        bloodGroup: '',
        education: '',
        languagesKnown: [],
        aadharNo: '',
        panNo: '',
        githubId: '',
        linkedIn: '',
    });
    const [showPopup, setShowPopup] = useState(false);

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
            const response = await addEmployee(employee);
            console.log('Employee added successfully:', response); // Log the response to confirm success
            setShowPopup(true); // Show popup on successful addition
            setTimeout(() => {
                setShowPopup(false); // Hide popup after 2 seconds
                navigate('/list'); // Redirect after the popup closes
            }, 2000);
        } catch (error) {
            console.error('Failed to add employee:', error);
        }
    };

    useEffect(() => {
        if (showPopup) {
            console.log('Popup is now visible!');
        }
    }, [showPopup]);

    return (
        <div >
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
                    Password:
                    <input type="password" name="password" value={employee.password} onChange={handleChange} placeholder="Password" required />
                </label>
                <label>
                    Aadhar Number:
                    <input type="text" name="aadharNo" value={employee.aadharNo} onChange={handleChange} placeholder="Aadhar Number" required />
                </label>
                <label>
                    PAN Number:
                    <input type="text" name="panNo" value={employee.panNo} onChange={handleChange} placeholder="PAN Number" required />
                </label>
                <label>
                    GitHub ID:
                    <input type="text" name="githubId" value={employee.githubId} onChange={handleChange} placeholder="GitHub ID" />
                </label>
                <label>
                    LinkedIn Profile:
                    <input type="url" name="linkedIn" value={employee.linkedIn} onChange={handleChange} placeholder="LinkedIn Profile" />
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
                    Emergency Contact:
                    <input type="tel" name="emergencyContact" value={employee.emergencyContact} onChange={handleChange} placeholder="Emergency Contact" required />
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
            
            {showPopup && (
                <div className="popup">
                    {employee.name} details are added successfully!
                </div>
            )}
        </div>
       
    );
};

export default AddEmployee;
