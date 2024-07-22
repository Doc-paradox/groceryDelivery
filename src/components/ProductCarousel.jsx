// // ProductCarousel.js
// import React from 'react';
// import Carousel from 'react-material-ui-carousel';
// import { Paper, Button, Box, Typography } from '@mui/material';

// const products = [
//     {
//         name: "Product 1",
//         description: "Description of Product 1",
//         price: "$10",
//         image: "https://imgs.search.brave.com/MHunDGTIrTrx3Up8d9hJsnGaKZBk9YdfbuQ2uN6U_vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzA5LzI5Lzk5/LzM2MF9GXzEwOTI5/OTk0NF9IS3haTFRv/YlkydWhJaUUxeWdI/YTU5MVIwT3VNOGtZ/Ry5qcGc"
//     },
//     {
//         name: "Product 2",
//         description: "Description of Product 2",
//         price: "$20",
//         image: "https://imgs.search.brave.com/MHunDGTIrTrx3Up8d9hJsnGaKZBk9YdfbuQ2uN6U_vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzA5LzI5Lzk5/LzM2MF9GXzEwOTI5/OTk0NF9IS3haTFRv/YlkydWhJaUUxeWdI/YTU5MVIwT3VNOGtZ/Ry5qcGc"
//     },
//     {
//         name: "Product 3",
//         description: "Description of Product 3",
//         price: "$30",
//         image: "https://imgs.search.brave.com/MHunDGTIrTrx3Up8d9hJsnGaKZBk9YdfbuQ2uN6U_vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzA5LzI5Lzk5/LzM2MF9GXzEwOTI5/OTk0NF9IS3haTFRv/YlkydWhJaUUxeWdI/YTU5MVIwT3VNOGtZ/Ry5qcGc"
//     },
//     {
//         name: "Product 4",
//         description: "Description of Product 4",
//         price: "$40",
//         image: "https://imgs.search.brave.com/MHunDGTIrTrx3Up8d9hJsnGaKZBk9YdfbuQ2uN6U_vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzA5LzI5Lzk5/LzM2MF9GXzEwOTI5/OTk0NF9IS3haTFRv/YlkydWhJaUUxeWdI/YTU5MVIwT3VNOGtZ/Ry5qcGc"
//     }
// ];

// const ProductCarousel = () => {
//     return (
//         <Carousel>
//             {products.map((product, i) => (
//                 <ProductItem key={i} product={product} />
//             ))}
//         </Carousel>
//     );
// }

// const ProductItem = ({ product }) => {
//     return (
//         <Paper>
//             <Box sx={{ textAlign: 'center', padding: '20px' }}>
//             <Box
//                     component="img"
//                     src={product.image}
//                     alt={product.name}
//                     sx={{
//                         width: '150px',
//                         height: '150px',
//                         objectFit: 'cover',
//                         margin: '0 auto'
//                     }}
//                 /> 
//                 {/* <img src={product.image} alt={product.name} style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} /> */}
//                 <Typography variant="h5" sx={{ marginTop: '10px' }}>{product.name}</Typography>
//                 <Typography variant="body1">{product.description}</Typography>
//                 <Typography variant="h6" sx={{ marginTop: '10px', color: 'green' }}>{product.price}</Typography>
//                 <Button variant="contained" color="primary" sx={{ marginTop: '10px' }}>Add to Cart</Button>
//             </Box>
//         </Paper>
//     );
// }

// export default ProductCarousel;


