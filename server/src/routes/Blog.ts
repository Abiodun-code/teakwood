import multer from "multer";
import { getBlog, postBlog } from "../controller/Blog"
import express, { Router } from "express"
import path from "path"

const router:Router = express.Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./Blogupload"),
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.get("/", getBlog)

router.post("/", upload.single("photo"), postBlog)

export {router as BlogRouter}