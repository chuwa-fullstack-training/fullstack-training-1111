import { Router } from "express";
import { createCompany, getCompany, updateCompany, deleteCompany, getAllCompany, getAllEmployee } from '../controller/company.js';

const router = new Router();

router.post('/create', createCompany)
router.get('/:id', getCompany)
router.put('/update/:id', updateCompany)
router.delete('/delete/:id', deleteCompany)
router.get('/', getAllCompany)
router.get('/getEmployees/:id', getAllEmployee)

export default router;