import React from 'react';
import logo from './logo.svg';
import { Router } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import Routes from './Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
