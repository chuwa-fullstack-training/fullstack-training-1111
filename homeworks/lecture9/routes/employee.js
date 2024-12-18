import { Router } from "express";
import {createEmployee, getEmployee, updateEmployee, deleteEmployee, getAllEmployees} from '../controller/employee.js';

const router = new Router();

router.post('/create', createEmployee)
router.get('/:id', getEmployee)
router.put('/update/:id', updateEmployee)
router.delete('/delete/:id', deleteEmployee)
router.get('/', getAllEmployees)

export default router;