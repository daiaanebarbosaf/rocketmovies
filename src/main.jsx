import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './pages/styles/global';

import { MyContext } from './myContext';

import theme from './pages/styles/theme';

import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MyContext.Provider value={{email: 'rodrigo@email.com'}}>
        <Routes />
      </MyContext.Provider>

    </ThemeProvider>
  </React.StrictMode>,
);
