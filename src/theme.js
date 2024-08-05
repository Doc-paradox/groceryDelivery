import { createTheme } from "@mui/material/styles";

const myTheme = createTheme({
    palette: {
        primary: {
            light:'#cdee77',
            main: '#b4e639',
            dark: '#8abf2c',
        },
        secondary: {
            light:'#2f6b1a',
            main: '#143f17',
            dark: '#0c2610',  // A darker shade derived from #143f17
        },
        background: {
            default: '#edf5ec',
            paper: '#ffffff',
        },
        text: {
            primary: '#000000',
            secondary: '#333333',
        },
    },
    typography: {
        fontFamily: 'Poppins, sans-serif',
        h1: {
            fontSize: '3rem',
            fontWeight: 'bold',
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: 500,
        },
        h3: {
            fontSize: '2rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.5,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.43,
        },
        button: {
            fontSize: '1rem',
            textTransform: 'none',
        },
    },
     spacing: 8,
     shape: {
        borderRadius: 8,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '8px',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    padding: '16px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                },
            },
        },
    },
})

export default myTheme;