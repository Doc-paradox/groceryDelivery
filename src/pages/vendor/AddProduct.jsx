// import React from 'react'
// import Navbar from '../../components/Navbar'

// const AddProduct = () => {
//   return (
//    <>
//     <Navbar/>
//    </>
//   )
// }

// export default AddProduct
import React, { useState, useEffect } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AddProduct = () => {
  const { productId } = useParams(); // Assumes productId is passed as a route parameter
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [manufactureDate, setManufactureDate] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  useEffect(() => {
    if (productId) {
      // Fetch product details if productId is provided
      axios.get(`/getProduct/${productId}`)
        .then(response => {
          const product = response.data;
          setProductName(product.PRODUCTNAME);
          setProductDescription(product.PRODUCTDESCRIPTION);
          setPrice(product.PRICE);
          setStock(product.STOCK);
          setManufactureDate(product.M_DATE);
          setExpiryDate(product.EXP_DATE);
        })
        .catch(error => {
          console.error('There was an error fetching the product details!', error);
        });
    }
  }, [productId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const productData = {
      PRODUCTNAME: productName,
      PRODUCTDESCRIPTION: productDescription,
      PRICE: parseFloat(price),
      STOCK: parseInt(stock),
      M_DATE: manufactureDate,
      EXP_DATE: expiryDate
    };

    try {
      if (productId) {
        await axios.put(`/updateProductDescPrice/${productId}`, productData);
        alert('Product updated successfully!');
      } else {
        await axios.post('/addProduct', productData);
        alert('Product added successfully!');
      }
      // Clear the form
      setProductName('');
      setProductDescription('');
      setPrice('');
      setStock('');
      setManufactureDate('');
      setExpiryDate('');
    } catch (error) {
      console.error('There was an error adding/updating the product!', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>{productId ? 'Update Product' : 'Add New Product'}</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Product Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <TextField
            label="Product Description"
            variant="outlined"
            fullWidth
            margin="normal"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
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
            value={manufactureDate}
            onChange={(e) => setManufactureDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Expiry Date"
            variant="outlined"
            fullWidth
            margin="normal"
            type="date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            {productId ? 'Update Product' : 'Add Product'}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AddProduct;
