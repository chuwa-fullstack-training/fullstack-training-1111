const express = require('express');
const router = express.Router();

const {
  createEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  getAllEmployees,
} = require('../controllers/employee');

const authMiddleware = require('../middlewares/auth');

// api
router.post('/employees', createEmployee);

router.get('/employees', authMiddleware, getAllEmployees);

router.get('/employees/:id', authMiddleware, getEmployeeById);

router.put('/employees/:id', authMiddleware, updateEmployee);

router.delete('/employees/:id', authMiddleware, deleteEmployee);

module.exports = router;