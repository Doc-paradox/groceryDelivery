// import React from 'react';
// import { Box, Grid, Paper, Typography } from '@mui/material';
// import DeliverySidebar from './deliverySidebar';
// import styled from 'styled-components';
// import DummyNav from '../../components/DummyNav';
// import axios from 'axios';
// const DeliveryDashboard = () => {
    

//     const addDelivery = async () => {
//         try {
//           const response = await axios.post(`/USERS/addDelivery`,{}, { withCredentials: true });
//           console.log(response.status);
//         } catch (error) {
//           console.error('Error adding delivery', error);
//         }
//       };
    
//       React.useEffect(() => {
//         addDelivery();
//       }, []);
//     return (
//         <Box>
//             <DummyNav />
//             <Box position="fixed" top="12vh" left="0" sx={{
//                 backgroundColor: '#eff5ee',
//                 height: 'calc(100vh - 12vh)', // Adjust height based on Navbar height
//                 width: '5vw',
//                 boxShadow: '10px',
//                 zIndex: 1 // Ensure it's behind the Navbar
//             }}>
//                 <DeliverySidebar />
//             </Box>
//             <Grid container spacing={2} sx={{ marginLeft: '5vw', marginTop: '20px' }}> {/* Adjust margin to account for the sidebar */}

//             </Grid>
//         </Box>
//     )
// };
// export default DeliveryDashboard;


import React, { useState, useEffect } from 'react';
import { Box, Grid, Paper, Typography, Button, Snackbar, Alert } from '@mui/material';
import DeliverySidebar from './deliverySidebar';
import styled from 'styled-components';
import DummyNav from '../../components/DummyNav';
import axios from 'axios';

const DeliveryDashboard = () => {
  const [deliveryDetails, setDeliveryDetails] = useState(null);
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const addDelivery = async () => {
            try {
              const response = await axios.post(`/USERS/addDelivery`,{}, { withCredentials: true });
              console.log(response.status);
            } catch (error) {
              console.error('Error adding delivery', error);
            }
          };
        
          React.useEffect(() => {
            addDelivery();
          }, []);

  const fetchDeliveryDetails = async () => {
    try {
      const response = await axios.get('/USERS/showDelivery', { withCredentials: true });
      setDeliveryDetails(response.data);
    } catch (error) {
      console.error('Error fetching delivery details', error);
      setError('No order found for the delivery person.');
    }
  };

  const handleDelivered = async () => {
    try {
      const response = await axios.put(`/USERS/updateAvailability`, {}, { withCredentials: true });
      console.log(response.data);
      console.log('Delivery status updated');
      setSnackbarOpen(true);
      setDeliveryDetails(null);
      setError('No order assigned');// Refresh the delivery details after updating
    } catch (error) {
      console.error('Error updating delivery status', error);
    }
  };

  useEffect(() => {
    fetchDeliveryDetails();
  }, []);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };
  return (
    <Box>
      <DummyNav />
      <Box
        position="fixed"
        top="12vh"
        left="0"
        sx={{
          backgroundColor: '#eff5ee',
          height: 'calc(100vh - 12vh)', // Adjust height based on Navbar height
          width: '5vw',
          boxShadow: '10px',
          zIndex: 1 // Ensure it's behind the Navbar
        }}
      >
        <DeliverySidebar />
      </Box>
      <Grid container spacing={2} sx={{ marginLeft: '5vw', marginTop: '20px' }}>
        {deliveryDetails ? (
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
              <Typography variant="h6">Order ID: {deliveryDetails.orderId}</Typography>
              <Typography variant="body1">Pickup Address: {deliveryDetails.pickup}</Typography>
              <Typography variant="body1">Delivery Address: {deliveryDetails.drop}</Typography>
              <Typography variant="body1">Total Amount: ${deliveryDetails.total}</Typography>
              <Typography variant="body1">Payment Method: {deliveryDetails.paymentmethod}</Typography>
              <Button variant="contained" color="primary" onClick={handleDelivered}>
                Delivered
              </Button>
            </Paper>
          </Grid>
        ) : (
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        )}
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Delivered successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default DeliveryDashboard;
