import express, { Express, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { userRouter } from './src/routes/User'
import mongoose from 'mongoose'
import { productRouter } from './src/routes/Product'

// Express app
const app:Express = express();

// Middleware
app.use(cors());

app.use(express.json());

app.use(bodyParser.json());

app.use((req:Request, res:Response, next:NextFunction)=>{
  console.log(req.path, req.method);
  next()
})

// Route middleware
app.use("/auth", userRouter);

app.use("/product", productRouter);

// Configure .env
dotenv.config();

// Connect to database
try{
  mongoose.connect(process.env.MONGO_URI);
}catch{
  console.error("MongoDB not Connected");
};

// Port number
const Port = process.env.Port

// App listeners
app.listen(Port, ()=>{
  console.log(`Server running on Port ${Port}`)
});