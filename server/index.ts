import express, {Express} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { UserRouter } from './src/routes/User'
import mongoose from 'mongoose'

const app:Express = express();

app.use(cors());

app.use(express.json());

app.use(bodyParser.json());

app.use("/auth", UserRouter)

dotenv.config()

try{
  mongoose.connect(process.env.MONGO_URI);
}catch(error){
  console.error("MongoDB not connected",error)
}

const Port = process.env.Port

app.listen(Port, ()=>{
  console.log(`Server running on Port ${Port}`)
})