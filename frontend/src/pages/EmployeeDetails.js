// src/components/EmployeeDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEmployee } from '../services/employeeService';
import '../styles/EmployeeDetails.css';

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

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

  if (!employee) return <p>Loading employee details...</p>;

  return (
    <div className="employee-details">
      <h2>Employee Details</h2>
      <div className="employee-card">
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>Position:</strong> {employee.position}</p>
        <p><strong>Department:</strong> {employee.department}</p>
        <p><strong>Salary:</strong> ${employee.salary}</p>
        <p><strong>Date of Birth:</strong> {employee.dob}</p>
        <p><strong>Date of Joining:</strong> {employee.dateOfJoining}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Phone:</strong> {employee.phoneNumber}</p>
        <p><strong>Address:</strong> {employee.address}</p>
        <p><strong>Emergency Contact:</strong> {employee.emergencyContact}</p>
        <p><strong>Relationship to Emergency Contact:</strong> {employee.relationshipToEmergency}</p>
        <p><strong>Blood Group:</strong> {employee.bloodGroup}</p>
        <p><strong>Education:</strong> {employee.education}</p>
        <p><strong>Languages Known:</strong> {employee.languagesKnown.join(', ')}</p>
      </div>
    </div>
  );
};

export default EmployeeDetails;
