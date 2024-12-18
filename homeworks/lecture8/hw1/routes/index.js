import Router from 'express';
import listFiles from './list-files.js';
import parsetime from './parsetime.js';

const routes = Router()
routes.use('/', listFiles)
routes.use('/api', parsetime)

export default routes