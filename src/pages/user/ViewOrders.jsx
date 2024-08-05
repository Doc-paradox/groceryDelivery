// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Card, CardContent, Typography, Grid, Divider, Button, IconButton, Box } from '@mui/material';
// import { ArrowBackOutlined } from '@mui/icons-material';
// import Checkout from '../../components/Checkout';

// const ViewOrders = () => {
//   // const orderId = localStorage.getItem('orderId');
//   // const [orderItems,setOrderItems] = useState('');
//   const [orders,setOrders] = useState([]);
//   // const userId = localStorage.getItem('userid');

//   useEffect(() =>{
     
//     const fetchOrders = async () => {
//       try{
//         const response = await axios.get(`/USERS/showOrdersByUser`,{withCredentials:true});
//         setOrders(response.data);
//         console.log(response.data);
//       }catch(error){
//         console.error('There was an error fetching the orders!', error);
//       }
//     };
//     fetchOrders();
//   },[])

//   const handleAction = async (orderid, actionType) => {
//     console.log(orderid);
//     try {
//         let response;
//         if (actionType === 'confirm') {
//             response = await axios.put(`/user/order/confirmOrder/${orderid}`);
//         } else if (actionType === 'cancel') {
//             response = await axios.put(`/user/order/cancelOrder/${orderid}`);
//         }
//         console.log(response.status);
//     } catch (error) {
//         console.log(`Error ${actionType}ing order`, error);
//     }
// };

//   return (
//     <Grid container spacing={2} padding="30px" direction="row">
//     <Grid item xs={12} md={1} flexWrap="wrap" sx={{ position: 'sticky', top: '30px' }}>
//       <Box display="flex" justifyContent="space-evenly" alignItems="center">
//         <IconButton onClick={() => window.history.back()} sx={{
//           fontSize: '6vh', borderRadius: '50%', boxShadow: 3, color: 'rgba(0, 0, 0, 0.7)',
//           '&:hover': {
//             cursor: 'pointer',
//             color: 'rgba(0, 0, 0, 0.9)'
//           }
//         }}>
//           <ArrowBackOutlined />
//         </IconButton>
//       </Box>
//     </Grid>
//     <Grid item xs={7}>
//       <Typography variant="h4" gutterBottom mt="15px">
//         Your Orders
//       </Typography>
//       <Grid container spacing={3}>
//           {orders.map((order, index) => (
//             <Grid item xs={12} key={index}>
//               <Card elevation={3} sx={{ width: '95%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                 <CardContent sx={{ flex: '1 1 auto' }}>
//                   <Typography variant="h5" gutterBottom>
//                     Order #{order.orderid}
//                   </Typography>
//                   <Divider sx={{ marginBottom: '15px' }} />
//                   <Typography variant="body1">Order Date: {order.orderDate}</Typography>
//                   <Typography variant="body1">Delivery Date: {order.deliveryDate}</Typography>
//                   <Typography variant="body1">Total: ${order.total}</Typography>
//                   <Typography variant="body1">Order Status: {order.orderStatus}</Typography>
//                   <Typography variant="body1" mt={2}>Delivery Time: Start {order.startTime} - End {order.endTime}</Typography>
//                 </CardContent>
//                 <Box display="flex" justifyContent="space-between" mt={3} mb={2}>
//                     {order.orderStatus === 'confirmed' ? (
//                       <Button variant="contained" color="success" onClick={() => handleAction(order.orderid, 'track')}>
//                         Track Order
//                       </Button>
//                     ) : (
//                       <Button variant="contained" color="warning" onClick={() => handleAction(order.orderid, 'edit')}>
//                         Edit Order
//                       </Button>
//                     )}
//                     <Button variant="contained" color="primary" onClick={() => handleAction(order.orderid, 'confirm')}>
//                       Confirm
//                     </Button>
//                     <Button variant="contained" color="secondary" onClick={() => handleAction(order.orderid, 'cancel')} disabled={order.orderStatus === 'confirmed'}>
//                       Cancel
//                     </Button>
//                   </Box>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//     </Grid>
//     <Grid item xs={4}>
//       <Checkout/>
          
//     </Grid>
//   </Grid>
//   );
  
  
// }

// export default ViewOrders

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Divider, Button, IconButton, Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { ArrowBackOutlined } from '@mui/icons-material';
import Checkout from '../../components/Checkout';

