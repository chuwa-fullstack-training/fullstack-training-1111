import { Router } from "express";
import {login} from "../controller/authController.js";

const router = new Router();

router.post('/login', login);

export default router;