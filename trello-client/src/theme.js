import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  trello: {
    appBarHeight: '48px',
    boardBarHeight: '58px'
  },
  colorSchemes: {
    dark: true
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '5px',
            height: '5px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            borderRadius: '2px'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWidth: '0.5px'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypegraphy-body1': {
            fontSize: '0.875rem'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          '& fieldset': {
            borderWidth: '0.5px !important'
          }
        }
      }
    }
  }
});

export default theme;
