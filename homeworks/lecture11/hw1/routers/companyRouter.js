const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.post("/", companyController.createCompany);
router.get("/:id", companyController.getCompanyById);
router.get("/:id/employees", companyController.getCompanyEmployees);
router.put("/:id", companyController.updateCompany);
router.delete("/:id", companyController.deleteCompany);
router.get("/", companyController.getAllCompanies);

module.exports = router;