// ProductCarousel.js
import React from 'react';
import Slider from 'react-slick';
import { Box, Paper, Typography, Button, Grid, IconButton } from '@mui/material';
import styled from '@emotion/styled';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const products = [
//   {
//     name: "Pampers Baby Wipes - With Aloe",
//     ratings: 4.2,
//     reviews: 203,
//     pcs: 72,
//     mrp: 299,
//     price: 179,
//     discount: 40,
//     image: "https://example.com/image1.jpg"
//   },
  {
    name: "Johnson's Baby Skincare Wipes - Super Saver Pack",
    pcs: 72,
    price: 510,
    image: "https://imgs.search.brave.com/MHunDGTIrTrx3Up8d9hJsnGaKZBk9YdfbuQ2uN6U_vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzA5LzI5Lzk5/LzM2MF9GXzEwOTI5/OTk0NF9IS3haTFRv/YlkydWhJaUUxeWdI/YTU5MVIwT3VNOGtZ/Ry5qcGc"
  },
  {
    name: "Johnson's Baby Skincare Wipes - Super Saver Pack",
    pcs: 72,
    price: 255,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHnAtTW5wpmpjCVWBm5thMFLrbRb2BBL5aQA&s"
  },
  {
    name: "Johnson's Baby Skincare Wipes - Super Saver Pack",
    pcs: 72,
    price: 255,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsUnvzmNXdsB8SiKrSN8BT2s3xgjUIB6R8Y_1atiky-awguCWNZ4M4sNqDtP1xAcykV3Q&usqp=CAU"
  },
  {
    name: "Johnson's Baby Skincare Wipes - Super Saver Pack",
    pcs: 72,
    price: 255,
    image: "https://m.media-amazon.com/images/I/71sq+uz2XKL.jpg"
  },
  {
    name: "Johnson's Baby Skincare Wipes - Super Saver Pack",
    pcs: 72,
    price: 255,
    image: "https://www.fruitsinfo.com/fruit-facts/wp-content/uploads/2020/12/cherry.jpg"
  },
  {
    name: "Johnson's Baby Skincare Wipes - Super Saver Pack",
    pcs: 72,
    price: 255,
    image: "https://m.media-amazon.com/images/I/71TAP4FpUZL.jpg"
  },
  {
    name: "Kit Kat",
    pcs: 1,
    price: 255,
    image: "https://www.sweetsandcandy.co.uk/media/catalog/product/cache/ad201e1f2783b5fe29e123a2105d273f/k/i/kit-kat-birthday-cake_1.jpg"
  },
 
  // Add more products here
];

// const DiscountTag = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   top: 0,
//   right: 0,
//   backgroundColor: 'red',
//   color: 'white',
//   padding: '0.2em 0.5em',
//   borderTopRightRadius: '5px',
//   borderBottomLeftRadius: '5px',
//   fontWeight: 'bold'
// }));

// const CustomArrow = (props) => {
//   const { className, style, onClick, icon } = props;
//   return (
//     <IconButton
//       className={className}
//       onClick={onClick}
//       style={{
//         ...style,
//         display: 'block',
//         color: 'black',
//         zIndex: 1
//       }}
//     >
//       {icon}
//     </IconButton>
//   );
// };

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // Number of products to show at once
    slidesToScroll: 2,
    // nextArrow: <CustomArrow icon={<ArrowForwardIosIcon />} />,
    // prevArrow: <CustomArrow icon={<ArrowBackIosIcon />} />,
  };

  return (
    <Box sx={{ maxWidth: '80%', margin: '0 auto' }}>
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
    <Paper sx={{ padding: '1em', position: 'relative', margin: '0 10px' }}>
      {/* <DiscountTag>GET {product.discount}% OFF</DiscountTag> */}
      <Box
        component="img"
        src={product.image}
        alt={product.name}
        sx={{
          width: '150px',
          height: '150px',
          objectFit: 'cover',
          display: 'block',
          margin: '0 auto'
        }}
      />
      <Typography variant="subtitle1" sx={{ marginTop: '0.5em' }}>{product.name}</Typography>
      <Typography variant="body2" sx={{ color: 'grey', marginBottom: '0.5em' }}>
        {product.pcs} pcs
      </Typography>
      <Grid container spacing={1} sx={{ justifyContent: 'center', marginBottom: '0.5em' }}>
        {/* <Grid item>
          <Typography variant="body2">
            MRP: Rs {product.mrp}
          </Typography>
        </Grid> */}
        <Grid item>
          <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'green' }}>
                Price: Rs {product.price}
          </Typography>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" sx={{ width: '100%' }}>Add to Cart</Button>
    </Paper>
  );
};

export default ProductCarousel;

