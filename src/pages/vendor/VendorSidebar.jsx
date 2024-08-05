import React from 'react'
import Sidebar from '../../components/Sidebar';
import { AccountCircle,  Inventory2,  ShoppingCart } from '@mui/icons-material';

const userMenuItems = [
    { icon: <ShoppingCart />, path: "/vendor/orders" },
    // { text: "Order", icon: <AutoStories />, path: "/vendor/catogery" },
    {  icon: <Inventory2 />, path: "/vendor/product" },
    {  icon: <AccountCircle />, path: "/vendor/profile" },
  ];
const VendorSidebar = () => {
  return (
    <>
      <Sidebar menuItems={userMenuItems} />
    </>
  )
}

export default VendorSidebar;