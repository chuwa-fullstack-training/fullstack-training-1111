const express = require('express');
const {
    createEmployee,
    createCompany,
    getCompanyById,
    getEmployeeById,
    updateCompanyById,
    updateEmployeeById,
    deleteCompanyById,
    deleteEmployeeById,
    getAllCompanies,
    getAllEmployees,
    getAllEmployeesFromOneCompany,
} = require('./api');
const router = express.Router();
const auth = require('./authmiddleware');

router.post('/employee', createEmployee);
router.post('/company', createCompany);

router.get('/company/:id', auth, getCompanyById);
router.get('/employee/:id', auth, getEmployeeById);
router.get('/company', auth, getAllCompanies);
router.get('/employee', auth, getAllEmployees);
router.get('/employeeofcompany/:id', getAllEmployeesFromOneCompany);

router.put('/company/:id', updateCompanyById);
router.put('/employee/:id', auth, updateEmployeeById);

router.delete('/company/:id', deleteCompanyById);
router.delete('/employee/:id', auth, deleteEmployeeById);

module.exports = router;