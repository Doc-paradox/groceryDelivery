import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'
import styled from 'styled-components';
import UserSidebar from './UserSidebar';
import ProductCarousel from '../../components/ProductCarousel';

const Item = styled(Paper)(({ theme }) => ({
  marginTop: '5vh',
  marginLeft: '2em',
  textAlign: 'center',
  height: '25em',
  width: '32vh',
  lineHeight: '60px',
}));

const BackgroundGrid = styled(Grid)(({ theme }) => ({
  container: {
    height: 'auto',
  },
  display: 'flex', 
  flexDirection: 'row'
}));

const ItemGrid = styled(Grid)(({ theme }) => ({
  height: '32em', 
  width: '100%', 
  backgroundColor: 'blue', 
  alignItems: 'center', 
  display: 'flex', 
  flexDirection: 'column', 
  marginTop: '2em', 
  borderRadius: '15px'
}));

export const UserDashboard = () => {
  return (
    <Box>
      <Navbar />
      <BackgroundGrid container columnGap={3} >
        <UserSidebar/>
        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'yellow', width: '70em', marginTop: '3em', borderRadius: '15px' }}>
          <ItemGrid container>
            <ProductCarousel/>
            {/* <Item>Item 2</Item>
            <Item>Item 3</Item>
            <Item>Item 4</Item>
            <Item>Item 5</Item> */}
          </ItemGrid>
          <ItemGrid container >
            <Item>Item 1</Item>
            <Item>Item 1</Item>
            <Item>Item 1</Item>
            <Item>Item 1</Item>
          </ItemGrid>
          <ItemGrid container>
            <Item>Item 1</Item>
            <Item>Item 1</Item>
            <Item>Item 1</Item>
            <Item>Item 1</Item>
          </ItemGrid>
        </Box>

      </BackgroundGrid>
    </Box>
  )
}

