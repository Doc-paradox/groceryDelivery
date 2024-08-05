import React from "react";
import { CssBaseline, ThemeProvider, } from '@mui/material';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import axios from "axios";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from "./pages/SignupPage";
import UserDashboard from "./pages/user/userDashboard";
import VendorDashboard from "./pages/vendor/vendorDashboard";
import AddProduct from "./pages/vendor/AddProduct";
import AddressPage from "./pages/AddressPage";
import ViewCart from "./pages/user/ViewCart";
import myTheme from "./theme";
import DeliveryDashboard from "./pages/delivery/deliveryDashboard";
import ViewProducts from "./pages/user/ViewProducts";
import ViewOrders from "./pages/user/ViewOrders";
import UpdateOrders from "./pages/vendor/UpdateOrders";

axios.defaults.baseURL = 'http://localhost:8080';



const App = () => (

  <ThemeProvider theme={myTheme}>
    <CssBaseline />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/user/products" element={<ViewProducts />} />
        <Route path="/user/cart" element={<ViewCart />} />
        <Route path="/user/order" element={<ViewOrders />} />
        <Route path="/vendor" element={<VendorDashboard />} />
        <Route path="/vendor/product" element={<AddProduct />} />
        <Route path="/vendor/orders" element={<UpdateOrders/>} />
        <Route path="/address" element={<AddressPage />} />
        <Route path="/delivery" element={<DeliveryDashboard/>} />
      </Routes>
    </Router>
  </ThemeProvider>
)

export default App;

