import React, { useState } from 'react';
import { Box, Typography, Button, Divider, Radio, RadioGroup, FormControlLabel, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [open, setOpen] = useState(false);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '20px', height: '100vh', borderRadius: '19px', boxShadow: '0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '11px', color: '#000000', borderBottom: '1px solid rgba(16, 86, 82, .75)', paddingBottom: '10px' }}>
        CHECKOUT
      </Typography>
      <Box sx={{ padding: '20px' }}>
        <Box sx={{ marginBottom: '20px' }}>
          <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#000000' }}>SHIPPING</Typography>
          <Typography sx={{ fontSize: '11px', fontWeight: 600, color: '#000000' }}>221B Baker Street, W1U 8ED</Typography>
          <Typography sx={{ fontSize: '11px', fontWeight: 600, color: '#000000' }}>London, United Kingdom</Typography>
        </Box>
        <Divider sx={{ backgroundColor: 'rgba(16, 86, 82, .75)' }} />
        <Box sx={{ marginBottom: '20px' }}>
          <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#000000' }}>PAYMENT METHOD</Typography>
          <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange}>
            <FormControlLabel value="cash" control={<Radio />} label="Cash on Delivery" />
            <FormControlLabel value="upi" control={<Radio />} label="UPI" />
          </RadioGroup>
        </Box>
        <Divider sx={{ backgroundColor: 'rgba(16, 86, 82, .75)' }} />
        <Box sx={{ marginBottom: '20px' }}>
          <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#000000' }}>PAYMENT</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: '10fr 1fr', gap: '5px' }}>
            <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#000000' }}>Total:</Typography>
            <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#000000' }}>$280.40</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: 'rgba(16, 86, 82, .5)', borderRadius: '0 0 19px 19px' }}>
        <Typography sx={{ fontSize: '22px', color: '#2B2B2F', fontWeight: 900 }}>$280.40</Typography>
        <Button variant="contained" onClick={handleClickOpen} sx={{ backgroundColor: 'rgba(16, 86, 82, .55)', color: '#000000', width: '150px', height: '36px', borderRadius: '7px', border: '1px solid rgb(16, 86, 82)', fontSize: '13px', fontWeight: 600 }}>Pay</Button>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Payment Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            The total amount is $280.40. Do you want to proceed with the payment?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleClose} color="primary">Confirm</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Checkout;
