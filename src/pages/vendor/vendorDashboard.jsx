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
      <Box position="fixed" sx={{ backgroundColor: 'white', height: '70vw', width: '20vw', zIndex: 1 }}>
        <VendorSidebar />
      </Box>
      <Grid display={'flex'} flexDirection={'column'} >
        <Box sx={{ marginLeft: '25%'}}>
          <ProductCard />
          <AddProduct />
        </Box>
      </Grid>
    </Box>
  )
}

export default VendorDashboard