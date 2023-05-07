import multer from "multer";
import { getProduct, postProduct } from "../controller/Product";
import express, { Router } from "express";
import path from "path"

const router: Router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "../upload"),
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Get all product router
router.get("/", getProduct);

router.post("/", upload.single("photo"), postProduct)

export {router as productRouter};