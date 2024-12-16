const express = require('express');
const {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployeeById,
  deleteEmployeeById,
} = require('../controllers/employees');
const router = express.Router();

// /api/companies
router.get('/', getAllEmployees);

router.get('/:id', getEmployeeById);

router.post('/', createEmployee);

router.put('/:id', updateEmployeeById);

router.delete('/:id', deleteEmployeeById);

module.exports = router;
