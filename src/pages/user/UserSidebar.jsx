import React from 'react';
import { Box, } from '@mui/material';
import {  BookmarkBorderOutlined,  HomeOutlined,  PersonOutlineOutlined,  ShoppingCartOutlined } from '@mui/icons-material';
import Sidebar from '../../components/Sidebar';


const userMenuItems = [
  {  icon: <HomeOutlined />, path: "/" },
  {  icon: <ShoppingCartOutlined />, path: "/user/cart" },
  {  icon: <BookmarkBorderOutlined />, path: "/user/order" },
  {  icon: <PersonOutlineOutlined />, path: "/user/profile" },
];
const UserSidebar = () => {
  return (
    <Box >
      <Sidebar menuItems={userMenuItems} />
    </Box>
  );
};

export default UserSidebar;


// import React from 'react';
// import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import { Home, Category, ShoppingCart, AccountCircle } from '@mui/icons-material';

// const UserSidebar = () => {
//   return (
//     <Box sx={{ width: 150,boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)', height: '100vh' }}>
//       <List>
//         <ListItem button>
//           <ListItemIcon><Home /></ListItemIcon>
//           <ListItemText primary="Home" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><Category /></ListItemIcon>
//           <ListItemText primary="Categories" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><ShoppingCart /></ListItemIcon>
//           <ListItemText primary="Cart" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><AccountCircle /></ListItemIcon>
//           <ListItemText primary="Account" />
//         </ListItem>
//       </List>
//     </Box>
//   );
// };

// export default UserSidebar;
