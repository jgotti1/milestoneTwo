import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500",
      light: "#FFC14D",
      dark: "#CC8500",
    },
    secondary: {
      main: "#FFFFFF",
      grey: "#CCCCCC",
      darkgrey: "#808080",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

