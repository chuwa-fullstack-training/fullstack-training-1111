const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employee");

router.post("/", employeeController.createEmployee);
router.get("/", employeeController.getAllEmployees);
router.get("/:id", employeeController.getEmployeeById);
router.put("/:id", employeeController.updateEmployee);
router.delete("/:id", employeeController.deleteEmployee);
router.get("/company/:companyId", employeeController.getEmployeesByCompany);

module.exports = router;
