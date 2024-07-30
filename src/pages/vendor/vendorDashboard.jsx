import { Box, Grid, Typography, } from '@mui/material';
import React from 'react'
import VendorSidebar from './VendorSidebar';
import Navbar from '../../components/Navbar';
import AddProduct from './AddProduct';
import ProductCard from '../../components/ProductCard';


const VendorDashboard = () => {
  return (
    <Box>
      <Navbar />
      <Box position="fixed" sx={{ backgroundColor: '#eff5ee', height: '70vw', width: '5vw', boxShadow: '10px' }}>
        <VendorSidebar />
      </Box>
      <Grid display={'flex'} flexDirection={'column'} >
        <Box sx={{ marginLeft: '25%' }}>
          <ProductCard />
          {/* <AddProduct /> */}
        </Box>
      </Grid>
    </Box>
  )
}

export default VendorDashboard