const ViewOrders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [checkoutOrder, setCheckoutOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`/USERS/showOrdersByUser`, { withCredentials: true });
        setOrders(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('There was an error fetching the orders!', error);
      }
    };
    fetchOrders();
  }, []);

  const handleAction = async (orderid, actionType) => {
    try {
      let response;
      if (actionType === 'confirm') {
        response = await axios.put(`/user/order/confirmOrder/${orderid}`);
        const updatedOrder = response.data;
        setOrders(orders.map(order => (order.orderid === orderid ? updatedOrder : order)));
      } else if (actionType === 'cancel') {
        response = await axios.put(`/user/order/cancelOrder/${orderid}`);
        const updatedOrder = response.data;
        setOrders(orders.map(order => (order.orderid === orderid ? updatedOrder : order)));
      }
    } catch (error) {
      console.log(`Error ${actionType}ing order`, error);
    }
  };

  const handleConfirmClick = (order) => {
    setCheckoutOrder(order);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedOrder(null);
  };

  const confirmPayment = async () => {
    try {
      const response = await axios.put(`/user/order/payOrder/${checkoutOrder.orderid}`);
      const updatedOrder = response.data;
      setOrders(orders.map(order => (order.orderid === checkoutOrder.orderid ? updatedOrder : order)));
      handleDialogClose();
    } catch (error) {
      console.log('Error confirming payment', error);
    }
  };

  return (
    <Grid container spacing={2} padding="30px" direction="row">
      <Grid item xs={12} md={1} flexWrap="wrap" sx={{ position: 'sticky', top: '30px' }}>
        <Box display="flex" justifyContent="space-evenly" alignItems="center">
          <IconButton onClick={() => window.history.back()} sx={{
            fontSize: '6vh', borderRadius: '50%', boxShadow: 3, color: 'rgba(0, 0, 0, 0.7)',
            '&:hover': {
              cursor: 'pointer',
              color: 'rgba(0, 0, 0, 0.9)'
            }
          }}>
            <ArrowBackOutlined />
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={7}>
        <Typography variant="h4" gutterBottom mt="15px">
          Your Orders
        </Typography>
        <Grid container spacing={3}>
          {orders.map((order, index) => (
            <Grid item xs={12} key={index}>
              <Card elevation={3} sx={{ width: '95%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <CardContent sx={{ flex: '1 1 auto' }}>
                  <Typography variant="h5" gutterBottom>
                    Order #{order.orderid}
                  </Typography>
                  <Divider sx={{ marginBottom: '15px' }} />
                  <Typography variant="body1">Order Date: {order.orderDate}</Typography>
                  <Typography variant="body1">Delivery Date: {order.deliveryDate}</Typography>
                  <Typography variant="body1">Total: ${order.total}</Typography>
                  <Typography variant="body1">Order Status: {order.orderStatus}</Typography>
                  <Typography variant="body1" mt={2}>Delivery Time: Start {order.startTime} - End {order.endTime}</Typography>
                </CardContent>
                <Box display="flex" justifyContent="space-between" mt={3} mb={2}>
                  {order.orderStatus === 'confirmed' ? (
                    <Button variant="contained" color="success" onClick={() => handleAction(order.orderid, 'track')}>
                      Track Order
                    </Button>
                  ) : (
                    <Button variant="contained" color="warning" onClick={() => handleAction(order.orderid, 'edit')} disabled={order.orderStatus === 'paid'}>
                      Edit Order
                    </Button>
                  )}
                  <Button variant="contained" color="primary" onClick={() => handleConfirmClick(order)} disabled={order.orderStatus === 'paid'}>
                    Confirm
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => handleAction(order.orderid, 'cancel')} disabled={order.orderStatus === 'confirmed' || order.orderStatus === 'paid'}>
                    Cancel
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={4}>
        {checkoutOrder && (
          <Checkout 
            total={orders.find(order => order.orderid === checkoutOrder.orderid).total}
            onPayClick={() => setOpenDialog(true)}
          />
        )}
      </Grid>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Payment Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            The total amount is ${checkoutOrder ? checkoutOrder.total : 0}. Do you want to proceed with the payment?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">Cancel</Button>
          <Button onClick={confirmPayment} color="primary">Confirm</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default ViewOrders;
