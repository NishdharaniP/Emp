// backend/controllers/employeeController.js
const Employee = require('../models/Employee');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addEmployee = async (req, res) => {
  const employee = new Employee(req.body);
  try {
    const savedEmployee = await employee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.json({ message: 'Employee deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Register a new employee
exports.registerEmployee = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the employee already exists
    const existingEmployee = await Employee.findOne({ username });
    if (existingEmployee) {
      return res.status(400).json({ message: 'Username already exists.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const employee = new Employee({ username, password: hashedPassword });

    await employee.save();
    res.status(201).json({ message: 'Employee registered successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login an employee
exports.loginEmployee = async (req, res) => {
  const { username, password } = req.body;

  try {
    const employee = await Employee.findOne({ username });
    if (!employee) {
      return res.status(400).json({ message: 'User not found.' });
    }

    const isMatch = await bcrypt.compare(password, employee.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    // Generate a token
    const token = jwt.sign({ id: employee._id }, process.env.JWT_SECRET || 'your_jwt_secret');
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
