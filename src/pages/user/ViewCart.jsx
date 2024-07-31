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
import { Box, Grid, Card, CardContent, Typography, Button, RadioGroup, FormControlLabel, Radio, Select, MenuItem, TextField, FormControl, InputLabel, IconButton } from '@mui/material';
import axios from 'axios';
import CartItem from '../../components/CartItem';
import { ArrowBackOutlined, DeleteOutlined } from '@mui/icons-material';
import AddressSelection from './AddressSelection';

const ViewCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showAddressSelection, setShowAddressSelection] = useState(false);
  const [timeSlot, setTimeSlot] = useState('');
  const [timeSlots, setTimeSlots] = useState([]);
  const [deliveryDate, setDeliveryDate] = useState('');
  const userId = localStorage.getItem('userid');

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`/USERS/cartItems/${userId}`);
        const parsedItems = response.data.map((itemString) => {
          const [productName, quantity, price,] = itemString.split(',');
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

  // const handleTimeSlotChange = (e) => {
  //   setTimeSlot(e.target.value);
  // };
  const placeOrder = async (userId, slotId, deliveryDate, 
    // selectedAddress
  ) => {
    try {
      const response = await axios.put(`/USERS/OrderPlace/${userId}`, null, {
        params: {
          SLOTID: slotId,
          DELIVERYDATE: deliveryDate,
          // ADDRESSID: selectedAddress
        }
      });

      const orderId = response.data;
      localStorage.setItem('orderId', parseInt(orderId));
      console.log(' Order ID:', orderId);
      return orderId;
    } catch (error) {
      console.error('Error placing order:', error.response?.data || error.message);
      throw error;
    }
  };

  // const handleCheckout = async (addressData) => {
  //   try {
  //     if (!timeSlot || !deliveryDate) {
  //       alert('Please select a time slot and delivery date.');
  //       return;
  //     }

  //     let addressId;
  //     if (typeof addressData === 'object') {
  //       // This is a new address
  //       const addressWithUserId = await axios.put('/USERS/addAddress', {
  //         ...addressData,
  //         userId: userId
  //       });
  //       console.log('Sending address data:', addressWithUserId);
  //      const response = await axios.put('/USERS/addAddress', addressWithUserId);
  //     console.log('Address addition response:', response.data);
  //       addressId = response.data.id; // Assuming the backend returns the new address ID
  //     } else {
  //       // This is an existing address ID
  //       addressId = addressData;
  //     }
  //     const orderId = await placeOrder(userId, timeSlot, deliveryDate, addressId);

  //     console.log('Order placed successfully with ID:', orderId);
  //     alert('Order placed successfully!  ');

  //     // Optionally, redirect or update the UI as needed
  //     // For example: window.location.href = `/orderConfirmation/${orderId}`;
  //   } catch (error) {
  //     console.error('Error details:', error.response?.data);
  //     console.error('Error status:', error.response?.status);
  //     console.error('Error headers:', error.response?.headers);
  //     alert(`Failed to place the order. Error: ${error.message}`);
  //   }
  // };

  // const handleProceedToCheckout = () => {
  //   setShowAddressSelection(true);
  // };

  const handleCheckout = async () => {
    try {
        if (!timeSlot || !deliveryDate) {
            alert('Please select a time slot and delivery date.');
            return;
        }

        const orderId = await placeOrder(userId, timeSlot, deliveryDate);

        console.log('Order placed successfully with ID:', orderId);
        alert('Order placed successfully! Your order ID is ' + orderId);
        
        // Optionally, redirect or update the UI as needed
        // For example: window.location.href = `/orderConfirmation/${orderId}`;
    } catch (error) {
        console.error('There was an error placing the order!', error);
        alert('Failed to place the order. Please try again.');
    }
};

const handleRemoveItem = (itemId) => {
  // Logic to remove item from cart
  setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  // You may also want to make an API call to update the cart on the server
};

  return (
    <Grid container spacing={3} sx={{ padding: '40px', backgroundColor: '#f5f5f5' }}>
  <Grid item xs={12}>
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
  </Grid>
  <Grid item xs={12} md={8}>
    <Box sx={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
    

      {cartItems.map((item) => (
        <CartItem 
  key={item.id} 
  item={item} 
  onQuantityChange={handleQuantityChange}
  onRemove={() => handleRemoveItem(item.id)}
/>

      ))}
    </Box>
  </Grid>
  <Grid item xs={12} md={4}>
    <Card sx={{ borderRadius: '8px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <CardContent>
        <FormControl fullWidth sx={{ marginBottom: 3 }}>
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
          sx={{ marginBottom: 3 }}
          InputLabelProps={{ shrink: true }}
        />
        <Typography variant="h6" sx={{ marginTop: 3, fontWeight: 'bold' }}>Total</Typography>
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ 
            marginTop: 3, 
            height: '50px', 
            fontSize: '1.1rem',
            textTransform: 'none',
            boxShadow: '0px 4px 8px rgba(63, 81, 181, 0.3)',
            '&:hover': {
              boxShadow: '0px 6px 12px rgba(63, 81, 181, 0.4)',
            }
          }} 
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      </CardContent>
    </Card>
  </Grid>
</Grid>


//     <Grid container spacing={2} padding='35px' direction={'row'}>
//       <ArrowBackOutlined sx={{
//         fontSize: '7vh', borderRadius: '50%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', color: 'rgba(0, 0, 0, 0.7)',
//         '&:hover': {
//           cursor: 'pointer',
//           color: 'rgba(0, 0, 0, 0.9)'
//         }
//       }}

//         onClick={() => window.history.back()}
//       />
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
//             <FormControl fullWidth sx={{ marginBottom: 2 }}>
//               <InputLabel id="timeslot-select-label">Pick a time slot</InputLabel>
//               <Select
//                 labelId="timeslot-select-label"
//                 value={timeSlot}
//                 onChange={(e) => setTimeSlot(e.target.value)}
//                 label="Pick a time slot"
//               >
//                 {timeSlots.map((slot) => (
//                   <MenuItem key={slot.SLOTID} value={slot.slotid}>
//                     {slot.slotname} ({slot.starttime} - {slot.endtime})
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//             <TextField
//               label="Delivery date"
//               type="date"
//               fullWidth
//               value={deliveryDate}
//               onChange={(e) => setDeliveryDate(e.target.value)}
//               sx={{ marginBottom: 2 }}
//             />
//             <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }} onClick={handleProceedToCheckout}>
//               Proceed to Checkout
//             </Button>
//           </CardContent>
//         </Card>
//       </Grid>
//       {showAddressSelection && (
//         <Grid item xs={12}>
//           <Card>
//             <CardContent>
//               <AddressSelection
//                 userId={userId}
//                 onAddressSelected={(selectedAddress) => handleCheckout(selectedAddress)}
//                 onAddNewAddress={(newAddress) => handleCheckout(newAddress)}
//               />
//             </CardContent>
//           </Card>
//         </Grid>
//       )}
//     </Grid>
  );
};

export default ViewCart;

