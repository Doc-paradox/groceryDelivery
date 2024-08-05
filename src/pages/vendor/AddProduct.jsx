
import React, { useState } from 'react';
import { Box, Button, Container, Grid, IconButton, TextField, Typography, Snackbar } from '@mui/material';
import axios from 'axios';
import { ArrowBackOutlined } from '@mui/icons-material';

const AddProduct = () => {
  const [productname, setProductname] = useState('');
  const [productdescription, setProductdescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [manufactutredate, setManufactutredate] = useState('');
  const [expirydate, setExpirydate] = useState('');
  const [vendorid, setVendorid] = useState(localStorage.getItem('userid'));

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const productData = {
      productname,
      productdescription,
      category,
      price: parseFloat(price),
      stock: parseInt(stock),
      manufactutredate,
      expirydate,
      vendorid: parseInt(vendorid)
    };

    try {
      await axios.post('/addProduct', productData, { withCredentials: true });
      setSnackbarMessage('Product added successfully!');
      setSnackbarOpen(true);
      // Clear the form
      setProductname('');
      setProductdescription('');
      setCategory('');
      setPrice('');
      setStock('');
      setManufactutredate('');
      setExpirydate('');
    } catch (error) {
      setSnackbarMessage('Error adding product!');
      setSnackbarOpen(true);
      console.error('There was an error adding the product!', error);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box padding='20px' >
    <Grid container>
      <Grid item xs={12} md={1} flexWrap={'wrap'} sx={{ position: 'sticky', top: '30px' }}>
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
      <Grid container justifyContent="center"  height="100vh">
        <Grid item xs={12} sm={8} md={6}>
          <Box p={3} border={1} borderRadius={2} borderColor="grey.300" bgcolor="background.paper">
            <Typography variant="h4" gutterBottom>
              Add New Product
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Product Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={productname}
                onChange={(e) => setProductname(e.target.value)}
              />
              <TextField
                label="Product Description"
                variant="outlined"
                fullWidth
                margin="normal"
                value={productdescription}
                onChange={(e) => setProductdescription(e.target.value)}
              />
              <TextField
                label="Category"
                variant="outlined"
                fullWidth
                margin="normal"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <TextField
                label="Price"
                variant="outlined"
                fullWidth
                margin="normal"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <TextField
                label="Stock"
                variant="outlined"
                fullWidth
                margin="normal"
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
              <TextField
                label="Manufacture Date"
                variant="outlined"
                fullWidth
                margin="normal"
                type="date"
                value={manufactutredate}
                onChange={(e) => setManufactutredate(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="Expiry Date"
                variant="outlined"
                fullWidth
                margin="normal"
                type="date"
                value={expirydate}
                onChange={(e) => setExpirydate(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Add Product
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Grid>
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={snackbarOpen}
      autoHideDuration={6000}
      onClose={handleSnackbarClose}
      message={snackbarMessage}
      action={
        <Button color="inherit" onClick={handleSnackbarClose}>
          Close
        </Button>
      }
    />
  </Box>
  );
};

export default AddProduct;
