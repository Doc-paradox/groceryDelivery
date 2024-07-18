import React from "react";
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import theme from './theme';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from "./pages/SignupPage";
import { UserDashboard } from "./pages/user/UserDashboard";
import VendorDashboard from "./pages/vendor/VendorDashboard";

const App =() =>(
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/login" element={<LoginPage/>} />   
        <Route path="/login/user" element={<UserDashboard/>}/>
        <Route path="/login/vendor" element={<VendorDashboard/>}/>
      </Routes>
    </Router>
  </ThemeProvider>
)

export default App;
