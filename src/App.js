import React from "react";
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import theme from './theme';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const App =() =>(
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </Router>
  </ThemeProvider>
)

export default App;
