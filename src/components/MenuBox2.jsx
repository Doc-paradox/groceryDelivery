import React, { useState } from 'react';
import { AppBar, Box, Grid, IconButton, styled, Typography, Menu, MenuItem } from '@mui/material';
import { AccountCircleOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#ffffff",
  height: '12vh',
  width: '100%',
}));

const MenuBox = () => {
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
    navigate('/user/profile'); // Adjust route as needed
    handleMenuClose();
  };
  const handleProducts = () => {
    navigate('/user/products'); // Adjust route as needed
    handleMenuClose();
  };

  const handleOrders = () => {
    navigate('/user/order'); // Adjust route as needed
    handleMenuClose();
  };

  const handleLogout = () => {
    // Add your logout logic here
    navigate('/'); // Redirect to login or home page after logout
    handleMenuClose();
  };

  const handleCart = () => {
    navigate('/user/cart');
  };

  return (
    <StyledAppBar position="sticky" padding="20px">
      <Grid container direction={'row'} gap={20} padding="10px" justifyContent="space-between" alignItems="center">
        <Typography variant='h2' fontWeight={'bold'}>GrooveGo</Typography>
        <Box display={'flex'} flexDirection={'row'} gap={2}>
          <DropdownMenu/>
          <SearchBar />
        </Box>
        <Box display={'flex'} flexDirection={'row'} gap={1}>
          <IconButton sx={{ '&:hover': { cursor: 'pointer', color: '#b4e639' } }}>
            <SearchOutlined />
          </IconButton>
          <IconButton
            sx={{ '&:hover': { cursor: 'pointer', color: '#b4e639' } }}
            onClick={handleProfileClick}
          >
            <AccountCircleOutlined />
          </IconButton>
          <IconButton sx={{ '&:hover': { cursor: 'pointer', color: '#b4e639' } }}>
            <ShoppingCartOutlined onClick={handleCart} />
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
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handleProducts}>Product</MenuItem>
        <MenuItem onClick={handleOrders}>Orders</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </StyledAppBar>
  );
};

export default MenuBox;
