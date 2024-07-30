import { Box, Grid, styled } from '@mui/material'
import React from 'react'

const StyledBox = styled(Box)(({ theme }) => ({
   backgroundColor: theme.palette.secondary.light,
   width:'30vw',
   height: '45vh',
   borderRadius:'15px', 
   textAlign:'center',
}))
const DisplayCard = () => {
  return (
    <Grid container direction={'row'} gap={2} padding='10px'>
      <StyledBox>
        Fresh food
      </StyledBox>
      <StyledBox>
        Fresh food
      </StyledBox>
      <StyledBox>
        Fresh food
      </StyledBox>
    </Grid>
  )
}

export default DisplayCard