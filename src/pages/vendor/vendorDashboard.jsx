import { Box, Grid } from '@mui/material';
import React from 'react';
import VendorSidebar from './VendorSidebar';
import VProductCard from '../../components/VProductCard';
import DummyNav from '../../components/DummyNav';

const VendorDashboard = () => {
  return (
    <Box>
      {/* Make sure Navbar is imported and used correctly */}
      <DummyNav />
      <Box position="fixed" top="12vh" left="0" sx={{
        backgroundColor: '#eff5ee',
        height: 'calc(100vh - 12vh)', // Adjust height based on Navbar height
        width: '5vw',
        boxShadow: '10px',
        zIndex: 1 // Ensure it's behind the Navbar
      }}>
        <VendorSidebar />
      </Box>
      <Grid container spacing={2} sx={{ marginLeft: '5vw', marginTop: '20px' }}> {/* Adjust margin to account for the sidebar */}
        <Grid item xs={12}>
          <VProductCard />
          {/* <AddProduct /> */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default VendorDashboard;
