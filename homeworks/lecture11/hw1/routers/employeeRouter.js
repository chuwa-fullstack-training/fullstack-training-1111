const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const auth = require('../middlewares/auth');

router.post("/", employeeController.createEmployee);
router.get("/:id", auth, employeeController.getEmployeeById);
router.get("/", auth, employeeController.getAllEmployees);
router.put("/:id", employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;
