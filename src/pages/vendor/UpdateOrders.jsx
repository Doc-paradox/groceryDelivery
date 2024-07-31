import { ArrowBackOutlined } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UpdateOrders = () => {

  const [orders,setOrders] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() =>{

    const fetchOrders = async () =>{
      try{
        console.log(userId);
        const response = await axios.get(`/USERS/getOrdersByVendor/${userId}`);
        setOrders(response.data);
        console.log(response.data);
      }catch(error){
        console.log("Error fetching order list",error);
      }
    };

    fetchOrders();
  },[userId]);


  return (
    <Box>
      <ArrowBackOutlined
        sx={{
          fontSize: '8vh',
          borderRadius: '50%',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
          color: '#3f51b5',
          backgroundColor: 'white',
          padding: '10px',
          transition: 'all 0.3s ease',
          '&:hover': {
            cursor: 'pointer',
            color: '#283593',
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
            transform: 'scale(1.05)'
          }
        }}
        onClick={() => window.history.back()}
      />
      <Typography variant='h3' gutterBottom>
        Orders for you
      </Typography>
      <Grid container spacing={3}>
        {orders.map((order,index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
          <Card elevation={3}>
          <CardContent>
              <Typography variant="h5" gutterBottom>
                Order #{order.orderid}
              </Typography>
              <Divider />
              <Typography variant="body1">Order Date: {order.productname}</Typography>
              <Typography variant="body1">Delivery Date: {order.deliveryDate}</Typography>
              <Typography variant="body1">Total: ${order.total}</Typography>
              <Typography variant="body1">Order Status: {order.orderStatus}</Typography>
              {/* <Button variant="body1">
                Confirm {order.orderconfirmation ? 'Confirmed' : 'Not Confirmed'}
              </Button> */}
              {/* <Typography variant="body1">
                Payment Confirmation: {order.paymentconfirmation ? 'Confirmed' : 'Not Confirmed'}
              </Typography> */}
              <Typography variant="body1">Delivery Time:StartTime {order.startTime} - EndTime{order.endTime}</Typography>
            </CardContent>
          </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default UpdateOrders