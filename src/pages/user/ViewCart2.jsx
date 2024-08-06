import React, { useEffect, useState } from 'react';
import {
  Box, Grid, Card, CardContent, Button, Snackbar, IconButton,
  Alert
} from '@mui/material';
import axios from 'axios';
import CartItem from '../../components/CartItem';
import { ArrowBackOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

const ViewCart2 = () => {
  const [cartItems, setCartItems] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { orderId } = location.state || {};
  // Replace with the actual order ID if available dynamically
  console.log(orderId);
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`/USERS/cartItems`, { withCredentials: true });
        const parsedItems = response.data.map((itemString) => {
          const [productName, quantity, price] = itemString.split(',');
          return {
            id: Math.random().toString(36).substr(2, 9),
            productName,
            quantity: parseInt(quantity, 10),
            price: parseFloat(price),
            image: 'path/to/image'
          };
        });
        setCartItems(parsedItems);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleQuantityChange = (id, newQuantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
    );
    setCartItems(updatedItems);
  };

  const handleRemoveItem = async (itemId, quantity) => {
    try {
      const productId = String(itemId).trim();
      await axios.delete(`/USERS/removeFromCart`, { params: { PRODUCTID: productId }, withCredentials: true });
      setCartItems(prevItems => prevItems
        .filter(item => item.id !== itemId || item.quantity > quantity)
        .map(item => item.id === itemId ? { ...item, quantity: item.quantity - quantity } : item)
      );
    } catch (error) {
      console.error('Error removing item:', error.response);
    }
  };

  const placeOrder = async () => {
    try {
      if (!orderId) {
        throw new Error("Order ID is missing");
      }
      console.log(orderId);
      await axios.put(`/USERS/modifyCart/${orderId}`, {}, { withCredentials: true });
      setSnackbarMessage('Order placed successfully!');
      setSnackbarOpen(true);
      // Redirect to the ViewOrder page after successful order placement
      navigate('/user/order');
    } catch (error) {
      console.error('Error placing order:', error.response?.data || error.message);
      setSnackbarMessage(`Failed to place the order. Error: ${error.message}`);
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => setSnackbarOpen(false);

  return (
    <Grid container spacing={2} padding='35px' direction={'row'}>
      <Grid item xs={12} md={1} flexWrap={'wrap'} sx={{ position: 'sticky', top: '30px' }}>
        <IconButton onClick={() => window.history.back()} sx={{
          fontSize: '6vh', borderRadius: '50%', boxShadow: 3, color: 'rgba(0, 0, 0, 0.7)',
          '&:hover': { cursor: 'pointer', color: 'rgba(0, 0, 0, 0.9)' }
        }}>
          <ArrowBackOutlined />
        </IconButton>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} onQuantityChange={handleQuantityChange} onRemove={() => handleRemoveItem(item.id, item.quantity)} />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card sx={{ padding: 2 }}>
          <CardContent>
            <Button variant="contained" onClick={placeOrder} sx={{ marginTop: 2 }}>Place Order</Button>
          </CardContent>
        </Card>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default ViewCart2;


