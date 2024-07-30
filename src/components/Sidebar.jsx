import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const SideBar = styled("Box")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "70vw",
  borderRadius: "none",
  // alignItems: "center",
  // justifyContent: "center",
  backgroundColor: 'lightblue',
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
