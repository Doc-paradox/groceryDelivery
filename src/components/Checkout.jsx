// import React, { useState } from 'react';
// import { Box, Typography, Button, Divider, Radio, RadioGroup, FormControlLabel, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';

// const Checkout = ({ totalAmount }) => {
//   const [paymentMethod, setPaymentMethod] = useState('cash');
//   const [open, setOpen] = useState(false);

//   const handlePaymentMethodChange = (event) => {
//     setPaymentMethod(event.target.value);
//   };

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ backgroundColor: '#f5f5f5', padding: '20px', height: '100vh', borderRadius: '19px', boxShadow: '0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)' }}>
//       <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '11px', color: '#000000', borderBottom: '1px solid rgba(16, 86, 82, .75)', paddingBottom: '10px' }}>
//         CHECKOUT
//       </Typography>
//       <Box sx={{ padding: '20px' }}>
//         <Box sx={{ marginBottom: '20px' }}>
//           <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#000000' }}>SHIPPING</Typography>
//           <Typography sx={{ fontSize: '11px', fontWeight: 600, color: '#000000' }}>221B Baker Street, W1U 8ED</Typography>
//           <Typography sx={{ fontSize: '11px', fontWeight: 600, color: '#000000' }}>London, United Kingdom</Typography>
//         </Box>
//         <Divider sx={{ backgroundColor: 'rgba(16, 86, 82, .75)' }} />
//         <Box sx={{ marginBottom: '20px' }}>
//           <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#000000' }}>PAYMENT METHOD</Typography>
//           <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange}>
//             <FormControlLabel value="cash" control={<Radio />} label="Cash on Delivery" />
//             <FormControlLabel value="upi" control={<Radio />} label="UPI" />
//           </RadioGroup>
//         </Box>
//         <Divider sx={{ backgroundColor: 'rgba(16, 86, 82, .75)' }} />
//         <Box sx={{ marginBottom: '20px' }}>
//           <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#000000' }}>PAYMENT</Typography>
//           <Box sx={{ display: 'grid', gridTemplateColumns: '10fr 1fr', gap: '5px' }}>
//             <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#000000' }}>Total:</Typography>
//             <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#000000' }}>${totalAmount}</Typography>
//           </Box>
//         </Box>
//       </Box>
//       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: 'rgba(16, 86, 82, .5)', borderRadius: '0 0 19px 19px' }}>
//         <Typography sx={{ fontSize: '22px', color: '#2B2B2F', fontWeight: 900 }}>${totalAmount}</Typography>
//         <Button variant="contained" onClick={handleClickOpen} sx={{ backgroundColor: 'rgba(16, 86, 82, .55)', color: '#000000', width: '150px', height: '36px', borderRadius: '7px', border: '1px solid rgb(16, 86, 82)', fontSize: '13px', fontWeight: 600 }}>Pay</Button>
//       </Box>

//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Payment Confirmation</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             The total amount is ${totalAmount}. Do you want to proceed with the payment?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">Cancel</Button>
//           <Button onClick={handleClose} color="primary">Confirm</Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default Checkout;


// import React from 'react';
// import { Button, Typography } from '@mui/material';

// const Checkout = ({ order }) => {
//   return (
//     <div>
//       <Typography variant="h6">Order Summary</Typography>
//       <Typography variant="body1">Order ID: {order.orderid}</Typography>
//       <Typography variant="body1">Total Amount: ${order.total}</Typography>
//       <Button
//         variant="contained"
//         color="primary"
//         sx={{
//           mt: 2,
//           backgroundColor: 'rgba(16, 86, 82, .55)',
//           color: '#ffffff',
//           width: '150px',
//           height: '36px',
//           borderRadius: '7px',
//           border: '1px solid rgb(16, 86, 82)',
//           fontSize: '1.3rem',
//           fontWeight: 600,
//           '&:hover': {
//             backgroundColor: 'rgba(16, 86, 82, .75)',
//           },
//         }}
//       >
//         Pay
//       </Button>
//     </div>
//   );
// };

// export default Checkout;



import React, { useState } from 'react';
import axios from 'axios';
import { Box, Typography, Button, Divider, Radio, RadioGroup, FormControlLabel, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Snackbar, Alert } from '@mui/material';

const Checkout = ({ order ,onClose}) => {
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [open, setOpen] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmPayment = async () => {
    try {
      const addPaymentResponse = await axios.put(`/USERS/addPayment/${order.orderid}`, null, {
        params: { PAYMENTMETHOD: paymentMethod },
        withCredentials: true,
      });
      if (paymentMethod === 'upi') {
        const makePaymentResponse = await axios.put(`/USERS/makePayment/${order.orderid}`, null, {
          params: { Confirm: 'yes' },
          withCredentials: true,
        });
        setPaymentStatus(makePaymentResponse.data);
      } else {
        setPaymentStatus(addPaymentResponse.data);
      }
      handleClose();
      setOpenSnackbar(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error during payment', error);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '19px', boxShadow: '0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '11px', color: '#000000', borderBottom: '1px solid rgba(16, 86, 82, .75)', paddingBottom: '10px' }}>
        CHECKOUT
      </Typography>
      <Box sx={{ padding: '20px' }}>
        <Box sx={{ marginBottom: '20px' }}>
          <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#000000' }}>ORDER SUMMARY</Typography>
          <Typography sx={{ fontSize: '11px', fontWeight: 600, color: '#000000' }}>Order ID: {order.orderid}</Typography>
          <Typography sx={{ fontSize: '11px', fontWeight: 600, color: '#000000' }}>Total Amount: ${order.total}</Typography>
        </Box>
        <Divider sx={{ backgroundColor: '#cdee77',
            main: '#b4e639' }} />
        <Box sx={{ marginBottom: '20px' }}>
          <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#000000' }}>PAYMENT METHOD</Typography>
          <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange}>
            <FormControlLabel value="cash" control={<Radio />} label="Cash on Delivery" />
            <FormControlLabel value="upi" control={<Radio />} label="UPI" />
          </RadioGroup>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: 'rgba(16, 86, 82, .5)', borderRadius: '0 0 19px 19px' }}>
        <Typography sx={{ fontSize: '22px', color: '#2B2B2F', fontWeight: 900 }}>${order.total}</Typography>
        <Button 
          variant="contained" 
          onClick={handleClickOpen}
          sx={{
            backgroundColor: '#8abf2c',
            color: '#ffffff',
            width: '150px',
            height: '36px',
            borderRadius: '7px',
            border: '1px solid #b4e639',
            fontSize: '1.3rem',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#b4e639',
            },
          }}
        >
          Pay
        </Button>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Payment Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            The total amount is ${order.total}. Do you want to proceed with the payment?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleConfirmPayment} color="primary">Confirm</Button>
        </DialogActions>
      </Dialog>

      {paymentStatus && (
        <Dialog open={true} onClose={() => setPaymentStatus('')}>
          <DialogTitle width={'30vh'} height={'25vh'}>Payment Status</DialogTitle>
          <DialogContent>
            <DialogContentText>{paymentStatus}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setPaymentStatus('')} color="primary">Close</Button>
          </DialogActions>
        </Dialog>
      )}
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Payment made successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Checkout;
