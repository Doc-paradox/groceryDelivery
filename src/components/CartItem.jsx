import React from 'react';
import { Box, Card, CardContent, Typography, IconButton, Grid } from '@mui/material';
import { Add, Close, DeleteOutlined, Remove } from '@mui/icons-material';

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column',flexBasis: '100%',flexWrap: 'wrap',
      alignItems: 'center', marginBottom: 2, padding: 2, width: '100%', boxShadow: 3 }}>
      <Grid container spacing={2} alignItems="center" >
        <Grid item xs={12} sm={2} md={2} >
          <IconButton 
            onClick={() =>onRemove(item.id, item.quantity)} 
            aria-label="remove item"
            sx={{ color: 'error.main' }}
          >
            <Close />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={2} md={2} >
          <Box component="img" sx={{ height: 80, width: 80 }} src={item.image} alt={item.productName} />
        </Grid>
        <Grid item xs={12} sm={4} md={4}  >
          <CardContent>
            <Typography variant="h6">{item.productName}</Typography>
            <Typography variant="body1">${item.price.toFixed(2)}</Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Box sx={{ display: 'flex', alignItems: 'center',gap:'15px', width: '50%', padding: 1 }}>
            <IconButton onClick={() => onQuantityChange(item.id, item.quantity - 1)}>
              <Remove sx={{backgroundColor:'red',borderRadius:'50%',color:'white'}} />
            </IconButton>
            <Typography variant="h5">{item.quantity}</Typography>
            <IconButton onClick={() => onQuantityChange(item.id, item.quantity + 1)}>
              <Add sx={{backgroundColor:'green',borderRadius:'50%',color:'white'}} />
            </IconButton>
            <Typography variant="h5" sx={{ marginLeft: 2 }}>
              ${(item.price * item.quantity).toFixed(2)}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CartItem;
