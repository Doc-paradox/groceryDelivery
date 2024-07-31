import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText,styled } from '@mui/material';
import { Link } from 'react-router-dom';



const SideBar = styled("Box")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "8vw",
  height: "100vh",
  borderRadius: "none",
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
  alignItems: "center",
  // justifyContent: "center",
  backgroundColor: theme.palette.background.default,
}));

const Sidebar = ({ menuItems }) => {
  return (
    <Box>
      <SideBar>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button component={Link} to={item.path} key={index}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </SideBar>
    </Box>
  );
};

export default Sidebar;
