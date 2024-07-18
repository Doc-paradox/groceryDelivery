import { alpha, AppBar, InputBase, styled, Toolbar, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'
import { useNavigate } from 'react-router-dom';


const Search = styled('Textfield')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.35),
    },
    marginRight: "55%",
    width: "300px",
    height: "5vh",
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '300px',
    }
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
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: "100%",
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const YellowButton = styled('button')(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light,
    borderRadius: "10px",
    height: "4vh",
    width: "10vh",
    cursor: "pointer",
    '&:hover': {
        cursor: "pointer"
    }
}));

const WhiteButton = styled('button')(({ theme }) => ({
    // backgroundColor:theme.palette.default,
    variants: "outlined",
    borderRadius: "10px",
    height: "4vh",
    width: "10vh",
    cursor: "pointer",
    '&:hover': {
        cursor: "pointer"
    }
}));



const Navbar = () => {

    const navigate = useNavigate();

    const handleSignup= () => {
        navigate("/signup")
    }
    const handleLogin= () => {
        navigate("/login")
    }

    return (
        <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" noWrap component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, marginLeft: "5%" }}>
                        GroveGo
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Typography>
                        Category
                    </Typography>
                    <YellowButton onClick={handleSignup}>
                        Sign up
                    </YellowButton>
                    <WhiteButton variant="outlined" onClick={handleLogin}>
                        Log in
                    </WhiteButton>
                </Toolbar>
        </AppBar>
    )
}

export default Navbar;