import React from 'react';
import { alpha, AppBar, InputBase, styled, Toolbar, Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.35),
    },
    width: '300px',
    height: '5vh',
    marginRight: theme.spacing(100),
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '100%',
    },
}));

const NavButton = styled('button')(({ theme, color }) => ({
    backgroundColor: color === 'yellow' ? theme.palette.secondary.light : 'transparent',
    color: color === 'yellow' ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText,
    border: color === 'yellow' ? 'none' : `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: '10px',
    height: '4vh',
    padding: '0 16px',
    cursor: 'pointer',
    marginLeft: theme.spacing(2),
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
        <AppBar position="sticky">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6" noWrap component="div" >
                    GroveGo
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Typography sx={{ marginRight: 2 }}>
                        Category
                    </Typography>
                    <NavButton color="yellow" onClick={handleSignup}>
                        Sign up
                    </NavButton>
                    <NavButton onClick={handleLogin}>
                        Log in
                    </NavButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
