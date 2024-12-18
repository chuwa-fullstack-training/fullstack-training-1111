const express = require('express');
const router = express.Router();

const {
  createEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  getAllEmployees
} = require('../controllers/employee');

// api
router.post('/employees', createEmployee);

router.get('/employees', getAllEmployees);

router.get('/employees/:id', getEmployeeById);

router.put('/employees/:id', updateEmployee);

router.delete('/employees/:id', deleteEmployee);

module.exports = router;