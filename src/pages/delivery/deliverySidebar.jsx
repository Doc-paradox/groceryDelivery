import React from 'react';
import { Box, } from '@mui/material';
import {Person,SpaceDashboardOutlined } from '@mui/icons-material';
import Sidebar from '../../components/Sidebar';


const userMenuItems = [
  { icon: <SpaceDashboardOutlined />, path: "/delivery/orders" },
  { icon: <Person />, path: "/delivery/profile" },
];
const DeliverySidebar = () => {
  return (
    <Box >
      <Sidebar menuItems={userMenuItems} />
    </Box>
  );
};

export default DeliverySidebar;