// // // import React from 'react'

// // // const ViewCart = () => {
// // //   return (
// // //     <div>ViewCart</div>
// // //   )
// // // }

// // // export default ViewCart

// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { Card, CardContent, Typography, Box, Button } from '@mui/material';

// // const ViewCart = () => {
// //   const [cartItems, setCartItems] = useState([]);
// //   const userId = localStorage.getItem('userid');

// //   useEffect(() => {
// //     const fetchCartItems = async () => {
// //       try {
// //         const response = await axios.get(`/USERS/cartItems/${userId}`);
// //         const parsedItems = response.data.map((itemString) => {
// //           const [productName, quantity, price] = itemString.split(',');
// //           return {
// //             productName,
// //             quantity: parseInt(quantity, 10),
// //             price: parseFloat(price)
// //           };
// //         });
// //         setCartItems(parsedItems);
// //         console.log(parsedItems);

// //       } catch (error) {
// //         console.error('Error fetching cart items', error);
// //       }
// //     };

// //     fetchCartItems();
// //   }, [userId]);

// //   return (
// //     <Box>
// //       {cartItems.map((item) => (
// //         <Card key={item.id} sx={{ marginBottom: 2 }}>
// //           <CardContent>
// //             <Typography variant="h6">{item.productName}</Typography>
// //             <Typography variant="body2">Quantity: {item.quantity}</Typography>
// //             <Typography variant="body2">Price: ${item.price}</Typography>
// //           </CardContent>
// //         </Card>
// //       ))}
// //     </Box>
// //   );
// // };

// // export default ViewCart;



// import React, { useEffect, useState } from 'react';
// import { Box, Grid, Card, CardContent, Typography, Button, RadioGroup, FormControlLabel, Radio, Input, InputLabel, TextField } from '@mui/material';
// import axios from 'axios';
// import CartItem from '../../components/CartItem';

// const ViewCart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [shipping, setShipping] = useState(30.00);
//   const [subtotal, setSubtotal] = useState(0.00);
//   const [timeSlot, setTimeSlot] = useState('');
//   const userId = localStorage.getItem('userid');

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await axios.get(`/USERS/cartItems/${userId}`);
//         const parsedItems = response.data.map((itemString) => {
//           const [productName, quantity, price] = itemString.split(',');
//           return {
//             id: Math.random().toString(36).substr(2, 9), // Generate a unique ID
//             productName,
//             quantity: parseInt(quantity, 10),
//             price: parseFloat(price),
//             image: 'path/to/image' // Replace with actual image path or URL
//           };
//         });
//         setCartItems(parsedItems);
//         calculateSubtotal(parsedItems);
//       } catch (error) {
//         console.error('There was an error fetching the cart items!', error);
//       }
//     };

//     fetchCartItems();
//   }, [userId]);

//   const calculateSubtotal = (items) => {
//     const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     setSubtotal(total);
//   };

//   const handleQuantityChange = (id, newQuantity) => {
//     const updatedItems = cartItems.map((item) =>
//       item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
//     );
//     setCartItems(updatedItems);
//     calculateSubtotal(updatedItems);
//   };

//   return (
//     <Grid container spacing={2} padding= '35px'>
//       <Grid item xs={12} md={8}>
//         <Box>
//           {cartItems.map((item) => (
//             <CartItem key={item.id} item={item} onQuantityChange={handleQuantityChange} />
//           ))}
//         </Box>
//       </Grid>
//       <Grid item xs={12} md={4}>
//         <Card>
//           <CardContent>
//             <TextField placeholder='Pick a time slot' fullWidth
//             >TimeSlot</TextField>
//             <TextField placeholder='Delivery date' type='date' fullWidth
//             >TimeSlot</TextField>
//             <Typography variant="h6" sx={{ marginTop: 2 }}>Subtotal</Typography>
//             <Typography variant="body2">${subtotal.toFixed(2)}</Typography>
//             <Typography variant="h6" sx={{ marginTop: 2 }}>Shipping</Typography>
//             <RadioGroup value={shipping} onChange={(e) => setShipping(parseFloat(e.target.value))}>
//               <FormControlLabel value={30.00} control={<Radio />} label="Flat rate: $30.00" />
//               <FormControlLabel value={0.00} control={<Radio />} label="Free shipping" />
//               <FormControlLabel value={10.00} control={<Radio />} label="Local pickup: $10.00" />
//             </RadioGroup>
//             <Typography variant="h6" sx={{ marginTop: 2 }}>Total</Typography>
//             <Typography variant="h4">${(subtotal + shipping).toFixed(2)}</Typography>
//             <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }} onClick={handleQuantityChange}>Checkout</Button>
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// };

