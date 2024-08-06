// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, Typography, Grid, Divider, Button, IconButton, Box } from '@mui/material';
// import { ArrowBackOutlined, EditOutlined } from '@mui/icons-material';
// import Checkout from '../../components/Checkout';
// import { useNavigate } from 'react-router-dom';

// const ViewOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [openCheckout, setOpenCheckout] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
//   const [actionOrderId, setActionOrderId] = useState(null);
//   const [actionType, setActionType] = useState('');
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');

//   const navigate = useNavigate();



//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(`/USERS/showOrdersByUser`, { withCredentials: true });
//         setOrders(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error('There was an error fetching the orders!', error);
//       }
//     };
//     fetchOrders();
//   }, []);

//   const handleAction = async (orderid, actionType, orderTotal = 0) => {
//     console.log(orderid);
//     try {
//       let response;
//       if (actionType === 'confirm') {
//         response = await axios.put(`/USERS/confirmOrder/${orderid}`);
//         if (response.status === 200) {
//           const order = orders.find(order => order.orderid === orderid);
//           setSelectedOrder(order);
//           setOpenCheckout(true);
//         }
//       } else if (actionType === 'cancel') {
//         response = await axios.put(`/USERS/CancelOrder/${orderid}`);
//       }
//       console.log(response.status);
//     } catch (error) {
//       console.log(`Error ${actionType}ing order`, error);
//     }
//   };

//   const handleCloseCheckout = () => {
//     setOpenCheckout(false);
//   };

//   return (
//     <Grid container spacing={2} padding="30px" direction="row">
//       <Grid item xs={12} md={1} flexWrap="wrap" sx={{ position: 'sticky', top: '30px' }}>
//         <Box display="flex" justifyContent="space-evenly" alignItems="center">
//           <IconButton
//             onClick={() => window.history.back()}
//             sx={{
//               fontSize: '6vh',
//               borderRadius: '50%',
//               boxShadow: 3,
//               color: 'rgba(0, 0, 0, 0.7)',
//               '&:hover': {
//                 cursor: 'pointer',
//                 color: 'rgba(0, 0, 0, 0.9)',
//               },
//             }}
//           >
//             <ArrowBackOutlined />
//           </IconButton>
//         </Box>
//       </Grid>
//       <Grid item xs={7}>
//         <Typography variant="h4" gutterBottom mt="15px">
//           Your Orders
//         </Typography>
//         <Grid container spacing={3}>
//           {orders.map((order, index) => (
//             <Grid item xs={12} key={index}>
//               <Card
//                 elevation={3}
//                 sx={{
//                   width: '95%',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'space-between',
//                   position: 'relative',
//                 }}
//               >
//                 <IconButton
//                   sx={{ position: 'absolute', top: '10px', right: '10px' }}
//                   onClick={() => handleAction(order.orderid, 'edit')}
//                 >
//                   <EditOutlined />
//                 </IconButton>
//                 <CardContent>
//                   <Typography variant="h5" gutterBottom>
//                     Order #{order.orderid}
//                   </Typography>
//                   <Divider sx={{ marginBottom: '15px' }} />
//                   <Typography variant="body1">Order Date: {order.orderDate}</Typography>
//                   <Typography variant="body1">Delivery Date: {order.deliveryDate}</Typography>
//                   <Typography variant="body1">Total: ${order.total}</Typography>
//                   <Typography variant="body1">Order Status: {order.orderStatus}</Typography>
//                   <Typography variant="body1" mt={2}>Delivery Time: {order.startTime} -  {order.endTime}</Typography>
//                 </CardContent>
//                 <Box display="flex" justifyContent="flex-end" p={2}>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => handleAction(order.orderid, 'confirm', order.total)}
//                     sx={{ 
//                       mr: 1,
//                       backgroundColor: 'rgba(16, 86, 82, .55)',
//                       color: '#ffffff',
//                       width: '150px',
//                       height: '36px',
//                       borderRadius: '7px',
//                       border: '1px solid rgb(16, 86, 82)',
//                       fontSize: '1.3rem',
//                       fontWeight: 600,
//                       '&:hover': {
//                         backgroundColor: 'rgba(16, 86, 82, .75)',
//                       }
//                        }}
//                     disabled={order.orderStatus === 'CONFIRMED' || order.orderStatus === 'CANCELLED' || order.orderStatus === 'PAID'}
                    
