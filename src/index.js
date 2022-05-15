
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: "#554033",
    },
    secondary: {
      main: "#ffcf8b",
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

