import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const AddressPage = () => {
  const [addressline,setAddressline] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPinCode] = useState('');
  const [country, setCountry] = useState('');
  const userid = localStorage.getItem('userid');
  const navigate = useNavigate();
  const location = useLocation();
  const userrole = location.state?.userrole || '';
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const addressData = {
      addressline,
      city,
      state,
      pincode,
      country,
      userid
    };

    try {
      console.log(userid);
      const response = await axios.put('/USERS/addAddress', addressData); // Update with your backend endpoint
      if (response.status === 200 ) {
        if(userrole === 'vendor'){
          alert('Address added successfully!');
          navigate('/vendor'); // Redirect to vendor dashboard or another appropriate page
        }else if(userrole === 'delivery'){
          alert('Address added successfully!');
          navigate('/delivery');
        } else{
          alert('Address added successfully!');
          navigate('/user');
        }
      } else{
        console.error('Address submission failed', response.data);
      }
    } catch (error) {
      console.error('There was an error submitting the address!', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>Add Address</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Addressline"
            variant="outlined"
            fullWidth
            margin="normal"
            value={addressline}
            onChange={(e) => setAddressline(e.target.value)}
          />
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            margin="normal"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            label="State"
            variant="outlined"
            fullWidth
            margin="normal"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <TextField
            label="Pin Code"
            variant="outlined"
            fullWidth
            margin="normal"
            value={pincode}
            onChange={(e) => setPinCode(e.target.value)}
          />
          <TextField
            label="Country"
            variant="outlined"
            fullWidth
            margin="normal"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Add Address
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AddressPage;

