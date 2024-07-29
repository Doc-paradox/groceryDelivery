// import { Box, Grid, Paper } from '@mui/material'
// import React from 'react'
// import Navbar from '../../components/Navbar'
// import styled from 'styled-components';
// import UserSidebar from './UserSidebar';
// import ProductCarousel from '../../components/ProductCarousel';

// const Item = styled(Paper)(({ theme }) => ({
//   marginTop: '5vh',
//   marginLeft: '2em',
//   textAlign: 'center',
//   height: '25em',
//   width: '32vh',
//   lineHeight: '60px',
// }));

// const BackgroundGrid = styled(Grid)(({ theme }) => ({
//   container: {
//     height: 'auto',
//   },
//   display: 'flex', 
//   flexDirection: 'row'
// }));

// const ItemGrid = styled(Grid)(({ theme }) => ({
//   height: '32em', 
//   width: '100%', 
//   backgroundColor: 'blue', 
//   alignItems: 'center', 
//   display: 'flex', 
//   flexDirection: 'column', 
//   marginTop: '2em', 
//   borderRadius: '15px'
// }));

// export const UserDashboard = () => {
//   return (
//     <Box>
//       <Navbar />
//       <BackgroundGrid container columnGap={3} >
//         <UserSidebar/>
//         <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'yellow', width: '70em', marginTop: '3em', borderRadius: '15px' }}>
//           <ItemGrid container>
//             <ProductCarousel/>
//             {/* <Item>Item 2</Item>
//             <Item>Item 3</Item>
//             <Item>Item 4</Item>
//             <Item>Item 5</Item> */}
//           </ItemGrid>
//           <ItemGrid container >
//             <Item>Item 1</Item>
//             <Item>Item 1</Item>
//             <Item>Item 1</Item>
//             <Item>Item 1</Item>
//           </ItemGrid>
//           <ItemGrid container>
//             <Item>Item 1</Item>
//             <Item>Item 1</Item>
//             <Item>Item 1</Item>
//             <Item>Item 1</Item>
//           </ItemGrid>
//         </Box>

//       </BackgroundGrid>
//     </Box>
//   )
// }

import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Navbar from '../../components/Navbar';
import UserSidebar from './UserSidebar';
import ProductCarousel from '../../components/ProductCarousel';
import styled from 'styled-components';
import ViewProducts from './ViewProducts';

const ProductItem = styled(Paper)({
  padding: '20px',
  textAlign: 'center',
  height: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const UserDashboard = () => {
  return (
    <Box>
      <Navbar />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <UserSidebar />
        </Grid>
        <Grid item xs={9}>
          <Box 
          sx={{ padding: '20px' }}
          >
            <Grid conatiner spacing={3} rowGap={8} columnGap={3} >
            <Box sx={{backgroundColor:'white'}}>
            <ProductCarousel />
            </Box>
            <Box sx={{backgroundColor:'green'}}>
            <ProductCarousel />
            </Box>
            {/* <ProductCarousel />
            <ProductCarousel /> */}
            </Grid>
            <Grid container spacing={3} sx={{ marginTop: '20px' }}>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Grid item xs={4} key={item}>
                  {/* <ProductItem>
                    <Typography variant="h6">Product {item}</Typography>
                    <Typography>Description of Product {item}</Typography>
                    <Typography variant="subtitle1">$19.99</Typography>
                  </ProductItem> */}
                  <ViewProducts/>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDashboard;



