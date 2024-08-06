

import React, { useEffect, useState } from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, Select, MenuItem, TextField, FormControl, InputLabel, IconButton, Accordion, AccordionSummary, AccordionDetails, Divider, Snackbar } from '@mui/material';
import axios from 'axios';
import CartItem from '../../components/CartItem';
import { ArrowBackOutlined, ExpandMore } from '@mui/icons-material';


const ViewCart = () => {
  const [cartItems, setCartItems] = useState([]);
  // const [showAddressSelection, setShowAddressSelection] = useState(false);
  const [timeSlot, setTimeSlot] = useState('');
  const [timeSlots, setTimeSlots] = useState([]);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);


  const [newAddress, setNewAddress] = useState({
    addressline: '',
    city: '',
    state: '',
    country: '',
    pincode: ''
  });
  // const userId = localStorage.getItem('userid');

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [groupedSlots, setGroupedSlots] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`/USERS/cartItems`, { withCredentials: true });
        console.log(response.data);
        const parsedItems = response.data.map((itemString) => {
          const [productName, quantity, price] = itemString.split(',');
          return {
            id: Math.random().toString(36).substr(2, 9), // Generate a unique ID
            productName,
            quantity: parseInt(quantity, 10),
            price: parseFloat(price),
            image: 'path/to/image' // Replace with actual image path or URL
          };
        });
        setCartItems(parsedItems);
      } catch (error) {
        console.error('There was an error fetching the cart items!', error);
      }
    };

    const fetchTimeSlots = async () => {
      try {
        const response = await axios.get('/USERS/getSlot');
        setTimeSlots(response.data);
        groupSlots(response.data);
      } catch (error) {
        console.error('There was an error fetching the timeslots!', error);
      }
    };

    const fetchAddresses = async () => {
      try {
        const response = await axios.get(`/USERS/showAddress`, { withCredentials: true });
        setAddresses(response.data);
        console.log(response.data);
        if (response.data.length > 0) {
          setSelectedAddress(response.data[0]);
        }
      } catch (error) {
        console.error('There was an error fetching the addresses!', error);
      }
    };

    fetchCartItems();
    fetchTimeSlots();
    fetchAddresses();
  }, []);

  const groupSlots = (slots) => {
    const groups = [[], [], [], []];
    slots.forEach((slot, index) => {
      groups[Math.floor(index / (slots.length / 4))].push(slot);
    });
    setGroupedSlots(groups);
  };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
    );
    setCartItems(updatedItems);
  };

  const handleRemoveItem = async (itemId, quantity) => {
    console.log(itemId, quantity);
    // console.log(typeof itemId);
    try {
      const productId = String(itemId).trim();

      // Check if productId is valid
      if (!productId || productId.length === 0) {
        console.error('Invalid product ID:', itemId);
        return;
      }

      await axios.delete(`/USERS/removeFromCart`, null, {

        params: {
          PRODUCTID: productId,
          // QUANTITY: quantity || null,
        }, withCredentials: true,
      });
      setCartItems(prevItems => {
        if (quantity === null) {
          return prevItems.filter(item => item.id !== itemId);
        } else {
          return prevItems.map(item =>
            item.id === itemId
              ? { ...item, quantity: item.quantity - quantity }
              : item
          ).filter(item => item.quantity > 0);
        }
      });
    } catch (error) {
      console.error('There was an error removing the item!', error.response);
    }
  };

  const handleAddressChange = (event) => {
    setSelectedAddress(event.target.value);
  };


  const handleAddNewAddress = async () => {
    try {
      const addressWithUserId = { ...newAddress };
      const response = await axios.put(`/USERS/addAddress`, { withCredentials: true }, addressWithUserId);
      const newAddedAddress = response.data;
      setAddresses([...addresses, newAddedAddress]);
      setSelectedAddress(newAddedAddress.id);
      setShowNewAddressForm(false);
      setNewAddress({
        addressline: '',
        city: '',
        state: '',
        country: '',
        pincode: ''
      });
      setSnackbarMessage('Address added successfully!');
      setSnackbarOpen(true);
    } catch (error) {
      setSnackbarMessage('Failed to add address!');
      setSnackbarOpen(true);
    }
  };

  const placeOrder = async () => {
    try {
      if (!timeSlot || !deliveryDate || !selectedAddress) {
        alert('Please fill all the required fields.');
        return;
      }

      const response = await axios.put(`/USERS/OrderPlace`, null, {
        params: {
          SLOTID: timeSlot,
          DELIVERYDATE: deliveryDate,
          ADDRESSID: selectedAddress
        }, withCredentials: true,
      });

      const orderId = response.data;
      // localStorage.setItem('orderId', parseInt(orderId));
      console.log('Order ID:', orderId);
      setSnackbarMessage('Order placed successfully!');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error placing order:', error.response?.data || error.message);
      setSnackbarMessage(`Failed to place the order. Error: ${error.message}`);
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => setSnackbarOpen(false);

  const handleDateChange = (event) => {
    setDeliveryDate(event.target.value);
    setSelectedSlot(null);
    setTimeSlot('');
  };

  const handleSlotSelect = (slotGroup) => {
    setSelectedSlot(slotGroup);
    setTimeSlot('');
  };

  const isSlotDisabled = (slot) => {
    if (!deliveryDate) return true;
    const now = new Date();
    const selectedDate = new Date(deliveryDate);
    const slotTime = new Date(selectedDate.toDateString() + ' ' + slot.starttime);
    return selectedDate.toDateString() === now.toDateString() && slotTime < now;
  };

  return (
    <Grid container spacing={2} padding='35px' direction={'row'}>
      <Grid item xs={12} md={1} flexWrap={'wrap'} sx={{ position: 'sticky', top: '30px' }} >
        <IconButton onClick={() => window.history.back()} sx={{
          fontSize: '6vh', borderRadius: '50%', boxShadow: 3, color: 'rgba(0, 0, 0, 0.7)',
          '&:hover': {
            cursor: 'pointer',
            color: 'rgba(0, 0, 0, 0.9)'
          }
        }}>
          <ArrowBackOutlined />
        </IconButton>
      </Grid>
      <Grid item xs={12} md={7}>
        <Box>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} onQuantityChange={handleQuantityChange} onRemove={() => handleRemoveItem(item.id)} />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} md={4} sx={{ position: 'sticky', top: '30px' }}>
        <Card sx={{ padding: 2 }}>
          <CardContent>
            <TextField
              label="Delivery date"
              type="date"
              fullWidth
              value={deliveryDate}
              onChange={handleDateChange}
              sx={{ marginBottom: 2 }}
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: new Date().toISOString().split('T')[0] }}
            />
            <Typography variant="h6" sx={{ marginBottom: 2 }}>Select a time slot</Typography>
            <Grid container spacing={2} sx={{ marginBottom: 2, }}>
              {groupedSlots.map((group, index) => (
                <Grid item xs={3} key={index}>
                  <Button
                    variant={selectedSlot === group ? "contained" : "outlined"}
                    onClick={() => handleSlotSelect(group)}
                    fullWidth
                    sx={{
                      height: '100%',  
                      backgroundColor: !deliveryDate || group.every(isSlotDisabled) ? 'inherit' : '#cdee77',
                      color: !deliveryDate || group.every(isSlotDisabled) ? 'inherit' : '#8abf2c',
                      '&:hover': {
                        backgroundColor: !deliveryDate || group.every(isSlotDisabled) ? 'inherit' : '#b4e639',
                      },
                    }}
                    disabled={!deliveryDate || group.every(isSlotDisabled)}
                  >
                    Slot {index + 1}
                  </Button>
                </Grid>
              ))}
            </Grid>
            {selectedSlot && (
              <FormControl fullWidth sx={{ marginTop: 2, marginBottom: 2 }}>
                <InputLabel>Pick a specific time</InputLabel>
                <Select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  label="Pick a specific time"
                >
                  {selectedSlot.map((slot) => (
                    <MenuItem key={slot.SLOTID} value={slot.slotid} disabled={isSlotDisabled(slot)}>
                      {slot.slotname} ({slot.starttime} - {slot.endtime})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="address-selection-content"
                id="address-selection-header"
              >
                <Typography>Select or Add Address</Typography>
                <Divider />
              </AccordionSummary>
              <AccordionDetails>
                {addresses.length > 0 ? (
                  <Select
                    value={selectedAddress || ''}
                    onChange={handleAddressChange}
                    fullWidth
                  >
                    {addresses.map((address) => (
                      <MenuItem key={address.Addressid} value={address.Addressid}>
                        {address.Address}
                      </MenuItem>
                    ))}
                  </Select>
                ) : (
                  <Typography>No saved addresses. Please add a new address.</Typography>
                )}
                {showNewAddressForm ? (
                  <Box mt={2} >
                    <TextField
                      label="Address Line"
                      name="addressline"
                      value={newAddress.addressline}
                      onChange={(e) => setNewAddress({ ...newAddress, addressline: e.target.value })}
                      fullWidth
                      sx={{ marginBottom: 2 }}
                    />
                    <TextField
                      label="City"
                      name="city"
                      value={newAddress.city}
                      onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                      fullWidth
                      sx={{ marginBottom: 2 }}
                    />
                    <TextField
                      label="State"
                      name="state"
                      value={newAddress.state}
                      onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                      fullWidth
                      sx={{ marginBottom: 2 }}
                    />
                    <TextField
                      label="Country"
                      name="country"
                      value={newAddress.country}
                      onChange={(e) => setNewAddress({ ...newAddress, country: e.target.value })}
                      fullWidth
                      sx={{ marginBottom: 2 }}
                    />
                    <TextField
                      label="Pincode"
                      name="pincode"
                      value={newAddress.pincode}
                      onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
                      fullWidth
                      sx={{ marginBottom: 2 }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                      <Button
                        onClick={() => setShowNewAddressForm(false)}
                        sx={{ marginRight: 1, backgroundColor: "#2f6b1a", '&:hover': { color: "#2f6b1a", backgroundColor: 'lightgrey' } }}
                      >
                        Cancel
                      </Button>
                      <Button onClick={handleAddNewAddress}
                        sx={{ '&:hover': { color: "white", backgroundColor: '#2f6b1a' } }}>
                        Add Address
                      </Button>
                    </div>
                  </Box>
                ) : (
                  <Button
                    onClick={() => setShowNewAddressForm(true)}
                    fullWidth

                    sx={{ marginTop: 2, backgroundColor: "#2f6b1a" }}
                  >
                    Add New Address
                  </Button>
                )}
              </AccordionDetails>
            </Accordion>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
              onClick={placeOrder}
              disabled={(!selectedAddress && !showNewAddressForm) || !timeSlot || !deliveryDate}
            >
              Proceed to Checkout
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </Grid>
  );
};

export default ViewCart;
