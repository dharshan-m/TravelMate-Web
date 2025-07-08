import { createTheme } from '@mui/material/styles';

// Define your theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#0D47A1', // Dark Blue for Navbar Background
    },
    secondary: {
      main: '#1976d2', // Lighter Blue for accents/buttons
    },
    text: {
      primary: '#FFFFFF', // White text for contrast
    },
  },
});

export default theme;
