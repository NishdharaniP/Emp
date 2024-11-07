// backend/routes/employeeRoutes.js
const express = require('express');
const {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeById,
  registerEmployee,
  loginEmployee
} = require('../controllers/employeeController');

const router = express.Router();

// Employee CRUD operations
router.get('/', getEmployees);
router.get('/:id', getEmployeeById);
router.post('/', addEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

// Authentication routes
router.post('/register', registerEmployee); // Registration route
router.post('/login', loginEmployee);       // Login route

module.exports = router;

