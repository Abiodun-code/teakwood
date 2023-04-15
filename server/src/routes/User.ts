import express, { Router } from 'express'
import { loginUser, registerUser } from '../controller/User'

const router:Router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser)

export {router as UserRouter}