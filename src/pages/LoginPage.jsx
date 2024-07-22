import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const LoginPage = () => {
  const [useremail, setUserEmail] = useState('');
  const [userpassword, setUserPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/USERS/login', {
        useremail: useremail,
        userpassword: userpassword,
      });

      const data = response.data;
      if (response.status === 200) {
        // Route based on user type
        switch (data) {
          case 'admin':
            navigate('/admin');
            console.log("Login successful", data);
            break;
          case 'user':
            navigate('/user');
            console.log("Login successful", data);
            break;
          case 'vendor':
            navigate('/vendor');
            console.log("Login successful", data);
            break;
          case 'delivery':
            navigate('/delivery-dashboard');
            console.log("Login successful", data);
            break;
          default:
            navigate('/');
            console.log("Login successful", data);
           
        }
        
      } else {
        console.log('Login failed', data);
      }
    } catch (error) {
      console.error('Error during login', error);
    }
  }
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, margin: 'auto', padding: 5, marginTop: '15%', borderColor: 'black', border: '1px solid', borderRadius: '10%' }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Login
      </Typography>

      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        margin="normal"
        type='email'
        value={useremail}
        onChange={(e) => setUserEmail(e.target.value)}
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        value={userpassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleSubmit}

      >
        Login
      </Button>


      <small >Need an account? <Link to="/signup">Sign up</Link></small>

    </Box>
  )
}

export default LoginPage