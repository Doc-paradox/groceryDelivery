import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, CardContent, Typography, Grid, Divider, Button } from '@mui/material';
import { ArrowBackOutlined } from '@mui/icons-material';

const ViewOrders = () => {
  // const orderId = localStorage.getItem('orderId');
  // const [orderItems,setOrderItems] = useState('');
  const [orders,setOrders] = useState([]);
  const userId = localStorage.getItem('userid');

  useEffect(() =>{
     
    const fetchOrders = async () => {
      try{
        const response = await axios.get(`/USERS/showOrders/${userId}`);
        setOrders(response.data);
        console.log(response.data);
      }catch(error){
        console.error('There was an error fetching the orders!', error);
      }
    };
    fetchOrders();
  },[userId])
  return (
    <div>
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
    <Typography variant="h4" gutterBottom>
      Your Orders
    </Typography>
    <Grid container spacing={3}>
      {orders.map((order, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Order #{order.orderid}
              </Typography>
              <Divider />
              <Typography variant="body1">Order Date: {order.orderDate}</Typography>
              <Typography variant="body1">Delivery Date: {order.deliveryDate}</Typography>
              <Typography variant="body1">Total: ${order.total}</Typography>
              <Typography variant="body1">Order Status: {order.orderStatus}</Typography>
              <Button variant="body1">
                Confirm {order.orderconfirmation ? 'Confirmed' : 'Not Confirmed'}
              </Button>
              {/* <Typography variant="body1">
                Payment Confirmation: {order.paymentconfirmation ? 'Confirmed' : 'Not Confirmed'}
              </Typography> */}
              <Typography variant="body1">Delivery Time:StartTime {order.startTime} - EndTime{order.endTime}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
  );
  
  
}

export default ViewOrders