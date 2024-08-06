// import React, { useState } from 'react';
// import { AppBar, Box, Grid, IconButton, styled, Typography, Menu, MenuItem } from '@mui/material';
// import { AccountCircleOutlined, EmailOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
// import SearchBar from './SearchBar';
// import { useNavigate } from 'react-router-dom';
// import DropdownMenu from './DropdownMenu';
// // import NotificationIcon from './NotificationIcon';

// const StyledAppBar = styled(AppBar)(({ theme }) => ({
//   backgroundColor: "#ffffff",
//   height: '12vh',
//   width: '100%',
// }));

// const MenuBox2 = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);
//   const navigate = useNavigate();

//   const handleProfileClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleProfile = () => {
//     navigate('/user/profile'); // Adjust route as needed
//     handleMenuClose();
//   };
//   const handleProducts = () => {
//     navigate('/user/products'); // Adjust route as needed
//     handleMenuClose();
//   };

//   const handleOrders = () => {
//     navigate('/user/order'); // Adjust route as needed
//     handleMenuClose();
//   };

//   const handleLogout = () => {
//     // Add your logout logic here
//     navigate('/'); // Redirect to login or home page after logout
//     handleMenuClose();
//   };

//   const handleCart = () => {
//     navigate('/user/cart');
//   };

//   return (
//     <StyledAppBar position="sticky" padding="20px">
//       <Grid container direction={'row'} gap={20} padding="10px" justifyContent="space-between" alignItems="center">
//         <Typography variant='h2' fontWeight={'bold'}>GrooveGo</Typography>
//         <Box display={'flex'} flexDirection={'row'} gap={2}>
//           <DropdownMenu/>
//           <SearchBar />
//         </Box>
//         <Box display={'flex'} flexDirection={'row'} gap={1}>
//           <IconButton sx={{ '&:hover': { cursor: 'pointer', color: '#b4e639' } }}>
//             <EmailOutlined />
//           </IconButton>
//           <IconButton
//             sx={{ '&:hover': { cursor: 'pointer', color: '#b4e639' } }}
//             onClick={handleProfileClick}
//           >
//             <AccountCircleOutlined />
//           </IconButton>
//           <IconButton sx={{ '&:hover': { cursor: 'pointer', color: '#b4e639' } }}>
//             <ShoppingCartOutlined onClick={handleCart} />
//           </IconButton>
//         </Box>
//       </Grid>
//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleMenuClose}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'right',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'right',
//         }}
//         sx={{
//           '& .MuiPaper-root': {
//             minWidth: '15vh', // Optional: Adjust menu width if needed
//           },
//         }}
//       >
//         <MenuItem onClick={handleProfile}>Profile</MenuItem>
//         <MenuItem onClick={handleProducts}>Product</MenuItem>
//         <MenuItem onClick={handleOrders}>Orders</MenuItem>
//         <MenuItem onClick={handleLogout}>Logout</MenuItem>
//       </Menu>
//     </StyledAppBar>
//   );
// };

// export default MenuBox2;

import React, { useEffect, useState } from 'react';
import { AppBar, Box, Grid, IconButton, styled, Typography, Menu, MenuItem, Badge, List, ListItem, ListItemText, Divider } from '@mui/material';
import { AccountCircleOutlined, EmailOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import axios from 'axios';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#ffffff",
  height: '12vh',
  width: '100%',
}));

const MenuBox = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [orderAnchorEl, setOrderAnchorEl] = useState(null);
  const [unconfirmedOrders, setUnconfirmedOrders] = useState([]);
  const [unconfirmedCount, setUnconfirmedCount] = useState(0);
  const open = Boolean(anchorEl);
  const orderMenuOpen = Boolean(orderAnchorEl);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUnconfirmedOrders = async () => {
      try {
        const response = await axios.get('/USERS/showOrdersByUser', { withCredentials: true });
        const orders = response.data;
        const unconfirmedOrders = orders.filter(order => order.orderStatus === 'ORDER PLACED' || order.orderStatus === 'CONFIRMED');
        setUnconfirmedOrders(unconfirmedOrders);
        setUnconfirmedCount(unconfirmedOrders.length);
      } catch (error) {
        console.error('There was an error fetching the orders!', error);
      }
    };
    fetchUnconfirmedOrders();
  }, []);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOrderMenuClick = (event) => {
    setOrderAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOrderMenuClose = () => {
    setOrderAnchorEl(null);
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

  const handleOrderClick = (orderId) => {
    navigate(`/user/order`); // Adjust route as needed to view specific order details
    handleOrderMenuClose();
  };

  return (
    <StyledAppBar position="sticky" padding="20px">
      <Grid container direction={'row'} gap={20} padding="10px" justifyContent="space-between" alignItems="center">
        <Typography variant='h2' fontWeight={'bold'}>GrooveGo</Typography>
        <Box display={'flex'} flexDirection={'row'} gap={2}>
          <DropdownMenu />
          <SearchBar />
        </Box>
        <Box display={'flex'} flexDirection={'row'} gap={1}>
          <IconButton
            sx={{ '&:hover': { cursor: 'pointer', color: '#b4e639' } }}
            onClick={handleOrderMenuClick}
          >
            <Badge badgeContent={unconfirmedCount} color="error">
              <EmailOutlined />
            </Badge>
          </IconButton>
          <IconButton
            sx={{ '&:hover': { cursor: 'pointer', color: '#b4e639' } }}
            onClick={handleProfileClick}
          >
            <AccountCircleOutlined />
          </IconButton>
          <IconButton
            sx={{ '&:hover': { cursor: 'pointer', color: '#b4e639' } }}
            onClick={handleCart}
          >
            <ShoppingCartOutlined />
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
      <Menu
        anchorEl={orderAnchorEl}
        open={orderMenuOpen}
        onClose={handleOrderMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box sx={{ width: '300px' }}>
          <Typography variant="h6" padding="10px">Unconfirmed Orders</Typography>
          <Divider />
          <List>
            {unconfirmedOrders.map((order) => (
              <ListItem button key={order.orderid} onClick={() => handleOrderClick(order.orderid)}>
                <ListItemText primary={`Order #${order.orderid}`} />
              </ListItem>
            ))}
          </List>
          {unconfirmedOrders.length === 0 && (
            <Typography variant="body2" padding="10px">No unconfirmed orders.</Typography>
          )}
        </Box>
      </Menu>
    </StyledAppBar>
  );
};

export default MenuBox;
