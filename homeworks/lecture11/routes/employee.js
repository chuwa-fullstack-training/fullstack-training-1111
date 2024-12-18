import { Router } from "express";
import {createEmployee, getEmployee, updateEmployee, deleteEmployee, getAllEmployees, getEmployeeByCompany} from '../controller/employee.js';
import { jwtVerify } from "../middleware/auth.js";

const router = new Router();

router.post('/create', createEmployee)
router.get('/:id', getEmployee)
router.put('/update/:id', updateEmployee)
router.delete('/delete/:id', deleteEmployee)
router.get('/', jwtVerify, getAllEmployees)
// router.get('/bycompany', jwtVerify, getEmployeeByCompany)

export default router;