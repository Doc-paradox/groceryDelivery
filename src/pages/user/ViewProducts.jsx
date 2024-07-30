import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard';
import axios from 'axios';

const ViewProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fecthProducts = async () => {
      try {
        const response = await axios.get('/getAllproduct');
        setProducts(response.data);
        // console.log(response.data)
      }
      catch (error) {
        console.error("There was an error fetching the products!", error);
      }
    };
    fecthProducts();
  }, []);
  return (
    <Grid container spacing={3} justifyContent="center">
      {products.map((product) => (
        <Grid item key={product.productid}>
          <ProductCard
            productid={product.productid}
            title={product.productname}
            description={product.productdescription}
            category={product.category}
            price={product.price}
            stock={product.stock}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default ViewProducts