//                   >
//                     CONFIRM
//                   </Button>
//                   <Button
//                     variant="contained"
//                     color="secondary"
//                     onClick={() => handleAction(order.orderid, 'cancel')}
//                     disabled={order.orderStatus === 'CONFIRMED' || order.orderStatus === 'CANCELLED' || order.orderStatus === 'PAID'}
//                     sx={{
//                       backgroundColor: 'rgba(255, 0, 0, .55)',
//                       color: '#000000',
//                       width: '150px',
//                       height: '36px',
//                       borderRadius: '7px',
//                       border: '1px solid rgb(255, 0, 0)',
//                       fontSize: '1.3rem',
//                       fontWeight: 600,
//                       '&:hover': {
//                         backgroundColor: 'rgba(255, 0, 0, .75)',
//                       }
//                     }}
//                   >
//                     CANCEL
//                   </Button>
//                 </Box>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Grid>
//       <Grid item xs={4}>
//         {/* {openCheckout && <Checkout openCheckout={openCheckout} handleCloseCheckout={handleCloseCheckout} totalAmount={selectedOrder.orderTotal} orderId={selectedOrder.orderid} />} */}
//         {openCheckout && selectedOrder && (
//           <Checkout
//             openCheckout={openCheckout}
//             handleCloseCheckout={handleCloseCheckout}
//             totalAmount={selectedOrder.total}
//             orderId={selectedOrder.orderid}
//           />
//         )}
//       </Grid>
//     </Grid>
//   );
// };

// export default ViewOrders;



// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, Typography, Grid, Divider, Button, IconButton, Box, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar, Alert } from '@mui/material';
// import { ArrowBackOutlined, EditOutlined } from '@mui/icons-material';
// import Checkout from '../../components/Checkout';
// // import EditOrder from '../../components/EditOrder';
// import { useNavigate } from 'react-router-dom';

// const ViewOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [openCheckout, setOpenCheckout] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
//   const [actionOrderId, setActionOrderId] = useState(null);
//   const [actionType, setActionType] = useState('');
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');

//   const navigate = useNavigate();

  


  

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(`/USERS/showOrdersByUser`, { withCredentials: true });
//         setOrders(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error('There was an error fetching the orders!', error);
//       }
//     };
//     fetchOrders();
//   }, []);

//   // const handleAction = async (orderid, actionType, orderTotal = 0) => {
//   //   setActionOrderId(orderid);
//   //   setActionType(actionType);
//   //   if (actionType === 'cancel') {
//   //     setOpenConfirmDialog(true);
//   //   } else {
//   //     await executeAction(orderid, actionType, orderTotal);
//   //   }
//   // };

//   const handleAction = (orderid, actionType, orderTotal = 0) => {
//     setActionOrderId(orderid);
//     setActionType(actionType);
//     if (actionType === 'cancel') {
//       setOpenConfirmDialog(true);
//     } else if (actionType === 'edit') {
//       // setEditOrderId(orderid);
//       // setOpenEditDialog(true);
//       navigate(`/user/products2`, { state: { orderId: orderid } })
//     } else {
//       executeAction(orderid, actionType, orderTotal);
//     }
//   };


//   const executeAction = async (orderid, actionType, orderTotal = 0) => {
//     try {
//       let response;
//       if (actionType === 'confirm') {
//         response = await axios.put(`/USERS/confirmOrder/${orderid}`);
//         if (response.status === 200) {
//           const order = orders.find(order => order.orderid === orderid);
//           setSelectedOrder(order);
//           setOpenCheckout(true);
//           setSnackbarMessage('Order confirmed');
//           setOpenSnackbar(true);
//         }
//       } else if (actionType === 'cancel') {
//         response = await axios.put(`/USERS/CancelOrder/${orderid}`);
//         if (response.status === 200) {
//           setSnackbarMessage('Order cancelled');
//           setOpenSnackbar(true);
//           // Refresh orders list
//           const updatedOrders = orders.filter(order => order.orderid !== orderid);
//           setOrders(updatedOrders);
//         }
//       }
//     } catch (error) {
//       console.log(`Error ${actionType}ing order`, error);
//     }
//   };

