import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Box, Button, TextField, Typography} from "@mui/material";
import axios from 'axios';
const Login = () => {

    const history = useNavigate();
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });
    const handleChange = (e) => {
       setInputs(prev => ({
        ...prev,
        [e.target.name] : e.target.value
       }));
       console.log(e.target.name, "value",e.target.value);
    };
    const sendRequest = async (e) => {
        const res =await  axios.post('http://localhost:9000/api/login', {
            email:inputs.email,
            password:inputs.password
        }).catch(err=>console.log(err));
        const data = await res.data;
        return data;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        //send http request
        sendRequest().then(()=>history("/login"))
    };
  return <div>
    
      <form onSubmit={handleSubmit}>
        <Box marginLeft="auto" marginRight="auto" width={300} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Typography variant='h2'> Login</Typography>

            
            <TextField name="email" onChange={handleChange} value={inputs.email} variant='outlined' placeholder='Email' margin='normal'/>
            <TextField name="password" onChange={handleChange} value={inputs.password} variant='outlined' placeholder='Password' margin='normal'/>
           
            <Button variant='contained' type="submit" href='/welcome'> Login</Button>
        </Box>
      </form>
    </div>
 
  
}

export default Login
