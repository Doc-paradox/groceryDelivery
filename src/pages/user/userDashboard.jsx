import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Navbar from '../../components/Navbar';
import UserSidebar from './UserSidebar';
import ProductCarousel from '../../components/ProductCarousel';
import styled from 'styled-components';
import ViewProducts from './ViewProducts';
import MenuBox from '../../components/MenuBox';

const ProductItem = styled(Paper)({
  padding: '20px',
  textAlign: 'center',
  height: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const UserDashboard = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} >
      <MenuBox />
      <Grid container  spacing={3} mt={'auto'}>
          
          <UserSidebar />

        <Grid item xs={9}>
          <Box
            sx={{ padding: '20px' }}
          >
            <Grid container spacing={3} >
              <ViewProducts />
            </Grid>
          </Box>
        </Grid>
      </Grid>
      {/* <Grid conatiner spacing={3} rowGap={8} columnGap={3} >
        <Box sx={{ backgroundColor: 'white' }}>
          <ProductCarousel />
        </Box>
        <Box sx={{ backgroundColor: 'green' }}>
          <ProductCarousel />
        </Box>
      </Grid> */}
      {/* <Grid container spacing={3} sx={{ marginTop: '20px' }}>
        {[1, 2, 3, ].map((item) => (
          <Grid item xs={4} key={item}>
            <ViewProducts/>
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
};

export default UserDashboard;



