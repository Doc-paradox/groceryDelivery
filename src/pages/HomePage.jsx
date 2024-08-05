







// const StyledBox = styled(Box)(({ theme }) => ({
//     backgroundColor: theme.palette.primary.main,
//     height: '80vw',
//     width: '100%',
//     borderRadius: '10px',
// }))

// const images = [
//     "https://www.blinkco.io/wp-content/uploads/2022/01/shopping-cart-full-of-food-on-yellow-background-g-2021-09-02-09-26-59-utc-1.jpg",
//     "https://149449856.v2.pressablecdn.com/wp-content/uploads/2020/07/Vegetables-in-Bag.jpg",
//     "https://images.pexels.com/photos/3962292/pexels-photo-3962292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://plus.unsplash.com/premium_photo-1661321009372-4bbd48f64550?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// ];



// const HomePage = () => {

//     return (
//         <Box>
//             <Navbar />

//             <Grid container direction={'row'} gap={22} padding="10px" justifyContent="space-between" alignItems="center" sx={{
//                 backgroundColor: "#eff5ee",
//                 height: '12vh',
//                 width: '100%'
//             }}>
//                 <Typography>GrooveGo</Typography>
//                 <Box>
//                     <Button>Category</Button>
//                     searchfield will come here
//                 </Box>
//                 <Box direction="column" gap="25px">
//                     <SearchOutlined />
//                     <AccountCircleOutlined />
//                     <ShoppingCartOutlined />
//                 </Box>
//             </Grid>
//             {/* <Box sx={{ width: '85%',margin:'auto',height:'55vh',overflow:'hidden' }}>
//                 <Carousel>
//                     {images.map((image, i) => (
//                         <Paper key={i} elevation={20} sx={{ boxShadow: 'none' }}>
//                             <Box
//                                 component="img"
//                                 sx={{
//                                     width: '100%',
//                                     maxheight:'55vh',
//                                     objectFit: 'cover',
//                                     display:'block'
//                                 }}
//                                 src={image}
//                                 alt={`Slide ${i}`}
//                             />
//                         </Paper>
//                     ))}
//                 </Carousel>
//             </Box> */}
//             <BannerCard />
//             <Grid padding='35px'>
//                 <Box mb='20px'>
//                     <DisplayCard />
//                 </Box>
//                 <StyledBox padding='30px'>
//                     <ViewProducts/>
//                 </StyledBox>
//                 <Grid>
//                     <Box>
//                         Book Your Delivery To Your Convience
//                         From 06:00 AM To 10:00 PM
//                     </Box>
//                 </Grid>
//                 <Grid container spacing={2} columnGap={3} rowGap={8} >
//                    {/* <ViewProducts/> */}



//                 </Grid>

//                 {/* <Grid container spacing={4}
//                 sx={{
//                     width: '80%',
//                     height: '25vh',
//                     marginLeft: '10%',
//                     marginTop: '10%',
//                     display: 'flex',
//                     flexDirection: 'row',
//                     justifyContent: 'space-evenly'
//                 }}>
//                 {[1, 2, 3, 4].map((row) => (
//                     <Grid item xs={12} key={row}>
//                         <Grid container spacing={2} justifyContent="center">
//                             {[1, 2, 3].map((col) => (
//                                 <Grid item xs={12} sm={3} key={`${row}-${col}`}>
//                                     <ContainerBox>Fruit vegetables</ContainerBox>
//                                 </Grid>
//                             ))}
//                         </Grid>
//                     </Grid>
//                 ))}
//             </Grid> */}


//             </Grid>
//         </Box>


//     )
// }

// export default HomePage;


import React from 'react';
import Navbar from '../components/Navbar';
import { Box, Grid, styled, Typography } from '@mui/material';
import BannerCard from '../components/BannerCard';
import ViewProducts from './user/ViewProducts';
import DisplayCard from '../components/DisplayCard';
import MenuBox from '../components/MenuBox';
import ProductCarousel from '../components/ProductCarousel';
import delivery from '../assets/delivery.png';
import Footer from '../components/Footer';
// import Carousel from 'react-material-ui-carousel';
// import ProductCard from '../components/ProductCard';
// import { Link } from 'react-router-dom';

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: '80vw',
    width: '100%',
    borderRadius: '10px',
}))

const images = [
    "https://www.blinkco.io/wp-content/uploads/2022/01/shopping-cart-full-of-food-on-yellow-background-g-2021-09-02-09-26-59-utc-1.jpg",
    "https://149449856.v2.pressablecdn.com/wp-content/uploads/2020/07/Vegetables-in-Bag.jpg",
    "https://images.pexels.com/photos/3962292/pexels-photo-3962292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://plus.unsplash.com/premium_photo-1661321009372-4bbd48f64550?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const HomePage = () => {
    return (
        <Box>
            <Navbar />
            <MenuBox />
            <BannerCard />
            <Grid container
                padding='35px'
                direction={'column'}
                gap={5}
            >
                <Box >
                    <DisplayCard />
                </Box>
                <StyledBox padding='20px'>
                    <Typography variant="h1" textAlign={'center'}>Best Seller</Typography>
                    <ViewProducts />
                </StyledBox>
                <Grid container direction={'row'}
                    justifyContent={'space-evenly'}

                    paddingLeft={'5%'}
                    paddingRight={'5%'}
                    gap={2}
                    sx={{
                        height: '60vh',
                        width: '100%',
                        borderRadius: 5,
                        // backgroundFilter: 'blur(5px)',
                        background: 'linear-gradient(90deg, rgba(2, 23, 0, 1) 0%, rgba(0, 119, 55, 1) 65%, rgba(130, 238, 136, 1) 100%), url("https://as2.ftcdn.net/v2/jpg/05/40/82/11/1000_F_540821186_5gCn7JTDZrcK1XJlvR3Xeg4TTZAzvONC.jpg")',
                        backgroundBlendMode: 'multiply',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}

                >

                    <Box paddingTop={'10%'}
                        sx={{
                            // backgroundColor: 'pink', 
                            color: 'white',
                            height: '100%', width: '53vw',
                        }}>

                        <Typography variant="h1" fontFamily={'consolas,monospace'} >
                            Book Your Delivery To Your Convenience
                            <br></br>
                        </Typography>
                        <Typography variant="h3">
                            From 06:00 AM To 10:00 PM
                        </Typography>

                    </Box>
                    <img src={delivery} alt="delivery"
                        style={{ height: '65vh', width: '30vw', }}

                    />
                </Grid>
                <ProductCarousel />
                
            </Grid>
            <Footer/>
        </Box>
    )
}

export default HomePage;
