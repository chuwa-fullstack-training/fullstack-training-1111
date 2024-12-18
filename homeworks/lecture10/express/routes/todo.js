import {Router} from 'express';
import { getTodo, createTodo, updateTodo } from '../controller/todoController.js';

const router = new Router();


router.get('/', getTodo);
router.post('/api/todos', createTodo);
router.put('/api/todos/:id', updateTodo);


export default router;