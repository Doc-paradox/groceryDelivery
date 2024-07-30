import { HandymanOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { Box, Button, Card, Fab, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = styled('Typopgraphy')(({ theme }) => ({

  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.h1.fontSize,
  fontWeight: theme.typography.h1.fontWeight,
  color: "#EBFFDC",

}))

const SubTitle = styled('Typography')(({ theme }) => ({

  fontSize: theme.typography.body1.fontSize,
  fontWeight: 'bold',
  color: "#EBFFDC",
}))

const BannerCard = () => {
  const navigate = useNavigate();

  const handleClick= () =>{
    navigate('/products')
  }
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
        <Grid container direction={'column'} xs={6} alignItems="start" justifyContent={"centre"}
          // backgroundColor="#006614"
          height={'100%'}
          ml="35%"
        // gap={2}
        >
          <Header>Freshness Delivered Daily!</Header>
          {/* <Typography variant='body1'>welcome to GROOVEGO</Typography> */}
          <Grid item xs={2} direction={'row'}
            // backgroundColor=" red"
            alignItems={"center"} gap={4} width={'45vh'}>

            <Button sx={{
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
            }}

            onClick={handleClick}
            >
              <ShoppingCartOutlined />
              Explore
            </Button>
            <SubTitle> 2500+ products</SubTitle>
          </Grid>

        </Grid>

      </Grid>
    </>
  )
}

export default BannerCard