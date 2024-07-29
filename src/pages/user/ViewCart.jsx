// import React from 'react'

// const ViewCart = () => {
//   return (
//     <div>ViewCart</div>
//   )
// }

// export default ViewCart

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';

const ViewCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const userId = localStorage.getItem('userid');

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`/USERS/cartItems/${userId}`);
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items', error);
      }
    };

    fetchCartItems();
  }, [userId]);

  return (
    <Box>
      {cartItems.map((item) => (
        <Card key={item.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">{item.productname}</Typography>
            <Typography variant="body2">Quantity: {item.quantity}</Typography>
            <Typography variant="body2">Price: ${item.price}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ViewCart;
