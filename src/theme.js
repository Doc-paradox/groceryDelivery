import { createTheme } from "@mui/material/styles";

const myTheme = createTheme({
    palette: {
        primary: {
            light: '#cdee77',
            main: '#b4e639',
            dark: '#8abf2c',
        },
        secondary: {
            light: '#2f6b1a',
            main: '#143f17',
            dark: '#0c2610',  // A darker shade derived from #143f17
        },
        background: {
            default: '#ffffff',
            paper: '#f5f5f5',
        },
        text: {
            primary: '#333333',
            secondary: '#666666',
        },
    },
    typography: {
        fontFamily: '"Poppins", "Quicksand", "Arial", sans-serif',
        h1: {
            fontSize: '5.5rem',
            fontWeight: 'bolder',
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 500,
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 500,
            
        },
        body1: {
            fontSize: '1.15rem',
            lineHeight: 1.5,
            // fontWeight: 'bold',
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.43,
            // fontWeight: 'bold',
        },
    },
    // spacing: (factor) => `${8 * factor}px`,
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
})

export default myTheme;