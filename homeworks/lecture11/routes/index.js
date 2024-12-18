import Router from "express";
import employee from './employee.js';
import company from './company.js';
import auth from './auth.js';


const routes = Router()


routes.use('/employee', employee)
routes.use('/company', company)
routes.use('/api', auth)


export default routes;