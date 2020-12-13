import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: ['Nunito', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontSize: '6rem',
    },
    h2: {
      fontSize: '5rem',
    },
    h3: {
      fontSize: '4rem',
    },
    h4: {
      fontSize: '3rem',
    },
    h5: {
      fontSize: '2rem',
    },
    h6: {
      fontSize: '1.6rem',
    },
    body1: {
      fontSize: '2.2rem',
      lineHeight: 1.3,
      fontWeight: 300,
    },
    body2: {
      fontSize: '1.4rem',
      lineHeight: 1.2,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: '2.5rem',
      lineHeight: 1,
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '2.3rem',
      lineHeight: 1,
      fontWeight: 500,
    },
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: '#ffffff',
      },
    },
    MuiCssBaseline: {
      '@global': {
        p: {
          margin: 0,
          marginBottom: '1.5rem',
        },
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
  },
  palette: {
    primary: {
      main: '#2196f3',
      dark: '#1976d2',
      light: '#64b5f6',
      contrastText: '#ffffff',
    },
    success: {
      main: '#78c800',
      dark: '#58a700',
      light: '#78c800',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#5cbcf6',
      dark: '#49a7df',
      light: '#5cbcf6',
      contrastText: '#ffffff',
    },
    info: {
      main: '#5cbcf6',
      dark: '#49a7df',
      light: '#5cbcf6',
      contrastText: '#ffffff',
    },
  },
  shape: {
    borderRadius: 42,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1500,
      xl: 1920,
    },
  },
})

export default responsiveFontSizes(theme)
