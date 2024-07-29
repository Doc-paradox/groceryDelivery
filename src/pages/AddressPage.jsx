import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddressPage = () => {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const addressData = {
      street,
      city,
      state,
      zip,
      country
    };

    try {
      const response = await axios.post('/VENDOR/addAddress', addressData); // Update with your backend endpoint
      if (response.status === 200) {
        alert('Address added successfully!');
        navigate('/vendor'); // Redirect to vendor dashboard or another appropriate page
      } else {
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
            label="Street"
            variant="outlined"
            fullWidth
            margin="normal"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
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
            label="Zip Code"
            variant="outlined"
            fullWidth
            margin="normal"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
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

