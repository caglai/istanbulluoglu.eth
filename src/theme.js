import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans'
  },
  palette: {
    primary: {
      main: '#490B3D',
    },
    secondary: {
      main: '#BD1E51',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        /*
          To perform the server-side hydration, the hook needs to render twice. A first time with false, the value of the server, 
          and a second time with the resolved value. This double pass rendering cycle comes with a drawback. It's slower. You can
          set the noSsr option to true if you are doing client-side only rendering.
        */
        noSsr: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'transparent',
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          overflowY: 'scroll',  // to prevent the scrollbar from moving the content
          userSelect: 'none',
        },
        body: {
          scrollbarColor: "#6b6b6b #2b2b2b",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "transparent",
            width: '0.6em',
            height: '0.6em',
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#d6dee1",
            minHeight: 24,
            // border: "3px solid #2b2b2b",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#a5a5a5",
          },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
});

export default theme;