// export default ViewCart;


import React, { useEffect, useState } from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, RadioGroup, FormControlLabel, Radio, Select, MenuItem, TextField, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';
import CartItem from '../../components/CartItem';

const ViewCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [shipping, setShipping] = useState(30.00);
  // const [subtotal, setSubtotal] = useState(0.00);
  const [timeSlot, setTimeSlot] = useState('');
  const [timeSlots, setTimeSlots] = useState([]);
  const [deliveryDate, setDeliveryDate] = useState('');
  const userId = localStorage.getItem('userid');

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`/USERS/cartItems/${userId}`);
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
        // calculateSubtotal(parsedItems);
      } catch (error) {
        console.error('There was an error fetching the cart items!', error);
      }
    };

    const fetchTimeSlots = async () => {
      try {
        const response = await axios.get('/USERS/getSlot');
        setTimeSlots(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error('There was an error fetching the timeslots!', error);
      }
    };

    fetchCartItems();
    fetchTimeSlots();
  }, [userId]);

  // const calculateSubtotal = (items) => {
  //   const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  //   setSubtotal(total);
  // };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
    );
    setCartItems(updatedItems);
    // calculateSubtotal(updatedItems);
  };

  const handleCheckout = async () => {
    try {
      const slotid = timeSlot;
      // const formattedDate = deliveryDate.toISOString().split('T')[0];

      //   let formattedDate;
      // if (deliveryDate instanceof Date) {
      //   formattedDate = deliveryDate.toISOString().split('T')[0];
      // } else if (typeof deliveryDate === 'string') {
      //   // If it's already a string, check if it's in the correct format
      //   const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      //   if (dateRegex.test(deliveryDate)) {
      //     formattedDate = deliveryDate;
      //   } else {
      //     // If it's not in the correct format, try to parse it
      //     const parsedDate = new Date(deliveryDate);
      //     formattedDate = parsedDate.toISOString().split('T')[0];
      //     console.log(formattedDate);
      //   }
      // } else {
      //   console.log('Invalid date format');
      // }


      const response = await axios.put(`/USERS/OrderPlace/${userId}`, null, {
        params: {
          SLOTID: slotid,
          DELIVERYDATE: deliveryDate,
        },
      });
      console.log(response);
      alert('Order placed successfully!');
    } catch (error) {
      console.error('There was an error placing the order!', error);
    }
  };

  return (
    <Grid container spacing={2} padding='35px'>
      <Grid item xs={12} md={8}>
        <Box>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} onQuantityChange={handleQuantityChange} />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <InputLabel id="timeslot-select-label">Pick a time slot</InputLabel>
              <Select
                labelId="timeslot-select-label"
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                label="Pick a time slot"
              >
                {timeSlots.map((slot) => (
                  <MenuItem key={slot.SLOTID} value={slot.slotid}>
                    {slot.slotname} ({slot.starttime} - {slot.endtime})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Delivery date"
              type="date"
              fullWidth
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <Typography variant="h6" sx={{ marginTop: 2 }}>Subtotal</Typography>
            {/* <Typography variant="body2">${subtotal.toFixed(2)}</Typography> */}
            <Typography variant="h6" sx={{ marginTop: 2 }}>Shipping</Typography>
            <RadioGroup value={shipping} onChange={(e) => setShipping(parseFloat(e.target.value))}>
              <FormControlLabel value={30.00} control={<Radio />} label="Flat rate: $30.00" />
              <FormControlLabel value={0.00} control={<Radio />} label="Free shipping" />
              <FormControlLabel value={10.00} control={<Radio />} label="Local pickup: $10.00" />
            </RadioGroup>
            <Typography variant="h6" sx={{ marginTop: 2 }}>Total</Typography>
            {/* <Typography variant="h4">${(subtotal + shipping).toFixed(2)}</Typography> */}
            <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }} onClick={handleCheckout}>Checkout</Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ViewCart;

