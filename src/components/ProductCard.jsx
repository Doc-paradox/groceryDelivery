import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import { imageMapping } from '../imageMapping';
import axios from 'axios';


const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 280,
  height: '50vh',
  margin: theme.spacing(2),
  borderRadius: '10px',
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
  marginBottom: theme.spacing(1),
}));

const CategoryDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  fontSize: '0.9rem',
}));

const ProductCard = ({ productid, title, description, price, stock }) => {

  const handleAddToCart = async () => {
    try {
      const userid = localStorage.getItem('userid'); // Get the logged-in user's ID
      // const productid = productid;

      const response = await axios.post(`/USERS/addToCart/${userid}`, null, {
        params: {
          // USERID: userid,
          PRODUCTID: productid, // Replace with actual product ID
          QUANTITY: 1, // Set quantity as needed
        },

      });
      console.log(response.data);
      alert('Product added to cart');
    } catch (error) {
      console.error('Error adding product to cart', error);
    }
  };

  const imageUrl = imageMapping[title];

  return (

    <StyledCard>
      <CategoryImage
        component="img"
        image={imageUrl}
        alt={title}
      />
      <CategoryContent>
        <CategoryTitle variant="h6" component="h3">
          {title}
        </CategoryTitle>
        <CategoryDescription variant="body2" gutterBottom >
          <Typography>{description}</Typography>
          <Typography>Price:{price}</Typography>
          <Typography>Available:{stock}</Typography>
        </CategoryDescription>
        <AddToCart onClick={handleAddToCart}>Add Cart</AddToCart>
      </CategoryContent>
    </StyledCard>
  );
};

export default ProductCard;

// const ProductCard = ({endpoint}) =>{
//   const[categories,setCategories] = useState([]);

//     useEffect(() =>{
//         const fetchCategories = async () =>{
//             try{
//                 const response = await axios.get(endpoint);
//                 setCategories(response.data);
//             }catch(error){
//                 console.error("error fetching categories :", error);
//             }
//         };
//         fetchCategories();
//     },[]);
//   return(
//     <StyledCard>
//       <CategoryImage
//         component="img"
//         image={"https://imgs.search.brave.com/0zXDrdUAQKYIdY9y386CGTi2oq9bbKq3b-nPCL1U43E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/NC8xMy8wNy8xOC9i/bHVlYmVycmllcy0x/MzI2MTU0XzY0MC5q/cGc"}
//         alt={title}
//       />
//       <CategoryContent>
//         <CategoryTitle variant='h6' component='h3'>
//           {title}
//         </CategoryTitle>
//         <CategoryDescription variant='body2'>
//           {title}
//         </CategoryDescription>
//       </CategoryContent>
//     </StyledCard>
//   )
// };

// export default ProductCard;
