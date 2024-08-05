import React from 'react';
import { Grid, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const CategoryCard = styled(Card)({
  width: '12vw', // Adjust the width to fit three cards
  margin: '0 8px',
  borderRadius: 16,
  boxShadow: 'none',
});

const categories = [
  { name: 'Vegetables', image: 'https://imgs.search.brave.com/hCEvX0scOE36GiD7jvZ0GiHG8enNqwPoSk-YPZ4a130/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzIzLzAxLzc3/LzM2MF9GXzIyMzAx/NzcyMV9IN3FPNzcw/NTVSM2liRUE5Zm90/RW1oY2xjWE05YlhI/ai5qcGc', color: '#FFE4E1' },
  { name: 'Fresh Fruit', image: 'https://imgs.search.brave.com/2ctCGTiBYy1j8PitXRTS3Q5zk0ffypjIQ0bsTyJSmqA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NjQzMzY0L3Bob3Rv/L3R1bWJsZS1vZi1z/dHJhd2JlcnJpZXMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXZWZHNUQl83X3ZL/bDBJNEhNTjBqcWI3/OTI5cjJPbmxMVkFz/NU5hNEozQjQ9', color: '#E0FFFF' },
  { name: 'Meat', image: 'https://imgs.search.brave.com/L3j-z8p4wmesuRNaiAaj3UuynwvjVSEIlrBMPS4HSMU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTYy/MzA1ODY5L3Bob3Rv/L3BvcmstY2hvcC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/NkhEbE1NV2UtR3pO/LVJicnVhXzFWT0d3/elRyMGVhVmxJRk5q/dWFKd21kYz0', color: '#E6E6FA' },
  { name: 'Seafood', image: 'https://imgs.search.brave.com/eZQQr2IqwqfvUnb9aa045ZkBI6WxkA4qamrXLVLG9sI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE0/Njc0ODg5L3Bob3Rv/L2Fzc29ydG1lbnQt/b2YtcmF3LWZpc2gu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUZOWko4WUxFS1Uw/aFZfd0UyRWowNk9J/T3Z6b2lrM1ZoZ2ty/UTI4MlVBQUE9', color: '#E0FFFF' },
  { name: 'Eggs', image: 'https://imgs.search.brave.com/s03iyrt88dmLyC86CP5d0OTSq7AVkS3VdbYHNoAI_WY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTEy/NjE2MjIvcGhvdG8v/ZWdncy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NlRpeGY1/M1ZtVXFzalZNU1F6/OHFfZDBvQnI3MlNa/X2RTR05sY0pMcnkt/Zz0', color: '#F0FFF0' },
  { name: 'Baking', image: 'https://imgs.search.brave.com/Mo3DfBg93tWp_65bmLBv5mtU-JZZz24ln7pcATowqtU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/NDc5MDM1Ny9waG90/by9iYWtpbmctaW5n/cmVkaWVudHMtZmxv/dXItZWdnLWFuZC1t/aWxrLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1SRTBoeld0/V3BBdEg3aEFvc3VI/NXpRV18wRXRGdmpO/N2x0X3hpaG56Nk1z/PQ', color: '#FAFAD2' },
  // { name: 'Beverages', image: 'https://imgs.search.brave.com/p2ZLjG7XqrYzv6YkJiWaAmq1uN5iadk5D7lStkNrdOc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzA3LzkzLzI1/LzM2MF9GXzEwNzkz/MjUxN19iUlREdDVQ/Q1A0bU94bG5zaWZ6/UjZrWHhrUjN4aThR/QS5qcGc', color: '#FFE4B5' },
  // { name: 'Dairy', image: 'https://imgs.search.brave.com/QEGz3C5kK-UqkRUKRLsARjlxhvBeCyw3Cg9RidkgWxM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODU2/NTI3MTgvcGhvdG8v/YXNzb3J0bWVudC1v/Zi1mcmVzaC1kYWly/eS1wcm9kdWN0cy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/NV81bGFYeVd2SFJm/MWhjS1VkYWdzUXc3/U0FveHRsTFBjekNX/R3ZGdm15ND0', color: '#F0FFF0' },
];

const FeaturedCategories = () => {
  const navigate = useNavigate();

  const handleNavigate= () =>{
    navigate('/user/products');
  }

  return (
    <Grid 
      container 
      direction="column" 
      padding="20px"
      sx={{
        backgroundColor: '#ffffff',
        borderRadius: 5,
        width: '100%',
      }}
    >
      <Typography variant="h4" textAlign="center" sx={{ mb: 4, color: 'black', fontWeight: 'bold' }}>
        Featured Categories
      </Typography>
      <Box
        sx={{ 
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'center',
        }}
      >
        {categories.map((category) => (
          <CategoryCard key={category.name} sx={{ backgroundColor: category.color }} onClick={() => handleNavigate()}>
            <CardMedia
              component="img"
              height="120"
              image={category.image}
              alt={category.name}
            />
            <CardContent>
              <Typography variant="h6" component="div" textAlign="center">
                {category.name}
              </Typography>
            </CardContent>
          </CategoryCard>
        ))}
      </Box>
    </Grid>
  );
};

export default FeaturedCategories;
