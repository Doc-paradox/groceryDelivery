import React from 'react';
import { Box, } from '@mui/material';
import { AutoStories, EventNote, Person, ShoppingCart } from '@mui/icons-material';
import Sidebar from '../../components/Sidebar';


const userMenuItems = [
  { text: "Category", icon: <EventNote />, path: "/user/category" },
  { text: "Order", icon: <AutoStories />, path: "/user/order" },
  { text: "Cart", icon: <ShoppingCart />, path: "/user/cart" },
  { text: "Profile", icon: <Person />, path: "/user/profile" },
];
const UserSidebar = () => {
  return (
    <Box >
      <Sidebar menuItems={userMenuItems} />
    </Box>
  );
};

export default UserSidebar;
