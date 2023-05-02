import { Request, Response } from 'express'
import { UserModel } from '../model/User'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

// Function to register a new user
export const registerUser = async (req:Request, res:Response)=>{
  const { username, email, password } = req.body;

  const user = await UserModel.findOne({ username });

  if(user){
    res.json({message: "User Already Exist"})
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({
    username, 
    email,
    password: hashPassword
  });

  await newUser.save();

  res.json({message: "User Successfully created"});
}

// Function to login a existing user
export const loginUser = async (req:Request, res:Response) =>{
  const {username,  password} = req.body;

  const user = await UserModel.findOne({username});

  if(!user){
    res.json({message: "User Does'nt Exist"})
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if(!isPasswordValid){
    res.json({message: "Password is Invalid"});
  }

  const token = jwt.sign({id: user._id}, "secret");

  res.json({token, userID: user._id});
}