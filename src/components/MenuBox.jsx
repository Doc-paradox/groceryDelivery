import { AppBar, Box, Grid, IconButton, styled, Typography } from '@mui/material'
import React from 'react'
import DropdownMenu from './DropdownMenu'
import { AccountCircleOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import SearchBar from './SearchBar'
import { Navigate, useNavigate } from 'react-router-dom'


 const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#ffffff",
  height: '12vh',
  width: '100%',
}))
const MenuBox = () => {
  const navigate = useNavigate();
  
  const handleProfile=()=>{
    navigate('/login')
  }
  const handleCart=()=>{
    navigate('/user/cart')
  }
  return (
    <StyledAppBar position="sticky">
    <Grid container direction={'row'} gap={20} padding="10px" justifyContent="space-between" alignItems="center" >
        <Typography variant='h2' fontWeight={'bold'}>GrooveGo</Typography>
        <Box display={'flex'} flexDirection={'row'} gap={2}>
            <DropdownMenu /> {/* Replace Button with DropdownMenu */}
            <SearchBar/>
        </Box>
        <Box display={'flex'} flexDirection={'row'} gap={1}>  
        <IconButton  sx={{'&:hover': {cursor: 'pointer',color:'#b4e639',}}}>
            <SearchOutlined />
        </IconButton>
        <IconButton sx={{'&:hover': {cursor: 'pointer',color:'#b4e639'}}}>
        <AccountCircleOutlined onClick={()=> handleProfile()}/>
        </IconButton>
        <IconButton sx={{'&:hover': {cursor: 'pointer',color:'#b4e639'}}}>
            <ShoppingCartOutlined onClick={() => handleCart()} />
        </IconButton>
        </Box>
    </Grid>
    </StyledAppBar>
  )
}

export default MenuBox