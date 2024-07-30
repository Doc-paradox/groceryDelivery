import React, { useState } from 'react';
import { Box, Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const SignupPage = () => {
  const [userrole, setUserRole] = useState('');
  const [useremail, setUserEmail] = useState('');
  const [userpassword, setUserPassword] = useState('');
  const navigate = useNavigate();

  const userTypes = ['user', 'vendor', 'delivery']
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/USERS/addUser', {
        userrole: userrole,
        useremail: useremail,
        userpassword: userpassword,
      });

      const data = response.data;
      if (response.status === 200) {
        // Redirect to login page or dashboard after successful signup
        if (userrole === 'vendor' || userrole === 'delivery') {
          // navigate('/login');
          navigate('/address',{state:{userrole}});
        } else {
          navigate('/login');
          alert("Sign up successful")
        }
      } else {
        console.error('Signup failed', data);
      }
    } catch (error) {
      console.error('Error during signup', error);
    }
  };

  return (
    <Box sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', height: '100vh' }}>

      <Box component="form" onSubmit={handleSubmit} sx={{
        maxWidth: 500,
        // margin: 'auto', 
        padding: 5,
        // marginTop:'13%',
        borderColor: 'black',
        // border:'1px solid',
        borderRadius: '5%',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)'
      }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Sign Up
        </Typography>
        <FormControl component="fieldset">
          <FormLabel component="legend">User Type</FormLabel>
          <RadioGroup aria-label="user-type" name="user-type" value={userrole} onChange={(e) => setUserRole(e.target.value)}
            sx={{ display: 'flex', flexDirection: 'row' }}>
            {userTypes.map((type) => (
              <FormControlLabel key={type} value={type} control={<Radio />} label={type} />
            ))}
          </RadioGroup>
        </FormControl>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
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
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, mb: 2 }}
         >
          Sign Up 
        </Button>
        <small>Already have an account? <Link to="/login">Log in</Link></small>
      </Box>
    </Box>
  );
};

export default SignupPage;
