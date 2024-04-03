import { createTheme, ThemeProvider } from "@mui/material";

const ThemeContext = ({children}) => {
    const theme = createTheme({
        palette : {
            primary : {
                main : '#880e4f'
            },
            secondary :{
                main : '#4a148c'
            }
        }
    })
    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    );
};

export default ThemeContext;