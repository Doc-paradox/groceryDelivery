// import React from 'react';
// import { alpha, AppBar, InputBase, styled, Toolbar, Typography, Box } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import { Link, useNavigate } from 'react-router-dom';

// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.35),
//     },
//     width: '300px',
//     height: '5vh',
//     marginRight: theme.spacing(100),
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     width: '100%',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         width: '100%',
//     },
// }));

// const NavButton = styled('button')(({ theme, color }) => ({
//     backgroundColor: color === 'yellow' ? theme.palette.secondary.light : 'transparent',
//     color: color === 'yellow' ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText,
//     border: color === 'yellow' ? 'none' : `1px solid ${theme.palette.primary.contrastText}`,
//     borderRadius: '10px',
//     height: '4vh',
//     padding: '0 16px',
//     cursor: 'pointer',
//     marginLeft: theme.spacing(2),
// }));

// const Navbar = () => {
//     const navigate = useNavigate();

//     const handleSignup = () => {
//         navigate("/signup");
//     };

//     const handleLogin = () => {
//         navigate("/login");
//     };

//     return (
//         <AppBar position="sticky">
//             <Toolbar sx={{ justifyContent: 'space-between' }}>
//                 <Typography variant="h6" noWrap component="div" >
//                     GroveGo
//                 </Typography>
//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                     <Search>
//                         <SearchIconWrapper>
//                             <SearchIcon />
//                         </SearchIconWrapper>
//                         <StyledInputBase
//                             placeholder="Search…"
//                             inputProps={{ 'aria-label': 'search' }}
//                         />
//                     </Search>
//                     <Typography sx={{ marginRight: 2 }}>
//                         Category
//                     </Typography>
//                     <NavButton color="yellow" onClick={handleSignup}>
//                         Sign up
//                     </NavButton>
//                     <NavButton onClick={handleLogin}>
//                         Log in
//                     </NavButton>
//                 </Box>
//             </Toolbar>
//         </AppBar>
//     );
// };

// export default Navbar;


import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography, styled } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textDecoration: 'none',
  margin: theme.spacing(0, 2),
  '&:hover': {
    color: theme.palette.primary.light,
  },
}));

const ContactInfo = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  display: 'flex',
  alignItems: 'center',
  marginLeft: theme.spacing(2),
  '& svg': {
    marginRight: theme.spacing(1),
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.background.default,
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
  margin: theme.spacing(1, 2),
  fontWeight: 'bold',
}));

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };


  return (
    <StyledAppBar position="sticky">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/pages">Pages</NavLink>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ContactInfo>
            <LocationOnIcon />
            25 West 21th Street, Miami FL, USA
          </ContactInfo>
          <ContactInfo>
            <AccessTimeIcon />
            Mon-Fri: 10:00 - 18:00
          </ContactInfo>
          <NavButton onClick={handleSignup}>
            Sign up
          </NavButton>
          <Button onClick={handleLogin} sx={{color:'white',fontWeight:'bold'}}>
            Log in
          </Button>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
