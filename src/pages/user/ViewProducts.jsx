// import { Grid } from '@mui/material';
// import React, { useEffect, useState } from 'react'
// import ProductCard from '../../components/ProductCard';
// import axios from 'axios';

// const ViewProducts = () => {

//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fecthProducts = async () => {
//       try {
//         const response = await axios.get('/getAllproduct');
//         setProducts(response.data);
//         console.log(response.data)
//       }
//       catch (error) {
//         console.error("There was an error fetching the products!", error);
//       }
//     };
//     fecthProducts();
//   }, []);
//   return (
//     <Grid container spacing={3} justifyContent="center">
//       {products.map((product) => (
//         <Grid item key={product.productid}>
//           <ProductCard
//             productid={product.productid}
//             title={product.productname}
//             description={product.productdescription}
//             category={product.category}
//             price={product.price}
//             stock={product.stock}
//           />
//         </Grid>
//       ))}
//     </Grid>
//   )
// }

// export default ViewProducts


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Typography, Box, FormControlLabel, Checkbox, Divider, IconButton } from '@mui/material';
import ProductCard from '../../components/ProductCard';
import { ArrowBackOutlined } from '@mui/icons-material';

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(new Set());

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/getAllproduct');
                setProducts(response.data);
                console.log(response.data)

        // Extract categories from products
        const categorySet = new Set(response.data.map(product => product.category));
        setCategories([...categorySet]);
        console.log(response.data);
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

  return (
    <Grid container spacing={3} padding={3}>
    {/* Back Arrow */}
    <Grid item xs={12} md={1} sx={{ position: 'sticky', top: '0px', }}>
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <IconButton
          onClick={() => window.history.back()}
          sx={{
            fontSize: '6vh',
            borderRadius: '50%',
            boxShadow: 3,
            color: 'rgba(0, 0, 0, 0.7)',
            '&:hover': {
              cursor: 'pointer',
              color: 'rgba(0, 0, 0, 0.9)',
            },
          }}
        >
          <ArrowBackOutlined />
        </IconButton>
      </Box>
    </Grid>

    {/* Category and Product Grid Container */}
    <Grid item xs={12} md={11}>
      <Grid container spacing={3}>
        {/* Category Box */}
        <Grid item xs={12} md={3}>
          <Box
            padding={3}
            border={1}
            borderColor="grey.300"
            borderRadius="8px"
            height="50%"
          >
            <Typography variant="h6" gutterBottom>
              Categories
            </Typography>
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

        {/* Product Box */}
        <Grid item xs={12} md={9}>
          <Box
            padding={3}
            border={1}
            borderColor="grey.300"
            borderRadius="8px"
            height="100%"
          >
            <Typography variant="h4" gutterBottom>
              Products
            </Typography>
            <Grid container spacing={3} alignItems="stretch">
              {filteredProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.productid}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                  >
                    <ProductCard
                      productid={product.productid}
                      title={product.productname}
                      description={product.productdescription}
                      category={product.category}
                      price={product.price}
                      stock={product.stock}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
  );
};

export default ViewProducts;
