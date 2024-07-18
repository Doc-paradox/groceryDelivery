import { Box } from '@mui/material'
import React from 'react'
import styled from 'styled-components';

const SideBar = styled("Box")(({ theme }) => ({
    display: "flex",
    width: "20vw",
    height: "83vh",
    marginTop: "50px",
    borderRadius: "8px",
    backgroundColor: 'white',
  }));
  
const UserSidebar = () => {
  return (
   <Box>
    <SideBar/>
   </Box>
  )
}

export default UserSidebar