import { AccountCircleOutlined } from '@mui/icons-material';
import { AppBar, Box, Grid, IconButton, Menu, MenuItem, styled, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: '12vh',
  padding: '0 30px', // Add padding here
}));

const DummyNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    navigate('/vendor/profile'); // Adjust route as needed
    handleMenuClose();
  };

  const handleOrders = () => {
    navigate('/vendor/orders'); // Adjust route as needed
    handleMenuClose();
  };

  const handleLogout = () => {
    // Add your logout logic here
    // const response = axios.get('/USERS/logout',{withCredentials:true});
    // console.log(response);
    navigate('/'); // Redirect to login or home page after logout
    handleMenuClose();
  };

  return (
    <StyledAppBar position='sticky' >
      <Grid container direction='row' alignItems='center' justifyContent='space-between' mt={3}>
        <Box flexGrow={1} display='flex' justifyContent='center'>
          <Typography variant='h1'>GrooveGo</Typography>
        </Box>
        <Box display='flex' alignItems='center' gap={2}>
          <IconButton
            sx={{ color:'black','&:hover': { cursor: 'pointer', color: 'white' }, }}
            onClick={handleProfileClick}
          >
            <AccountCircleOutlined />
          </IconButton>
        </Box>
      </Grid>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          '& .MuiPaper-root': {
            minWidth: '15vh', // Optional: Adjust menu width if needed
          },
        }}
      >
        {/* <MenuItem onClick={handleProfile}>Profile</MenuItem> */}
        <MenuItem onClick={handleOrders}>Orders</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </StyledAppBar>
  );
};

export default DummyNav;
