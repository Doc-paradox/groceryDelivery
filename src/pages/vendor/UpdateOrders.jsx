import { ArrowBackOutlined } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Divider, Grid, IconButton, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UpdateOrders = () => {

  const [orders,setOrders] = useState([]);
  // const [vendorId,setVendorId] = useState(() =>localStorage.getItem('userId'));
  // console.log(vendorId);

  // useEffect(() =>{
  //   if (vendorId) {
  //     localStorage.setItem('userId', vendorId);
  //   }
  // }, [vendorId]);

  useEffect(() =>{

    const fetchOrders = async () =>{             
      try{
        // console.log(vendorId);
        const response = await axios.get(`/USERS/getOrdersByVendor`,{withCredentials:true});
        setOrders(response.data);
        console.log(response.data);
      }catch(error){
        console.log("Error fetching order list",error);
      }
    };

    fetchOrders();
  },[]);

const handlePacking=(orderid)=>{
  console.log(orderid);
  try{
    const response = axios.put(`/user/order/updateStatus/${orderid}`);
    console.log(response.status);
  }catch(error){
    console.log("Error updating order status",error)
  }
}

  return (
    <Box padding="20px" sx={{ display: 'flex', height: '100vh' }}>
    {/* Back Arrow */}
    <Grid container spacing={2}>
      <Grid item xs={12} md={1} sx={{ position: 'sticky', top: '0' }}>
        <IconButton
          onClick={() => window.history.back()}
          sx={{
            fontSize: '6vh',
            borderRadius: '50%',
            boxShadow: 3,
            color: 'rgba(0, 0, 0, 0.7)',
            '&:hover': {
              cursor: 'pointer',
              color: 'rgba(0, 0, 0, 0.9)'
            }
          }}
        >
          <ArrowBackOutlined />
        </IconButton>
      </Grid>

      {/* Content Area */}
      <Grid item xs={12} md={11} sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Box flex={1} display="flex" flexDirection="column">
            <Typography variant='h3' gutterBottom>
              Orders for you
            </Typography>

            <Box flex={1} overflow="auto">
              <Grid container spacing={3}>
                {orders.map((order, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card elevation={3} sx={{ position: 'relative' }}>
                      <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                          <Typography variant="h5">
                            Order #{order.orderid}
                          </Typography>
                          <Button
                            onClick={() => handlePacking(order.orderid)}
                            variant="contained"
                            color="primary"
                            sx={{ alignSelf: 'flex-start',width:'15vh',fontWeight:'bold' }}
                          >
                            Ship
                          </Button>
                        </Box>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="body1" gutterBottom>
                          <strong>Order Date:</strong> {order.productname}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          <strong>Delivery Date:</strong> {order.deliveryDate}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          <strong>Total:</strong> ${order.total}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          <strong>Order Status:</strong> {order.orderStatus}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          <strong>Delivery Time:</strong>  {order.startTime} -  {order.endTime}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>
    </Grid>
  </Box>
  )
}

export default UpdateOrders