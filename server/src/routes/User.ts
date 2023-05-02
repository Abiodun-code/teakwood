import express, { Router } from 'express'
import { loginUser, registerUser } from '../controller/User'

const router:Router = express.Router();

// Register router
router.post("/register", registerUser);

//  Login router
router.post("/login", loginUser);

export {router as userRouter}