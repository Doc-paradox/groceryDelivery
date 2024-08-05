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
      const response = await axios.post(`/USERS/login`, {
        useremail: useremail,
        userpassword: userpassword,
      },{withCredentials:true});
      console.log(response.status);
    
      if (response.status === 200) {
        try{
          const userroleResponse = await axios.get(`/USERS/getRole`,{withCredentials:true});
          console.log(userroleResponse);
          const data=userroleResponse.data;
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
            navigate('/delivery');
            console.log("Login successful", data);
            break;
          default:
            navigate('/');
            console.log("Login successful", data);

        }
      }catch(error){
        console.log("Error fetching user role",error);
      }

      } else {
        console.log('Cannot get user role');
      }
    } catch (error) {
      console.error('Error during login', error);
    }
  }


  return (
    <Box sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', height: '100vh' }}>

      <Box component="form" onSubmit={handleSubmit} sx={{
        display: 'flex',
        flexDirection:'column',
        flexBasis:'100%',
        flexWrap:'wrap',
        flexGrow: 1,
        maxWidth: 600,
        minWidth:200,
        //  margin: 'auto', 
        padding: 5,      
        borderRadius: '5%',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)'
      }}>
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
          sx={{ mt: 2, mb: 2 }}
          onClick={handleSubmit}

        >
          Login
        </Button>

        <small >Need an account? <Link to="/signup">Sign up</Link></small>

      </Box>
    </Box>
  )
}

export default LoginPage