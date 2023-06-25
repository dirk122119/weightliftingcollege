import * as React from 'react';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';

const font = "'Noto Sans TC', sans-serif;"

const muiTheme = createTheme({
    palette: {
      primary: {
        main: '#c9a063',
      },
      secondary: {
        main: '#6B4240',
      },
    },
    typography:{
      fontFamily:font,
      button:{
        textTransform: "none"
      }
    }
  });

export default muiTheme