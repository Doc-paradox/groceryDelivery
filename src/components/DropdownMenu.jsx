import React, { useState } from 'react';
import { Button, Menu, MenuItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Shop, SetMealOutlined, LocalOffer, Restaurant, SetMeal, BakeryDining, LocalDrink, GridView, Menu as MenuIcon } from '@mui/icons-material';

const DropdownMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const categories = [
        { name: 'Shop', icon: <Shop /> },
        { name: 'Vegetables', icon: <SetMealOutlined /> },
        { name: 'Fresh Fruit', icon: <LocalOffer /> },
        { name: 'Meat', icon: <Restaurant /> },
        { name: 'Seafood', icon: <SetMeal /> },
        { name: 'Baking', icon: <BakeryDining /> },
        { name: 'Drinks', icon: <LocalDrink /> },
        { name: 'Other', icon: <GridView /> },
    ];

    return (
        <div>
            <Button
                aria-controls="category-menu"
                aria-haspopup="true"
                onClick={handleClick}
                onMouseEnter={handleClick}
                sx={{ 
                    color: 'white', 
                    height:'4vw',
                    width:'15vw',
                    fontSize: '1.8vw',
                    backgroundColor: '#1e4620', 
                    '&:hover': { backgroundColor: '#2a6330' }
                }}
            >
                <MenuIcon sx={{ mr: 1,fontSize:'2vw' }} />
                Categories
            </Button>
            <Menu
                id="category-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                    onMouseEnter: handleClick,
                    onMouseLeave: handleClose
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}  
            >
                {categories.map((category) => (
                    <MenuItem key={category.name} onClick={handleClose}>
                        <ListItemIcon sx={{ color: '#00c853' }}>
                            {category.icon}
                        </ListItemIcon>
                        <ListItemText primary={category.name} />
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default DropdownMenu;