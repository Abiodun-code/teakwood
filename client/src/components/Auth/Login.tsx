import axios from 'axios'
import React, { useState } from 'react'
import {  useForm} from 'react-hook-form'
import {useCookies} from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'

type loginProps = {
  username: string,
  password: string
}

const Login = () => {
  const {register, handleSubmit, watch, formState:{errors}} = useForm<loginProps>();
  const [_, setCookies] = useCookies(["access_token"])
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const onSubmit = async (event: any) =>{
    event.preventDefault();
    try{
      const response = await axios.post('http://localhost:5432/auth/login',{
        username,
        password
      });
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.userID);
      navigate("/");
      alert(response)
    }catch(err){
      console.error(err)
    }
  }

  return (
    <div className='w-full h-auto'>
      <div className="container lg:px-0 mx-auto py-[9rem] px-3">
        <form onSubmit={onSubmit} className="shadow lg:w-[60%] md:w-[90%] w-[95%] border rounded border-first h-auto mx-auto py-8">
          <h1 className="text-center text-2xl lg:text-4xl md:text-4xl text-second">Login To Your Account</h1>
          <div className="w-[95%] mx-auto pt-5 grid px-auto">
            <label htmlFor="username" className="lg:text-xl md:text-xl text-sm pb-2">Username</label>
            <input placeholder="Enter Your Username" id="username" type="text" className="border shadow outline-none lg:w-full lg:h-[6vh] md:w-full md:h-[6vh] h-[6vh] rounded pl-2"
              {...register("username", { 
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i
              })}
              value={username}
              onChange={(event)=>setUsername(event.target.value)}
              />
              {
                errors.username && <div className='text-sm text-center text-red-400 pt-2'>Your username must contain letter only</div>
              }
          </div>
          <div className="w-[95%] mx-auto pt-5 grid px-auto">
            <label htmlFor="password" className="lg:text-xl md:text-xl text-sm pb-2">Password</label>
            <input placeholder="Password" id="password" type="password" className="border shadow outline-none lg:w-full lg:h-[6vh] md:w-full md:h-[6vh] h-[6vh] rounded pl-2"
              {...register("password", {
                required: true,
                // minLength: 8,
              })}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {
              errors.password && <div className='text-sm text-center text-red-400 pt-2'>Your password must contain letter and num</div>
            }
          </div>
          <button type="submit" className="mt-6 w-[30%] lg:h-[7vh] md:h-[7vh] h-[6vh] lg:text-xl md:text-xl text-sm rounded text-seventh shadow bg-second ml-2 lg:ml-6 md:ml-6">Login</button>
          <p className="text-center pt-7 text-sm lg:text-xl md:text-xl text-second">If You dont have an account <Link className="underline" to={"/register"}>Register</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login