import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';



const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POSt',
        headers: {
          'Constent-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        //Route based on user type
        switch(data.userType) {
          case 'admin':
            navigate('/admin-dashboard');
            break;
          case 'user':
            navigate('/user-dashboard');
            break;
          case 'vendor':
            navigate('/vendor-dashboard');
            break;
          case 'delivery':
            navigate('/delivery-dashboard');
            break;
          default:
            navigate('/default-dashboard');
        }
        console.log("Login successful", data);
      } else {
        console.log('Login failed', data);
      }
    } catch (error) {
      console.error('Error during login', error);
    }
  }
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, margin: 'auto', padding: 5 ,marginTop:'15%',borderColor:'black',border:'1px solid',borderRadius:'10%'}}>
      <Typography variant="h5" component="h1" gutterBottom>
        Login
      </Typography>

      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        margin="normal"
        type='email'
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
        sx={{ mt: 2}}
        onClick={handleSubmit}
        
      >
        Login 
      </Button>


      <small >Need an account? <Link to ="/signup">Sign up</Link></small>

    </Box>
  )
}

export default LoginPage