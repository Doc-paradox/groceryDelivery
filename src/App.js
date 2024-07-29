import React from "react";
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import axios from "axios";
import theme from './theme';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from "./pages/SignupPage";
import  UserDashboard  from "./pages/user/userDashboard";
import VendorDashboard from "./pages/vendor/vendorDashboard";
import AddProduct from "./pages/vendor/AddProduct";
import AddressPage from "./pages/AddressPage";

axios.defaults.baseURL = 'http://localhost:8080';



const App =() =>(
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/login" element={<LoginPage/>} />   
        <Route path="/user" element={<UserDashboard/>}/>
        <Route path="/vendor" element={<VendorDashboard/>}/>
        <Route path="/vendor/product" element={<AddProduct/>}/>
        <Route path="/address" element={<AddressPage/>}/>
      </Routes>
    </Router>
  </ThemeProvider>
)

export default App;
