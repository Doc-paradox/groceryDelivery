import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, Divider, Grid, IconButton, Snackbar, Typography, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { ArrowBackOutlined } from '@mui/icons-material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
  borderRadius: '10px',
  transition: 'all 0.3s ease-in-out',
  boxShadow: theme.shadows[3],
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));

const EditButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: 'white',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  }
}));

const EditForm = ({ product, onSave, onCancel }) => {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleChange = (e) => {
    setEditedProduct({ ...editedProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedProduct);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField name="productname" label="Product Name" type="text" value={editedProduct.productname} onChange={handleChange} fullWidth margin="normal" />
      <TextField name="productdescription" label="Product Description" type="text" value={editedProduct.productdescription} onChange={handleChange} fullWidth margin="normal" />
      <TextField name="price" label="Price" type="number" value={editedProduct.price} onChange={handleChange} fullWidth margin="normal" />
      <TextField name="stock" label="Stock" type="number" value={editedProduct.stock} onChange={handleChange} fullWidth margin="normal" />
      <TextField name="category" label="Category" value={editedProduct.category} onChange={handleChange} fullWidth margin="normal" />
      <TextField name="manufactutredate" label="Manufacture Date" type="date" value={editedProduct.manufactutredate} onChange={handleChange} fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
      <TextField name="expirydate" label="Expiry Date" type="date" value={editedProduct.expirydate} onChange={handleChange} fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
      <Box
        sx={{marginTop:'20px'}}
      >
      <Button type="submit" color="primary" variant="contained" style={{ marginRight: '10px',}}>Save</Button>
      <Button onClick={onCancel} color="secondary" variant="contained" style={{marginLeft: '10px',}}>Cancel</Button>
      </Box>
    </form>
  );
};

const VProductCard = () => {
  const [productlist, setProductlist] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  
  useEffect(() => {
    const fetchProductlist = async () => {
      try {
        const response = await axios.get(`/showProduct`, { withCredentials: true });
        setProductlist(response.data);
        console.log("Product list", response.data);
      } catch (error) {
        console.log("Error fetching product list", error);
      }
    };

    fetchProductlist();
  }, []);

  const handleUpdate = async (updatedProduct) => {
    try {
      await axios.put(`/updateProduct/${updatedProduct.productid}`, updatedProduct);
      setProductlist(productlist.map((product) =>
        product.productid === updatedProduct.productid ? updatedProduct : product
      ));
      setEditingProductId(null);
      setSnackbarMessage('Product updated successfully!');
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error updating product", error);
      setSnackbarMessage('Error updating product!');
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box padding="10px">
      <Grid container spacing={2}>
      <Grid item xs={12}>
          <Box display="flex" flexDirection={'row'} alignItems={'center'} justifyContent={'space-evenly'} mb={2}>
            <Typography variant="h4" >Your Products</Typography>
            <Button 
              component={Link}
              to="/vendor/product" // Adjust the path based on your routing setup
              variant="contained"
              color="primary"
              
            >
              Add Product
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={11}>
          {productlist.map((product) => (
            <StyledCard key={product.productid}>
              {editingProductId === product.productid ? (
                <EditForm product={product} onSave={handleUpdate} onCancel={() => setEditingProductId(null)} />
              ) : (
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Product #{product.productid}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="body1">Product Name: {product.productname}</Typography>
                  <Typography variant="body1">Product Description: {product.productdescription}</Typography>
                  <Typography variant="body1">Price: ${product.price}</Typography>
                  <Typography variant="body1">Stock: {product.stock}</Typography>
                  <Typography variant="body1">Category: {product.category}</Typography>
                  <Typography variant="body1">Manufacture Date: {product.manufactutredate}</Typography>
                  <Typography variant="body1">Expiry Date: {product.expirydate}</Typography>
                  <Box display="flex" justifyContent="flex-end">
                    <EditButton onClick={() => setEditingProductId(product.productid)} color='secondary' variant="contained">EDIT</EditButton>
                  </Box>
                </CardContent>
              )}
            </StyledCard>
          ))}
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

export default VProductCard;
