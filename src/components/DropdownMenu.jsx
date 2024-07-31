import React, { useState } from 'react';
import { Button, Popover, Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Shop, SetMealOutlined, LocalOffer, Restaurant, BakeryDining, LocalDrink, GridView } from '@mui/icons-material';

const DropdownMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handlePopoverClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                Category
            </Button>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                PaperProps={{
                    onMouseEnter: () => setOpen(true),
                    onMouseLeave: handlePopoverClose,
                }}
                transitionDuration={{
                    enter: 500, // Increase the enter duration to 500ms
                    exit: 500,  // Increase the exit duration to 500ms
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Box sx={{ p: 2, display: 'flex' }}>
                    <Box sx={{ mr: 4 }}>
                        <List>
                            <ListItem button>
                                <ListItemIcon><Shop /></ListItemIcon>
                                <ListItemText primary="Shop" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon><SetMealOutlined /></ListItemIcon>
                                <ListItemText primary="Vegetables" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon><LocalOffer /></ListItemIcon>
                                <ListItemText primary="Fresh Fruit" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon><Restaurant /></ListItemIcon>
                                <ListItemText primary="Meat" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon><BakeryDining /></ListItemIcon>
                                <ListItemText primary="Baking" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon><LocalDrink /></ListItemIcon>
                                <ListItemText primary="Drinks" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon><GridView /></ListItemIcon>
                                <ListItemText primary="Other" />
                            </ListItem>
                        </List>
                    </Box>
                    <Box>
                        <Typography variant="h6">Grid Layout</Typography>
                        <Typography variant="body1">Small</Typography>
                        <Typography variant="body1">Medium</Typography>
                        <Typography variant="body1">Large</Typography>
                        <Typography variant="body1">Extra Large</Typography>
                        <Typography variant="h6" sx={{ mt: 2 }}>Product Layout</Typography>
                        <Typography variant="body1">2 columns</Typography>
                        <Typography variant="body1">2 columns + sidebar</Typography>
                        <Typography variant="body1">3 columns</Typography>
                        {/* Add more categories as needed */}
                    </Box>
                </Box>
            </Popover>
        </div>
    );
};

export default DropdownMenu;
