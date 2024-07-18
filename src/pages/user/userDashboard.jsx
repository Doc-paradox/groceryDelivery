import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'
import styled from 'styled-components';
import UserSidebar from './UserSidebar';

const Item = styled(Paper)(({ theme }) => ({
  marginTop: '5vh',
  textAlign: 'center',
  height: '25em',
  width: '30vh',
  lineHeight: '60px',
}));

export const UserDashboard = () => {
  return (
    <Box>
      <Navbar />
      <Grid container sx={{height:'auto',backgroundColor: 'green',display: 'flex', flexDirection: 'row' }} columnGap={5} >
      <UserSidebar />
      <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor:'yellow',width:'65em',marginTop:'3em',borderRadius:'15px'}}>
      <Grid container sx={{ height: '35em',width:'100%', backgroundColor: 'blue', alignItems: 'center', display: 'flex', flexDirection: 'column',marginTop:'2em',borderRadius:'15px' }} >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
        <Item>Item 5</Item>
      </Grid>
      <Grid container sx={{ height: '50vh',width:'10em', backgroundColor: 'red' }} >
        <Item>Item 1</Item>
      </Grid>
      <Grid container sx={{ height: '50vh',width:'10em', backgroundColor: 'white' }}>
        <Item>Item 1</Item>
      </Grid>
      </Box>

      </Grid>
    </Box>
  )
}

