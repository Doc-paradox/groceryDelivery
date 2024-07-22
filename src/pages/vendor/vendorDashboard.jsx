import { Box, Paper } from '@mui/material';
import React from 'react'
import VendorSidebar from './VendorSidebar';

// bento layout
// const cardHeights = [  
//     {heights:[85],width:'250vh'},
//     {heights:[35,35],width:'100%'}
//     // [64, 32, 32],
// ];
const VendorDashboard = () => {
  return (
    <Box display="flex" gap={2}>
    <VendorSidebar/>
    {/* bento layout */}
    {/* {cardHeights.map((card, index) => (
        <Box key={index} sx={{ flexBasis: card.width, flexGrow: 0 }}>
            {card.heights.map((height, i) => (
                <Paper
                    key={i }
                    elevation={3}
                    sx={{
                        mb: 2,
                        height: `${height}vh`,
                        borderRadius: '10px',
                        border: '2px solid',
                        borderColor: 'rgba(0, 0, 0, 0.1)',
                        bgcolor: 'background.default',
                        p: 2,
                    }}
                ></Paper>
            ))}
        </Box>
    ))} */}
</Box>
  )
}

export default VendorDashboard