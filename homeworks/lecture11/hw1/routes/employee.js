const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employee");
const { authenticate } = require("../middleware/authMiddleware");

router.post("/", authenticate, employeeController.createEmployee);
router.get("/", employeeController.getAllEmployees);
router.get("/:id", employeeController.getEmployeeById);
router.put("/:id", employeeController.updateEmployee);
router.delete("/:id", employeeController.deleteEmployee);
router.get(
  "/company/:companyId",
  authenticate,
  employeeController.getEmployeesByCompany
);

module.exports = router;
