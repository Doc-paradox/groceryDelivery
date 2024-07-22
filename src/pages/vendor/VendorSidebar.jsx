import React from 'react'
import Sidebar from '../../components/Sidebar';
import { Box } from '@mui/material';
import { AutoStories, EventNote, Person, ShoppingCart } from '@mui/icons-material';

const userMenuItems = [
    { text: "Category", icon: <EventNote />, path: "/vendor/product" },
    { text: "Order", icon: <AutoStories />, path: "/vendor/catogery" },
    { text: "Cart", icon: <ShoppingCart />, path: "/vendor/orders" },
    { text: "Profile", icon: <Person />, path: "/vendor/profile" },
  ];
const VendorSidebar = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Sidebar menuItems={userMenuItems} />
    </Box>
  )
}

export default VendorSidebar;