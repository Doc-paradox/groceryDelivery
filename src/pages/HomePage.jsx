import React from 'react'
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

// const Header = styled('Typography')(({ theme }) => ({
//     fontfamily: 'Arial',
//     fontWeight: 'bolder',
//     fontSize: '7vh',
// }))

const ContainerBox = styled('Box')(({ theme }) => ({
    width: '35vh',
    height: '45vh',
    boxShadow: '-moz-initial',
    backgroundColor: 'white',
    borderRadius: "5%",
    textAlign: 'center',
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
            <Typography sx={{
                fontFamily: 'Arial',
                fontWeight: 'bolder',
                fontSize: '7vh',
                textAlign: 'center',
                margin: '20px 0'
            }}>
                Welcome to GroveGo!
            </Typography>

            <Box sx={{ width: '85%', margin: '0 auto',overflow:'hidden' }}>
                <Carousel>
                    {images.map((image, i) => (
                        <Paper key={i} elevation={20} sx={{ boxShadow: 'none' }}>
                            <Box
                                component="img"
                                sx={{
                                    width: '100%',
                                    height:'55vh',
                                    objectFit: 'cover'
                                }}
                                src={image}
                                alt={`Slide ${i}`}
                            />
                        </Paper>
                    ))}
                </Carousel>
            </Box>
            <Grid container spacing={2} columnGap={5} >

                <Box sx={{ width: '80%', height: '25vh', marginLeft: '10%', marginTop: '10%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: '10%' }}>
                    <ContainerBox >Fruit vegetables</ContainerBox>
                    <ContainerBox>Fruit vegetables</ContainerBox>
                    <ContainerBox>Fruit vegetables</ContainerBox>
                </Box>

                <Box sx={{ width: '80%', height: '25vh', marginLeft: '10%', marginTop: '15%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: '10%' }}>
                    <ContainerBox >Fruit vegetables</ContainerBox>
                    <ContainerBox>Fruit vegetables</ContainerBox>
                    <ContainerBox>Fruit vegetables</ContainerBox>
                </Box>
                <Box sx={{ width: '80%', height: '25vh', marginLeft: '10%', marginTop: '15%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: '10%' }}>
                    <ContainerBox >Fruit vegetables</ContainerBox>
                    <ContainerBox>Fruit vegetables</ContainerBox>
                    <ContainerBox>Fruit vegetables</ContainerBox>
                </Box>
                <Box sx={{ width: '80%', height: '25vh', marginLeft: '10%', marginTop: '15%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: '10%' }}>
                    <ContainerBox >Fruit vegetables</ContainerBox>
                    <ContainerBox>Fruit vegetables</ContainerBox>
                    <ContainerBox>Fruit vegetables</ContainerBox>
                </Box>
            </Grid>

            {/* <Grid container spacing={4}
                sx={{
                    width: '80%',
                    height: '25vh',
                    marginLeft: '10%',
                    marginTop: '10%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'
                }}>
                {[1, 2, 3, 4].map((row) => (
                    <Grid item xs={12} key={row}>
                        <Grid container spacing={2} justifyContent="center">
                            {[1, 2, 3].map((col) => (
                                <Grid item xs={12} sm={3} key={`${row}-${col}`}>
                                    <ContainerBox>Fruit vegetables</ContainerBox>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                ))}
            </Grid> */}
            

        </Box>


    )
}

export default HomePage;


