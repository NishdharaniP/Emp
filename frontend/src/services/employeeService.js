/*// src/services/employeeService.js
import axios from 'axios';

const API_URL = 'http://localhost:5003/api/employees'; // Ensure this URL matches your backend API

// Fetch all employees
export const fetchEmployees = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

// Fetch a single employee by ID
export const getEmployee = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching employee:', error);
    throw error;
  }
};

// Add a new employee
export const addEmployee = async (employeeData) => {
  try {
    const response = await axios.post(API_URL, employeeData);
    return response.data;
  } catch (error) {
    console.error('Error adding employee:', error);
    throw error;
  }
};

// Update an existing employee
export const updateEmployee = async (id, employeeData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, employeeData);
    return response.data;
  } catch (error) {
    console.error('Error updating employee:', error);
    throw error;
  }
};

// Delete an employee
export const deleteEmployee = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting employee:', error);
    throw error;
  }
};
*/
// src/services/employeeService.js
import axios from 'axios';

const API_URL = 'http://localhost:5003/api/employees'; // Ensure this URL matches your backend API

// Fetch all employees
export const fetchEmployees = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

// Fetch a single employee by ID
export const getEmployee = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching employee:', error);
    throw error;
  }
};

// Add a new employee
export const addEmployee = async (employeeData) => {
  try {
    const response = await axios.post(API_URL, employeeData);
    return response.data;
  } catch (error) {
    console.error('Error adding employee:', error);
    throw error;
  }
};

// Update an existing employee
export const updateEmployee = async (id, employeeData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, employeeData);
    return response.data;
  } catch (error) {
    console.error('Error updating employee:', error);
    throw error;
  }
};

// Delete an employee
export const deleteEmployee = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting employee:', error);
    throw error;
  }
};
