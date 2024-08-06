import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import ProductCarousel from '../../components/ProductCarousel';
import styled from 'styled-components';
import ViewProducts from './ViewProducts';
import manwithBasket from '../../assets/manwithBasket.png';
import MenuBox2 from '../../components/MenuBox2';
import FeaturedCategories from '../../components/FeaturedCategories';
import Footer from '../../components/Footer';

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
    <Box>
      <MenuBox2 />
      <Grid container direction={'column'} padding={'30px'} gap={15}>
        <Grid container direction={'row'}
          justifyContent={'space-evenly'}
          paddingLeft={'5%'}
          paddingRight={'5%'}
          gap={2}
          sx={{
            height: '60vh',
            width: '100%',
            borderRadius: 5,
            // backgroundFilter: 'blur(5px)',
            background: 'linear-gradient(90deg, hsla(220, 100%, 50%, 1) 0%, hsla(195, 68%, 52%, 1) 50%, hsla(189, 90%, 59%, 1) 100%), url("https://img.freepik.com/free-photo/twilight-cloud_1203-6585.jpg")',
            backgroundBlendMode: 'multiply',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <img src={manwithBasket} alt="basketman"
            style={{ height: '70vh', width: '25vw', }}
          />
          <Box paddingTop={'10%'}
            sx={{
              color: 'white',
              height: '100%', width: '53vw',
            }}>
            <Typography variant="h1" fontFamily={'consolas,monospace'} >
              Book Your Delivery To Your Convenience
              <br></br>
            </Typography>
            <Typography variant="h3">
              From 06:00 AM To 10:00 PM
            </Typography>
          </Box>
        </Grid>
        <FeaturedCategories/>
      </Grid>
      <Footer/>
    </Box>
  );
};

export default UserDashboard;



