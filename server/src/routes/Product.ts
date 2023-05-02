import { getProduct } from "../controller/Product";
import express, { Router } from "express";

const router: Router = express.Router();

// Get all product router
router.get("/", getProduct);

export {router as productRouter};