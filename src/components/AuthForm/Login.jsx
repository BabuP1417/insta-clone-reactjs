import {Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react'
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const[inputs,setInput]=useState({
        email:'',
        password:'',
    });
    const{loading,error,login}=useLogin()
    
  return (
    <>
        <Input 
        placeholder="Email" fontSize={14}type="email" size={"sm"} value={inputs.email}
        onChange={(e)=>setInput({...inputs,email:e.target.value})}>

        </Input>
        <Input placeholder="Password" fontSize={14} size={"sm"} type="password" value={inputs.password}
        onChange={(e)=>setInput({...inputs,password:e.target.value})}>

        </Input>
       
        <Button w={"full"}colorScheme="blue"size={"sm"}fontSize={14}
        isLoading={loading}
        onClick={()=>login(inputs)}>
            Log in
        </Button>
    </>
  )
}

export default Login