import axios from 'axios';
import React, { createContext, useState} from 'react';
import { useCookies } from 'react-cookie';

type defaultState = {
  onRegister: (event: any) => Promise<void>,
  onLogin: (event: any) => Promise<void>,
  username:  string,
  setUsername: React.Dispatch<React.SetStateAction<string>>,
  email: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  password: string,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
}

type Props = {
  children: React.ReactNode
}

export const AuthContext = createContext<defaultState>({
  onRegister: function (event: any): Promise<void> {
    throw new Error('Function not implemented.');
  },
  onLogin: function (event: any): Promise<void> {
    throw new Error('Function not implemented.');
  },
  username: '',
  setUsername: function (value: React.SetStateAction<string>): void {
    throw new Error('Function not implemented.');
  },
  email: '',
  setEmail: function (value: React.SetStateAction<string>): void {
    throw new Error('Function not implemented.');
  },
  password: '',
  setPassword: function (value: React.SetStateAction<string>): void {
    throw new Error('Function not implemented.');
  }
});

const AuthProvider = ({ children }: Props) =>{

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [_, setCookies] = useCookies(["access_token"])

  const onRegister = async (event: any) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5432/auth/register', {
        username,
        email,
        password
      });
      window.location.pathname="/auth";
      alert("User created successfully")
    } catch (err) {
      alert(err)
    }
  }

  const onLogin = async (event: any) =>{
    event.preventDefault();
    try{
      const response = await axios.post('http://localhost:5432/auth/login',{
        username,
        password
      });
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.userID);
      window.location.pathname="/";
    }catch(err){
      console.error(err)
    }
  }

  return (
    <AuthContext.Provider value={{ onLogin, onRegister, username, setUsername, password, setPassword, email, setEmail }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider