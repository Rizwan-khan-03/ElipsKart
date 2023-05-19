import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store/Store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ProSidebarProvider> */}
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App /> {/* Replace App with your root component */}
        </ThemeProvider>,
      </Provider>
      {/* <Toaster /> */}
      {/* </ProSidebarProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
