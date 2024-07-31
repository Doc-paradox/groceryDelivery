import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import DropdownMenu from './DropdownMenu'
import { AccountCircleOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

const MenuBox = () => {
  return (
    <Grid container direction={'row'} gap={20} padding="10px" justifyContent="space-between" alignItems="center" sx={{
        backgroundColor: "#eff5ee",
        height: '12vh',
        width: '100%'
    }}>
        <Typography variant='h2' fontWeight={'bold'}>GrooveGo</Typography>
        <Box display={'flex'} flexDirection={'row'} gap={2}>
            <DropdownMenu /> {/* Replace Button with DropdownMenu */}
            searchfield will come here
        </Box>
        <Box display={'flex'} flexDirection={'row'} gap={2}>
            <SearchOutlined />
            <AccountCircleOutlined />
            <ShoppingCartOutlined />
        </Box>
    </Grid>
  )
}

export default MenuBox