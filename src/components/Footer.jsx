import React from 'react';
import { Box, Typography, Container, Link, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#182418', // Dark green background
  
  color: '#87C694', // Light green text color
}));

const FooterLink = styled(Link)(({ theme }) => ({
  display: 'block',
  color: '#87C694',
  marginBottom: theme.spacing(1),
  textDecoration: 'none',
  '&:hover': {
    color: '#A3D9A5', // Slightly lighter green on hover
  },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: '#87C694',
  '&:hover': {
    color: '#A3D9A5', // Slightly lighter green on hover
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4} direction={'row'} justifyContent={'space-evenly'}>
          <Grid item xs={12} md={4} >
            <Typography variant="h6">About Us</Typography>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
            <FooterLink href="/shipping">Shipping Policy</FooterLink>
            <FooterLink href="/refund">Refund Policy</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/delivery">Delivery Info</FooterLink>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            <Typography variant="h4" gutterBottom>
              GrooveGo
            </Typography>
            <Typography variant="body1">
              We’re GrooveGo, an innovative team of food engineers. Our unique model minimizes fresh food handling by up to 85%, sourcing locally and dispatching within hours through cold chain logistics in eco-friendly containers.
            </Typography>
            <Box mt={2}>
              <SocialIconButton aria-label="Facebook" href="https://facebook.com">
                <FacebookIcon />
              </SocialIconButton>
              <SocialIconButton aria-label="Instagram" href="https://instagram.com">
                <InstagramIcon />
              </SocialIconButton>
              <SocialIconButton aria-label="YouTube" href="https://youtube.com">
                <YouTubeIcon />
              </SocialIconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} textAlign="right">
            <Typography variant="h6">Payment Accept</Typography>
            <Box mt={1}>
              <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
              <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MasterCard" />
              <img src="https://img.icons8.com/color/48/000000/apple-pay.png" alt="Apple Pay" />
              <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" />
              <img src="https://img.icons8.com/color/48/000000/amex.png" alt="American Express" />
              <img src="https://img.icons8.com/color/48/000000/bitcoin.png" alt="Bitcoin" />
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={4}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Tasty Daily Grocery. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
