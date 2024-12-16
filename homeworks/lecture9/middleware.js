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

router.post('/employee', createEmployee);
router.post('/company', createCompany);

router.get('/company/:id', getCompanyById);
router.get('/employee/:id', getEmployeeById);
router.get('/company', getAllCompanies);
router.get('/employee', getAllEmployees);
router.get('/employeeofcompany/:id', getAllEmployeesFromOneCompany);

router.put('/company/:id', updateCompanyById);
router.put('/employee/:id', updateEmployeeById);

router.delete('/company/:id', deleteCompanyById);
router.delete('/employee/:id', deleteEmployeeById);

module.exports = router;