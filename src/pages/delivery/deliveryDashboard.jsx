import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Navbar from '../../components/Navbar';
import DeliverySidebar from './deliverySidebar';
import styled from 'styled-components';
const DeliveryDashboard = () => {
    return(
        <Box>
            <Navbar/>
            <Grid container spacing={1}>
                <Grid item xs={1}>
                <DeliverySidebar/>
                </Grid>
            <Box>
                orderid,orderitems,pickup,drop,total
            </Box>
            </Grid>
        </Box>
    )
};
export default DeliveryDashboard;