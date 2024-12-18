import Router from "express";
import employee from './employee.js';
import company from './company.js';


const routes = Router()


routes.use('/employee', employee)
routes.use('/company', company)


export default routes;