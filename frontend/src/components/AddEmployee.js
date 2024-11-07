/* React, { useState } from 'react';
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
        linkedIn: ''
    });
    const [errors, setErrors] = useState({});
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const handleChange = (e) => {
            const { name, value } = e.target;
            setEmployee((prev) => ({
                ...prev,
                [name]: name === 'dob' || name === 'dateOfJoining' ? value : value.trim()
            }));
            validateField(name, value);
        };
        
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

    const validateField = (name, value) => {
        let errorMsg = '';
        switch (name) {
            case 'name':
                errorMsg = value.length < 3 ? 'Name must be at least 3 characters' : '';
                break;
            case 'position':
                errorMsg = value ? '' : 'Position is required';
                break;
            case 'department':
                errorMsg = value ? '' : 'Department is required';
                break;
            case 'salary':
                errorMsg = isNaN(value) || value <= 0 ? 'Salary must be a positive number' : '';
                break;
            case 'dob':
                errorMsg = value ? '' : 'Date of birth is required';
                break;
            case 'dateOfJoining':
                errorMsg = value ? '' : 'Date of joining is required';
                break;
            case 'maritalStatus':
                errorMsg = value ? '' : 'Marital status is required';
                break;
            case 'email':
                errorMsg = /\S+@\S+\.\S+/.test(value) ? '' : 'Invalid email format';
                break;
            case 'password':
                errorMsg = value.length < 6 ? 'Password must be at least 6 characters' : '';
                break;
            case 'phoneNumber':
                errorMsg = /^\d{10}$/.test(value) ? '' : 'Phone number must be 10 digits';
                break;
            case 'aadharNo':
                errorMsg = /^\d{12}$/.test(value) ? '': 'Aadhar number must be 12 digits';
                break;
            case 'panNo':
                errorMsg = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value) ? '' : 'Invalid PAN format';
                break;
            case 'address':
                errorMsg = value ? '' : 'Address is required';
                break;
            case 'emergencyContact':
                errorMsg = /^\d{10}$/.test(value) ? '' : 'Emergency contact must be 10 digits';
                break;
            case 'bloodGroup':
                errorMsg = value ? '' : 'Blood group is required';
                break;
            case 'relationshipToEmergency':
                errorMsg = value ? '' : 'Relationship to emergency contact is required';
                break;
            case 'education':
                errorMsg = value ? '' : 'Education is required';
                break;
            case 'githubId':
                errorMsg = value ? '' : 'GitHub ID is required';
                break;
            case 'linkedIn':
                errorMsg = value ? '' : 'LinkedIn profile is required';
                break;
            default:
                break;
        }
        setErrors(prevErrors => ({ ...prevErrors, [name]: errorMsg }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        Object.keys(employee).forEach(field => validateField(field, employee[field]));
        
        // Instead of validationErrors, you're directly using errors
        if (Object.values(errors).some(errorMsg => errorMsg)) return;
    
        try {
            const response = await addEmployee(employee);
            console.log('Employee added successfully:', response);
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);
                navigate('/list');
            }, 2000);
        } catch (error) {
            console.error('Failed to add employee:', error);
        }
    };
    
    
       

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Employee Name:
                    <input type="text" name="name" value={employee.name} onChange={handleChange} required />
                    {errors.name && <span className="error">{errors.name}</span>}
                </label>
                <label>
                    Position:
                    <input type="text" name="position" value={employee.position} onChange={handleChange} required />
                    {errors.position && <span className="error">{errors.position}</span>}
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
    {errors.department && <span className="error">{errors.department}</span>}
</label>
                <label>
                    Salary:
                    <input type="number" name="salary" value={employee.salary} onChange={handleChange} required />
                    {errors.salary && <span className="error">{errors.salary}</span>}
                </label>
                <label>
                    Date of Birth:
                    <input type="date" name="dob" value={employee.dob} onChange={handleChange} required />
                    {errors.dob && <span className="error">{errors.dob}</span>}
                </label>
                <label>
                    Date of Joining:
                    <input type="date" name="dateOfJoining" value={employee.dateOfJoining} onChange={handleChange} required />
                    {errors.dateOfJoining && <span className="error">{errors.dateOfJoining}</span>}
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
    {errors.maritalStatus && <span className="error">{errors.maritalStatus}</span>}
</label>
                <label>
                    Email:
                    <input type="email" name="email" value={employee.email} onChange={handleChange} required />
                    {errors.email && <span className="error">{errors.email}</span>}
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={employee.password} onChange={handleChange} required />
                    {errors.password && <span className="error">{errors.password}</span>}
                </label>
                <label>
                    Phone Number:
                    <input type="tel" name="phoneNumber" value={employee.phoneNumber} onChange={handleChange} required />
                    {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
                </label>
                <label>
                    Address:
                    <input type="text" name="address" value={employee.address} onChange={handleChange} required />
                    {errors.address && <span className="error">{errors.address}</span>}
                </label>
                <label>
                    Emergency Contact:
                    <input type="tel" name="emergencyContact" value={employee.emergencyContact} onChange={handleChange} required />
                    {errors.emergencyContact && <span className="error">{errors.emergencyContact}</span>}
                </label>
                <label>
                    Relationship to Emergency Contact:
                    <input type="text" name="relationshipToEmergency" value={employee.relationshipToEmergency} onChange={handleChange} required />
                    {errors.relationshipToEmergency && <span className="error">{errors.relationshipToEmergency}</span>}
                </label>
                <label>
                    Blood Group:
                    <input type="text" name="bloodGroup" value={employee.bloodGroup} onChange={handleChange} required />
                    {errors.bloodGroup && <span className="error">{errors.bloodGroup}</span>}
                </label>
                <label>
                    Education:
                    <input type="text" name="education" value={employee.education} onChange={handleChange} required />
                    {errors.education && <span className="error">{errors.education}</span>}
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
           
                <label>
                    Aadhar No:
                    <input type="text" name="aadharNo" value={employee.aadharNo} onChange={handleChange} required />
                    {errors.aadharNo && <span className="error">{errors.aadharNo}</span>}
                </label>
                <label>
                    PAN No:
                    <input type="text" name="panNo" value={employee.panNo} onChange={handleChange} required />
                    {errors.panNo && <span className="error">{errors.panNo}</span>}
                </label>
                <label>
                    GitHub ID:
                    <input type="text" name="githubId" value={employee.githubId} onChange={handleChange} required />
                    {errors.githubId && <span className="error">{errors.githubId}</span>}
                </label>
                <label>
                    LinkedIn:
                    <input type="text" name="linkedIn" value={employee.linkedIn} onChange={handleChange} required />
                    {errors.linkedIn && <span className="error">{errors.linkedIn}</span>}
                </label>
                <button type="submit">Add Employee</button>
            </form>
            {showPopup && <div className="popup">Employee added successfully!</div>}
        </div>
    );
};

export default AddEmployee;
*/
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