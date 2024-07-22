import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const SignupPage = () => {
  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const userTypes =['User','Vendor','Delivery Person']
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('/USERS/addUser', {
            USERROLE: userType,
            USEREMAIL: email,
            USERPASSWORD: password,
        });

        const data = response.data;
        if (response.status === 200) {
            // Redirect to login page or dashboard after successful signup
            navigate('/login');
        } else {
            console.error('Signup failed', data);
        }
    } catch (error) {
        console.error('Error during signup', error);
    }
};

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, margin: 'auto', padding: 5,marginTop:'13%',borderColor:'black',border:'1px solid',borderRadius:'10%' }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Sign Up
      </Typography>
      <FormControl fullWidth margin ="normal">
        <InputLabel id ="user-type-label">userType</InputLabel>
        <Select
         labelId="user-type-label"
          value={userType}
          label="User Type"
          onChange={(e) => setUserType(e.target.value)}
        >
            {userTypes.map((type) => (
                <MenuItem key={type} value={type}>{type}</MenuItem>
            ))}
        </Select>
      </FormControl>
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
        type="submit"
        variant="contained" 
        color="primary" 
        fullWidth 
        sx={{ mt: 2 }}
      >
        Sign Up
      </Button>
      <small>Already have an account? <Link to ="/login">Log in</Link></small>
    </Box>
  );
};

export default SignupPage;
