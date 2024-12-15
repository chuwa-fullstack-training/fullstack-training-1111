const express = require("express");
const {
  createEmployee,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
  getAllEmployees,
  getEmployeesByCompany,
} = require("../controllers/employee");
const router = express.Router();
const auth = require("../middleware/auth");

router.post("/", createEmployee);
router.get("/:id", auth, getEmployeeById);
router.put("/:id", updateEmployeeById);
router.delete("/:id", deleteEmployeeById);
router.get("/", auth, getAllEmployees);
router.get("/company/:companyId", auth, getEmployeesByCompany);

module.exports = router;
