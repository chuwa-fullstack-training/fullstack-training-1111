import Router from 'express';
import homepages from './homepages.js';


const routes = Router()
routes.use('/', homepages)

export default routes