//   const handleCloseConfirmDialog = (confirm) => {
//     setOpenConfirmDialog(false);
//     if (confirm && actionOrderId) {
//       executeAction(actionOrderId, actionType);
//     }
//     setActionOrderId(null);
//     setActionType('');
//   };

//   const handleCloseSnackbar = () => {
//     setOpenSnackbar(false);
//   };

//   const handleCloseCheckout = () => {
//     setOpenCheckout(false);
//   };

  


//   return (
//     <>
//       <Grid container spacing={2} padding="30px" direction="row">
//         <Grid item xs={12} md={1} flexWrap="wrap" sx={{ position: 'sticky', top: '30px' }}>
//           <Box display="flex" justifyContent="space-evenly" alignItems="center">
//             <IconButton
//               onClick={() => window.history.back()}
//               sx={{
//                 fontSize: '6vh',
//                 borderRadius: '50%',
//                 boxShadow: 3,
//                 color: 'rgba(0, 0, 0, 0.7)',
//                 '&:hover': {
//                   cursor: 'pointer',
//                   color: 'rgba(0, 0, 0, 0.9)',
//                 },
//               }}
//             >
//               <ArrowBackOutlined />
//             </IconButton>
//           </Box>
//         </Grid>
//         <Grid item xs={7}>
//           <Typography variant="h4" gutterBottom mt="15px">
//             Your Orders
//           </Typography>
//           <Grid container spacing={3}>
//             {orders.map((order, index) => (
//               <Grid item xs={12} key={index}>
//                 <Card
//                   elevation={3}
//                   sx={{
//                     width: '95%',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'space-between',
//                     position: 'relative',
//                   }}
//                 >
//                   <IconButton
//                     sx={{ position: 'absolute', top: '10px', right: '10px' }}
//                     onClick={() => handleAction(order.orderid, 'edit')}
//                   >
//                     <EditOutlined />
//                   </IconButton>
//                   <CardContent>
//                     <Typography variant="h5" gutterBottom>
//                       Order #{order.orderid}
//                     </Typography>
//                     <Divider sx={{ marginBottom: '15px' }} />
//                     <Typography variant="body1">Order Date: {order.orderDate}</Typography>
//                     <Typography variant="body1">Delivery Date: {order.deliveryDate}</Typography>
//                     <Typography variant="body1">Total: ${order.total}</Typography>
//                     <Typography variant="body1">Order Status: {order.orderStatus}</Typography>
//                     <Typography variant="body1" mt={2}>Delivery Time: {order.startTime} -  {order.endTime}</Typography>
//                   </CardContent>
//                   <Box display="flex" justifyContent="flex-end" p={2}>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       onClick={() => handleAction(order.orderid, 'confirm', order.total)}
//                       sx={{ 
//                         mr: 1,
//                         backgroundColor: 'rgba(16, 86, 82, .55)',
//                         color: '#ffffff',
//                         width: '150px',
//                         height: '36px',
//                         borderRadius: '7px',
//                         border: '1px solid rgb(16, 86, 82)',
//                         fontSize: '1.3rem',
//                         fontWeight: 600,
//                         '&:hover': {
//                           backgroundColor: 'rgba(16, 86, 82, .75)',
//                         }
//                       }}
//                       disabled={order.orderStatus === 'CONFIRMED' || order.orderStatus === 'CANCELLED' || order.orderStatus === 'PAID'}
//                     >
//                       CONFIRM
//                     </Button>
//                     <Button
//                       variant="contained"
//                       color="secondary"
//                       onClick={() => handleAction(order.orderid, 'cancel')}
//                       disabled={order.orderStatus === 'CONFIRMED' || order.orderStatus === 'CANCELLED' || order.orderStatus === 'PAID'}
//                       sx={{
//                         backgroundColor: 'rgba(255, 0, 0, .55)',
//                         color: '#000000',
//                         width: '150px',
//                         height: '36px',
//                         borderRadius: '7px',
//                         border: '1px solid rgb(255, 0, 0)',
//                         fontSize: '1.3rem',
//                         fontWeight: 600,
//                         '&:hover': {
//                           backgroundColor: 'rgba(255, 0, 0, .75)',
//                         }
//                       }}
//                     >
//                       CANCEL
//                     </Button>
//                   </Box>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//         <Grid item xs={4}>
//           {openCheckout && selectedOrder && (
//             <Checkout
//               openCheckout={openCheckout}
//               handleCloseCheckout={handleCloseCheckout}
//               totalAmount={selectedOrder.total}
//               orderId={selectedOrder.orderid}
//             />
//           )}
//         </Grid>
//       </Grid>

