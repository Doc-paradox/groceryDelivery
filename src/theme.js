import { ThemeProvider,createTheme } from "@mui/material";

const theme = createTheme({
    palette:{
        primary:{
            main: "#133020",
            light: "#327039"
        
        },
        secondary:{
            main: "#DD5C36",
            light: "#F0BE49"
        },
        background:{
            default: "#FFEBAE"
        }
    }
})

export default theme;