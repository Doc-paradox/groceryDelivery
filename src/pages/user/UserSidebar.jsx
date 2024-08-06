import React from 'react';
import { Box, } from '@mui/material';
import {  BookmarkBorderOutlined,  HomeOutlined,  PersonOutlineOutlined,  ShoppingCartOutlined } from '@mui/icons-material';
import Sidebar from '../../components/Sidebar';


const userMenuItems = [
  {  icon: <HomeOutlined />, path: "/" },
  {  icon: <ShoppingCartOutlined />, path: "/user/cart" },
  {  icon: <BookmarkBorderOutlined />, path: "/user/order" },
  {  icon: <PersonOutlineOutlined />, path: "/profile" },
];
const UserSidebar = () => {
  return (
    <Box >
      <Sidebar menuItems={userMenuItems} />
    </Box>
  );
};

export default UserSidebar;


