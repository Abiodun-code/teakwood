import express, { Express, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { userRouter } from './src/routes/User'
import mongoose from 'mongoose'
import { productRouter } from './src/routes/Product'
import { BlogRouter } from './src/routes/Blog'

// Express app
const app:Express = express();

// Middleware
app.use(cors());

app.use(express.json());

app.use(bodyParser.json());

app.use("/upload", express.static("./upload"));
app.use("/Blogupload", express.static("./Blogupload"));

app.use((req:Request, res:Response, next:NextFunction)=>{
  console.log(req.path, req.method);
  next()
});

// Route middleware
app.use("/auth", userRouter);
app.use("/product", productRouter);
app.use("/blog", BlogRouter)

// Configure .env
dotenv.config();

// Connect to database
mongoose.connect(process.env.MONGO_URI).then(
  ()=> console.log("MongoDB Connected")
).catch(
  (error)=> console.log("error", error.message)
);

// Port number
const Port = process.env.Port

// App listeners
app.listen(Port, ()=>{
  console.log(`Server running on Port ${Port}`)
});