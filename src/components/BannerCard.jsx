import { ShoppingCartOutlined } from '@mui/icons-material'
import { Box, Button, Card, Fab, Grid, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'



const BannerCard = () => {
  return (
    <>
      <Grid container item xs={12} justify="center" alignItems="center"
        sx={{
          maxWidth: '100%',
          height: '50vh',
          backgroundImage: `url("https://tse2.mm.bing.net/th/id/OIP.uvpa0n9IAw5FXEVUkqrEsQHaEJ?rs=1&pid=ImgDetMain")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundColor: "#253f26"
        }}>
        <Grid container item direction={'column'} xs={6} alignItems="start" justifyContent={"space-evenly"}
          // backgroundColor="#006614"
          height={'40vh'}
          ml="45%"
          gap={2}
          sx={{
            color: " #EBFFDC",
            fontSize: "26vw",
            fontWeight: "bold",
            // textShadow: "0px 1px 2px rgba(0, 0, 0, 0.24)"
          }}>
          <Typography variant='h1'>Freshness Delivered Daily!</Typography>
          {/* <Typography variant='body1'>welcome to GROOVEGO</Typography> */}
          <Grid container item xs={2} direction={'row'} 
          // backgroundColor=" red"
           alignItems={"center"} gap={3} width={'45vh'}>

            <Button  sx={{
              borderRadius: '30px',
              // backgroundColor: "#243f2f ",
              backgroundColor: "rgba(12, 208, 92, 0.7)",
              height: "4vw",
              width: "25vh",
              color: "white",
              fontWeight: "bold",
              fontSize: "20px",
              gap: '5px',
              justifyContent: "center",
              '&:hover': {
                backgroundColor: "white",
                color: '#243f2f',
              }
            }}>
              <ShoppingCartOutlined />
              Explore
            </Button>
            <Typography
              variant='body1'
              sx={{
                color: "#EBFFDC",

              }}
            >2500+ products</Typography>
          </Grid>

        </Grid>

      </Grid>
    </>
  )
}

export default BannerCard