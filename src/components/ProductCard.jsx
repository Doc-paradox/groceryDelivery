import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Grid, IconButton, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/system';
import { imageMapping } from '../imageMapping';
import axios from 'axios';
import { ShoppingCartOutlined } from '@mui/icons-material';


const StyledCard = styled(Card)(({ theme }) => ({
  width: '20vw',
  height: '65vh',
  margin: theme.spacing(2),
  borderRadius: 15,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));
const AddToCart = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: 'white',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  }
}))
const CategoryImage = styled(CardMedia)(({ theme }) => ({
  height: 180,
  objectFit: 'cover',
  display: 'block'
}));

const CategoryContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
}));

const CategoryTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textAlign:'start',
  marginBottom: theme.spacing(1),
}));

const CategoryDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'start',
  marginBottom: theme.spacing(2),
  fontSize: '0.9rem',
}));

const ProductCard = ({ productid, title, description, category, price, stock }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleAddToCart = async () => {
    try {
      const response = await axios.post(`/USERS/addToCart`, null, {
        params: {
          PRODUCTID: productid, // Use the prop productid directly
          QUANTITY: 1, // Set quantity as needed
        },
        withCredentials: true,
      });
      console.log(response.data);
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Error adding product to cart', error);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  // const imageUrl = imageMapping[title];
  const imageUrl = imageMapping.categories[category]?.[title.toLowerCase()];

  console.log('Category:', category);
  console.log('Title:', title);
  console.log('Image URL:', imageUrl);

  return (
    <>

    <StyledCard display={'flex'} flexWrap={'wrap'} flexBiasis={'100%'}  flexGrow={1} >
    <Grid>
      <CategoryImage
        component="img"
        image={imageUrl}
        alt={title}
      />
      
    </Grid>
    <Grid sx={{marginTop:'50px'}}>

      <CategoryContent>
        <CategoryTitle variant="h6" component="h3" >
          {title}
        </CategoryTitle>
        <CategoryDescription variant="body2" gutterBottom>
          <Typography> {description}</Typography>
          <Typography>{category}</Typography>
        </CategoryDescription>
        <Box display={'flex'} flexDirection={'row'} gap={8} alignItems={'start'} >

          <Typography paddingTop={'10px'}>Price: {price}</Typography>
          {/* <Typography>Available: {stock}</Typography> */}
        {/* <AddToCart onClick={handleAddToCart}>Add to Cart</AddToCart> */}
        <IconButton
          sx={{
              
              backgroundColor: '#2f6b1a',
              borderRadius: '50%',
             
              color:'white',
              '&:hover': {
                backgroundColor:'#b4e639',
              }
            }}
        >

           <ShoppingCartOutlined onClick={handleAddToCart}/>
           </IconButton>
        </Box>
      </CategoryContent>
    </Grid>
    </StyledCard>

    <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Product added to cart successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductCard;



