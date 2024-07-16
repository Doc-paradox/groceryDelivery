import { Box, Button, TextField, Typography } from '@mui/material'
import React, {useState} from 'react'

const LoginPage = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const response = await fetch('/api/vendor/login',{
            method: 'POSt',
            headers: {
                'Constent-Type': 'application/json',
            },
            body: JSON.stringify({email,password}),
        });

        const data = await response.json();
        if(response.ok){
            console.log("Login successful", data);
        }else{
            console.log('Login failed', data);
        }
    }catch(error){
        console.error('Error during login',error);
    }
  }
  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 3 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Login
      </Typography>
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button 
        variant="contained" 
        color="primary" 
        fullWidth 
        sx={{ mt: 2 }}
      >
        Login
      </Button>
    </Box>
  )
}

export default LoginPage