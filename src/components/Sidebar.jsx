import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideBar = styled("Box")(({ theme }) => ({
  display: "flex",
  width: "20vw",
  height: "83vh",
  marginTop: "50px",
  borderRadius: "8px",
  alignItems: "center",
  justifyContent: "center",
}));

const Sidebar = ({ menuItems }) => {
  return (
    <Box sx={{ padding: '20px' }}>
      <SideBar>
        <List sx={{ marginLeft: "15px" }}>
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
