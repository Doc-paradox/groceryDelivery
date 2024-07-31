import React from 'react';
import { Box, Card, CardContent, Typography, IconButton, Grid } from '@mui/material';
import { Add, DeleteOutlined, Remove } from '@mui/icons-material';

const CartItem = ({ item, onQuantityChange,onRemove }) => {
  
  return (
    <Card sx={{ display: 'flex',flexDirection: 'column', alignItems: 'center', marginBottom: 2, width: '55%' }}>
    <Grid container direction={'row'}>
    <IconButton 
  onClick={onRemove} 
  aria-label="remove item"
  sx={{ color: 'black' }}
>
  <DeleteOutlined />
</IconButton>
      <Box component="img" sx={{ height: 80, width: 80, margin: 2 }} src={item.image} alt={item.productName} />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', width:'10vh'}}>
        <Typography variant="h6">{item.productName}</Typography>
        <Typography variant="body2">${item.price.toFixed(2)}</Typography>
      </CardContent>
    </Grid>
    <Grid direction={'column'}>
      <Box sx={{
        display: 'flex', alignItems: 'center', marginRight: 2, borderRadius: '20px', border: '1px solid rbga(0, 0, 0, 0)',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)'
      }}>
        <IconButton onClick={() => onQuantityChange(item.id, item.quantity - 1)}><Remove /></IconButton>
        <Typography variant="body2">{item.quantity}</Typography>
        <IconButton onClick={() => onQuantityChange(item.id, item.quantity + 1)}><Add /></IconButton>
      </Box>
      <Typography variant="body2" sx={{ width: 80, textAlign: 'right' }}>${(item.price * item.quantity).toFixed(2)}</Typography>
    </Grid>
    </Card>
  );
};

export default CartItem;
