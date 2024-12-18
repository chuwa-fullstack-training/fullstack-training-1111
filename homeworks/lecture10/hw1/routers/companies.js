const express = require('express');
const router = express.Router();
const {
  createCompany,
  getCompanyById,
  updateCompany,
  deleteCompany,
  getAllCompanies,
  getAllEmployeesOfCompany
} = require('../controllers/company');

// api
router.post('/companies', createCompany);

router.get('/companies', getAllCompanies);

router.get('/companies/:id', getCompanyById);

router.put('/companies/:id', updateCompany);

router.delete('/companies/:id', deleteCompany);

router.get('/companies/:id/employees', getAllEmployeesOfCompany);

module.exports = router;