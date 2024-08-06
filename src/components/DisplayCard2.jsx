import { Box, Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const StyledBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(to right top, #6bd17d, #61d797, #5ddcae, #61e0c3, #6de3d5, #6fe8d6, #72ecd7, #75f1d7, #7df7c0, #95fca3, #b8fd82, #e0fb5f)',
  width: '30vw',
  height: '45vh',
  borderRadius: 30,
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
  // textAlign: 'center',
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}));

const StyledImage = styled('img')({
  width: '100px',
  height: '150px',
});

const DisplayCard2 = () => {
  return (
    <Grid container direction={'row'} gap={2} padding='10px'>
      <StyledBox>
        <Grid container direction={'column'} justifyContent='center' alignItems='flex-start' >
          <Typography variant='h2' fontWeight='bold'>
            Dairy for
          </Typography> 
          <Typography variant='h2' fontWeight='bold'>
            daily needs !
          </Typography> 
          <Button variant="contained" sx={{ mt:2, mr:12,backgroundColor: 'black', color: 'white', fontWeight: 'bold', alignSelf: 'center',borderRadius:'10px' }}>
          Shop Now
        </Button>
        </Grid> 
        <Grid container direction='row' justifyContent='center' alignItems='center' mt='auto'>
          <img
            src={require("../assets/milkbottel.png")}
            alt='sample-1'
            style={{ width: '150px', height: '250px' }}
          />
        </Grid>  
      </StyledBox>
      <StyledBox>
        <Grid container direction={'column'} justifyContent='center' alignItems='flex-start' >
          <Typography variant='h2' fontWeight='bold'>
            Dairy for
          </Typography> 
          <Typography variant='h2' fontWeight='bold'>
            daily needs !
          </Typography> 
          <Button variant="contained" sx={{ mt:2, mr:12,backgroundColor: 'black', color: 'white', fontWeight: 'bold', alignSelf: 'center',borderRadius:'10px' }}>
          Shop Now
        </Button>
        </Grid> 
        <Grid container direction='row' justifyContent='center' alignItems='center' mt='auto'>
          <img
            src={require("../assets/milkbottel.png")}
            alt='sample-1'
            style={{ width: '150px', height: '250px' }}
          />
        </Grid>  
      </StyledBox>
      <StyledBox>
        <Grid container direction={'column'} justifyContent='center' alignItems='flex-start' >
          <Typography variant='h2' fontWeight='bold'>
            Dairy for
          </Typography> 
          <Typography variant='h2' fontWeight='bold'>
            daily needs !
          </Typography> 
          <Button variant="contained" sx={{ mt:2, mr:12,backgroundColor: 'black', color: 'white', fontWeight: 'bold', alignSelf: 'center',borderRadius:'10px' }}>
          Shop Now
        </Button>
        </Grid> 
        <Grid container direction='row' justifyContent='center' alignItems='center' mt='auto'>
          <img
            src={require("../assets/milkbottel.png")}
            alt='sample-1'
            style={{ width: '150px', height: '250px' }}
          />
        </Grid>  
      </StyledBox>
     
    </Grid>
  );
}

export default DisplayCard2;
