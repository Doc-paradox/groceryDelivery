import React from 'react';
import Slider from 'react-slick';
import { Box, Paper, Typography, Button, Grid, IconButton } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

// Sample products
const products = [
  {
    name: "Strawberry - 100g,Pack of 12",
    pcs: 12,
    price: 210,
    image: "https://imgs.search.brave.com/MHunDGTIrTrx3Up8d9hJsnGaKZBk9YdfbuQ2uN6U_vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzA5LzI5Lzk5/LzM2MF9GXzEwOTI5/OTk0NF9IS3haTFRv/YlkydWhJaUUxeWdI/YTU5MVIwT3VNOGtZ/Ry5qcGc"
  },
  {
    name: "Pomogranate - 100g",
    pcs: 4,
    price: 205,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHnAtTW5wpmpjCVWBm5thMFLrbRb2BBL5aQA&s"
  },
  {
    name: "Califlowers - 200g",
    pcs: 1,
    price: 65,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsUnvzmNXdsB8SiKrSN8BT2s3xgjUIB6R8Y_1atiky-awguCWNZ4M4sNqDtP1xAcykV3Q&usqp=CAU"
  },
  {
    name: "AAchi Curry Masala - 100g",
    pcs: 1,
    price: 25,
    image: "https://m.media-amazon.com/images/I/71sq+uz2XKL.jpg"
  },
  {
    name: "Cherry - 150g",
    pcs: 15,
    price: 175,
    image: "https://www.fruitsinfo.com/fruit-facts/wp-content/uploads/2020/12/cherry.jpg"
  },
  {
    name: "Lays Gourment - 100g",
    pcs: 1,
    price: 30,
    image: "https://m.media-amazon.com/images/I/71TAP4FpUZL.jpg"
  },
  {
    name: "Kit Kat Birthday cake ",
    pcs: 1,
    price: 55,
    image: "https://www.sweetsandcandy.co.uk/media/catalog/product/cache/ad201e1f2783b5fe29e123a2105d273f/k/i/kit-kat-birthday-cake_1.jpg"
  },
];


const CustomArrow = ({ onClick, direction }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        zIndex: 1,
        cursor: 'pointer',
        color: 'black',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: direction === 'prev' ? 'translateY(-50%)' : 'translateY(-50%)',
        [direction === 'prev' ? 'left' : 'right']: '10px',
      }}
    >
      {direction === 'prev' ? <ArrowBackIos /> : <ArrowForwardIos />}
    </Box>
  );
};

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          bottom: '-30px',
          width: '100%',
          textAlign: 'center'
        }}
      >
        <ul style={{ margin: '0px', padding: '0px', display: 'inline-block' }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <Box sx={{ maxWidth: '90%', margin: '0 auto', padding: '2em 0', position: 'relative' }}>
      <Slider {...settings}>
        {products.map((product, i) => (
          <ProductItem key={i} product={product} />
        ))}
      </Slider>
    </Box>
  );
};

const ProductItem = ({ product }) => {
  return (
    <Paper sx={{ padding: '1em', position: 'relative', margin: '0 10px', textAlign: 'center', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s' }}>
      {/* Add a discount tag if needed */}
      {/* <DiscountTag>GET {product.discount}% OFF</DiscountTag> */}
      <Box
        component="img"
        src={product.image}
        alt={product.name}
        sx={{
          width: '100%',
          height: 'auto',
          maxHeight: '150px',
          objectFit: 'cover',
          borderRadius: '8px'
        }}
      />
      <Typography variant="subtitle1" sx={{ marginTop: '1em', fontWeight: 'bold', color: '#333' }}>{product.name}</Typography>
      <Typography variant="body2" sx={{ color: 'grey', marginBottom: '0.5em',textAlign:'left' }}>
        {product.pcs} pcs
      </Typography>
      <Grid container spacing={1} sx={{ justifyContent: 'start', marginBottom: '0.5em' }}>
        <Grid item>
          <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#007bff' }}>
            Rs {product.price}
          </Typography>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" sx={{ width: '100%', marginTop: '0.5em', borderRadius: '4px' }}>Add to Cart</Button>
    </Paper>
  );
};

export default ProductCarousel;