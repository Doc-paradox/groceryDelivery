// import React, { useEffect, useState } from 'react'
// import Navbar from '../../components/Navbar'
// import axios from 'axios';

// const AddProduct = () => {
//   const [products,setProduct] = useState([]);

//   useEffect(() =>{
//         axios.get('/getAllproduct')
//         .then(response => {
//           console.log(response.data);
//           setProduct(response.data);
//         })
//         .catch(error =>{
//           console.error("There was an error fetching the products!", error);
//         });
//       },[]);
//   return (
//    <>
//     <ul>
//         {products.map(product => (
//             <li key={product.id}>
//                 <h2>{product.productname}</h2>
//                 <p>Price: ${product.price}</p>
//             </li>
//         ))}
//     </ul>
//    </>
//   )
// }

// export default AddProduct

import React, { useState, useEffect } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AddProduct = () => {
  const { productid } = useParams(); // Assumes productId is passed as a route parameter
  const [productname, setProductname] = useState('');
  const [productdescription, setProductdescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [manufactutredate, setManufactutredate] = useState('');
  const [expirydate, setExpirydate] = useState('');
  const [vendorid, setVendorid] = useState(localStorage.getItem('userid'));

  // const [products, setProducts] = useState([]);

  // useEffect(() =>{
  //   axios.get('/getAllProduct')
  //   .then(response => {
  //     setProducts(response.data);
  //   })
  //   .catch(error =>{
  //     console.error("There was an error fetching the products!", error);
  //   });
  // },[]);

  useEffect(() => {
    if (productid) {
      // Fetch product details if productId is provided
      axios.get(`/getAllproduct/${productid}`)
        .then(response => {
          const product = response.data;
          setProductname(product.productname);
          setProductdescription(product.productdescription);
          setCategory(product.category);
          setPrice(product.price);
          setStock(product.stock);
          setManufactutredate(product.manufactutredate);
          setExpirydate(product.expirydate);
          setVendorid(product.vendorid);
        })

        .catch(error => {
          console.error('There was an error fetching the product details!', error);
        });
    }
  }, [productid]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const productData = {
      productname: productname,
      productdescription: productdescription,
      category: category,
      price: parseFloat(price),
      stock: parseInt(stock),
      manufactutredate: manufactutredate,
      expirydate: expirydate,
      vendorid: parseInt(vendorid)
    };


    try {

      if (productid) {
        await axios.put(`/updateProductDescPrice/${productid}`, productData);
        alert('Product updated successfully!');
      } else {
        await axios.post('/addProduct', productData);
        alert('Product added successfully!');
      }
      // Clear the form
      setProductname('');
      setProductdescription('');
      setCategory('');
      setPrice('');
      setStock('');
      setManufactutredate('');
      setExpirydate('');
    } catch (error) {
      console.error('There was an error adding/updating the product!', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>{productid ? 'Update Product' : 'Add New Product'}</Typography>
        {/* <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul> */}
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
            value={expirydate}
            onChange={(e) => setExpirydate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            {productid ? 'Update Product' : 'Add Product'}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AddProduct;