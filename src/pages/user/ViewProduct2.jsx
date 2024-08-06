

// ViewProducts2 component
import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box, FormControlLabel, Checkbox, Divider, IconButton, Button } from '@mui/material';
import { ArrowBackOutlined } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';

const ViewProducts2 = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const navigate = useNavigate();
  const location = useLocation();
  const { orderId } = location.state || {};

  console.log(orderId);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/getAllproduct');
        setProducts(response.data);
        const categorySet = new Set(response.data.map(product => product.category));
        setCategories([...categorySet]);
      } catch (error) {
        console.error('There was an error fetching the products!', error);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryChange = (event) => {
    const category = event.target.name;
    setSelectedCategories(prevSelectedCategories => {
      const newSelectedCategories = new Set(prevSelectedCategories);
      if (newSelectedCategories.has(category)) {
        newSelectedCategories.delete(category);
      } else {
        newSelectedCategories.add(category);
      }
      return newSelectedCategories;
    });
  };

  const filteredProducts = products.filter(product =>
    selectedCategories.size === 0 || selectedCategories.has(product.category)
  );

  const handleProceedToCart = () => {
    navigate('/user/cart2', { state: { orderId } });
  };

  return (
    <Grid container spacing={4} padding={4}>
      <Grid item xs={12} md={1}>
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          <IconButton
            onClick={() => window.history.back()}
            sx={{ fontSize: '6vh', borderRadius: '50%', boxShadow: 3 }}
          >
            <ArrowBackOutlined />
          </IconButton>
        </Box>
      </Grid>

      <Grid item xs={12} md={11}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Box padding={3} border={1} borderColor="grey.300" borderRadius="8px">
              <Typography variant="h6">Categories</Typography>
              <Divider sx={{ marginBottom: '15px' }} />
              <Grid container direction="column" spacing={1}>
                {categories.map((category) => (
                  <Grid item key={category}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name={category}
                          checked={selectedCategories.has(category)}
                          onChange={handleCategoryChange}
                        />
                      }
                      label={category}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} md={9}>
            <Box padding={4} border={1} borderColor="grey.300" borderRadius="8px" marginBottom={4}>
              <Typography variant="h4">Products</Typography>
              <Grid container spacing={4}>
                {filteredProducts.map((product) => (
                  <Grid itemxs={12} sm={6} md={4} xl={3} key={product.productid}>
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
              <Button
                onClick={handleProceedToCart}
                variant="contained"
                color="primary"
                sx={{ marginTop: '30px', marginBottom: '10px' }}
              >
                Proceed to Cart
              </Button>

            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ViewProducts2;
