const express = require('express');
const {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployeeById,
  deleteEmployeeById,
} = require('../controllers/employees');
const auth = require('../middlewares/auth');
const router = express.Router();

// /api/companies
router.get('/', auth, getAllEmployees);

router.get('/:id', auth, getEmployeeById);

router.post('/', createEmployee);

router.put('/:id', updateEmployeeById);

router.delete('/:id', deleteEmployeeById);

module.exports = router;