//       {/* <EditOrder
//         open={openEditDialog}
//         handleClose={() => setOpenEditDialog(false)}
//         orderId={editOrderId}
//         onSave={handleSaveEditOrder}
//       /> */}

//       {/* Confirmation Dialog */}
//       <Dialog
//         open={openConfirmDialog}
//         onClose={() => setOpenConfirmDialog(false)}
//       >
//         <DialogTitle>Confirm Cancellation</DialogTitle>
//         <DialogContent>
//           <Typography>Are you sure you want to cancel this order?</Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => handleCloseConfirmDialog(false)}>No</Button>
//           <Button onClick={() => handleCloseConfirmDialog(true)}>Yes</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Snackbar for Confirmation and Cancellation */}
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         message={snackbarMessage}
//       >
//         <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </>
//   );
// };

// export default ViewOrders;




import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Divider, Button, IconButton, Box, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar, Alert } from '@mui/material';
import { ArrowBackOutlined, EditOutlined } from '@mui/icons-material';
import Checkout from '../../components/Checkout';
import { useNavigate } from 'react-router-dom';

const ViewOrders = () => {
  const [orders, setOrders] = useState([]);
  const [openCheckout, setOpenCheckout] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [actionOrderId, setActionOrderId] = useState(null);
  const [actionType, setActionType] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [confirmedOrders, setConfirmedOrders] = useState([]);
  const [paidOrders, setPaidOrders] = useState([]);
  const [cancelledOrders, setCancelledOrders] = useState([]);


  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`/USERS/showOrdersByUser`, { withCredentials: true });
        setOrders(response.data);
      } catch (error) {
        console.error('There was an error fetching the orders!', error);
      }
    };
    fetchOrders();
  }, []);

  const handleAction = (orderid, actionType) => {
    const order = orders.find(order => order.orderid === orderid);
    setActionOrderId(orderid);
    setActionType(actionType);
    if (actionType === 'cancel') {
      setOpenConfirmDialog(true);
    } else if (actionType === 'edit') {
      navigate(`/user/products2`, { state: { orderId: orderid } });
    } else if (actionType === 'pay') {
      setSelectedOrder(order);
      setOpenCheckout(true);
    } else {
      executeAction(orderid, actionType);
    }
  };

  const executeAction = async (orderid, actionType) => {
    try {
      let response;
      if (actionType === 'confirm') {
        response = await axios.put(`/USERS/confirmOrder/${orderid}`);
        if (response.status === 200) {
          setSnackbarMessage('Order confirmed');
          setOpenSnackbar(true);
          setConfirmedOrders([...confirmedOrders, orderid]);
          setOrders(orders.map(order => 
            order.orderid === orderid ? {...order, orderStatus: 'CONFIRMED'} : order
          ));
        }
      } else if (actionType === 'cancel') {
        response = await axios.put(`/USERS/CancelOrder/${orderid}`);
        if (response.status === 200) {
          setSnackbarMessage('Order cancelled');
          setOpenSnackbar(true);
          setOrders(orders.filter(order => order.orderid !== orderid));
          setCancelledOrders([...cancelledOrders, orderid]);
          setOrders(orders.map(order =>
            order.orderid === orderid ? {...order, orderStatus: 'CANCELLED'} : order
          ));
        }
      }
    } catch (error) {
      console.log(`Error ${actionType}ing order`, error);
    }
  };

  const handleCloseConfirmDialog = (confirm) => {
    setOpenConfirmDialog(false);
    if (confirm && actionOrderId) {
      executeAction(actionOrderId, actionType);
    }
    setActionOrderId(null);
    setActionType('');
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleCloseCheckout = () => {
    setOpenCheckout(false);
  };

  return (
    <>
      <Grid container spacing={2} padding="30px" direction="row">
        <Grid item xs={12} md={1} flexWrap="wrap" sx={{ position: 'sticky', top: '30px' }}>
          <Box display="flex" justifyContent="space-evenly" alignItems="center">
            <IconButton
              onClick={() => window.history.back()}
              sx={{
                fontSize: '6vh',
                borderRadius: '50%',
                boxShadow: 3,
                color: 'rgba(0, 0, 0, 0.7)',
                '&:hover': {
                  cursor: 'pointer',
                  color: 'rgba(0, 0, 0, 0.9)',
                },
              }}
            >
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
                <Card
                  elevation={3}
                  sx={{
                    width: '95%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                  }}
                >
                  {order.orderStatus === 'ORDER PLACED' && (
                    <IconButton
                      sx={{ position: 'absolute', top: '10px', right: '10px' }}
                      onClick={() => handleAction(order.orderid, 'edit')}
                    >
                      <EditOutlined />
                    </IconButton>
                  )}
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Order #{order.orderid}
                    </Typography>
                    <Divider sx={{ marginBottom: '15px' }} />
                    <Typography variant="body1">Order Date: {order.orderDate}</Typography>
                    <Typography variant="body1">Delivery Date: {order.deliveryDate}</Typography>
                    <Typography variant="body1">Total: ${order.total}</Typography>
                    <Typography variant="body1">Order Status: {order.orderStatus}</Typography>
                    <Typography variant="body1" mt={2}>Delivery Time: {order.startTime} - {order.endTime}</Typography>
                  </CardContent>
                  <Box display="flex" justifyContent="flex-end" p={2}>
                    {order.orderStatus === 'ORDER PLACED' &&  !confirmedOrders.includes(order.orderid) && !cancelledOrders.includes(order.orderid) && (
                      <>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleAction(order.orderid, 'pay')}
                          sx={{ 
                            mr: 1,
                            backgroundColor: 'rgba(16, 86, 82, .55)',
                            color: '#ffffff',
                            width: '150px',
                            height: '36px',
                            borderRadius: '7px',
                            border: '1px solid rgb(16, 86, 82)',
                            fontSize: '1.3rem',
                            fontWeight: 600,
                            '&:hover': {
                              backgroundColor: 'rgba(16, 86, 82, .75)',
                            }
                          }}
                        >
                          PAY
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleAction(order.orderid, 'confirm')}
                          sx={{ 
                            mr: 1,
                            backgroundColor: 'rgba(16, 86, 82, .55)',
                            color: '#ffffff',
                            width: '150px',
                            height: '36px',
                            borderRadius: '7px',
                            border: '1px solid rgb(16, 86, 82)',
                            fontSize: '1.3rem',
                            fontWeight: 600,
                            '&:hover': {
                              backgroundColor: 'rgba(16, 86, 82, .75)',
                            }
                          }}
                        >
                          CONFIRM
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => handleAction(order.orderid, 'cancel')}
                          sx={{
                            backgroundColor: 'rgba(255, 0, 0, .55)',
                            color: '#000000',
                            width: '150px',
                            height: '36px',
                            borderRadius: '7px',
                            border: '1px solid rgb(255, 0, 0)',
                            fontSize: '1.3rem',
                            fontWeight: 600,
                            '&:hover': {
                              backgroundColor: 'rgba(255, 0, 0, .75)',
                            }
                          }}
                        >
                          CANCEL
                        </Button>
                      </>
                    )}
                    {order.orderStatus === 'CONFIRMED' && (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleAction(order.orderid, 'pay')}
                        sx={{ 
                          mr: 1,
                          backgroundColor: '#8abf2c',
                          color: '#ffffff',
                          width: '150px',
                          height: '36px',
                          borderRadius: '7px',
                          border: '1px solid #143f17',
                          fontSize: '1.3rem',
                          fontWeight: 600,
                          '&:hover': {
                            backgroundColor: '#b4e639',
                          }
                        }}
                      >
                        PAY
                      </Button>
                    )}
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Confirm Dialog */}
      <Dialog open={openConfirmDialog} onClose={() => handleCloseConfirmDialog(false)}>
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to {actionType} this order?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseConfirmDialog(false)}>Cancel</Button>
          <Button onClick={() => handleCloseConfirmDialog(true)} color="primary">Confirm</Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>

      {/* Checkout Dialog */}
      {selectedOrder && (
        <Dialog open={openCheckout} onClose={handleCloseCheckout} maxWidth="md" fullWidth>
          <DialogTitle>Checkout</DialogTitle>
          <DialogContent>
            <Checkout order={selectedOrder}  onClose={handleCloseCheckout} />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ViewOrders;
