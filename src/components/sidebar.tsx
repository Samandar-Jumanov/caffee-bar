"use client"


import React, { useState } from 'react';
import {
  List, ListItemButton, ListItemText, CssBaseline, AppBar, Toolbar, 
  Typography, IconButton, Box, SwipeableDrawer, useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

interface SideBarLayoutProps {}

const drawerWidth = 240;

const SideBarLayout: React.FC<SideBarLayoutProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  };

  // Enhanced method for closing the drawer when a list item is clicked
  // This method provides flexibility for additional actions in the future
  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  const drawerItems = ['About Us', 'Contact Us', 'Share', 'Coffees'];

  const drawer = (
    <List>
      {drawerItems.map((text, index) => (
        <Link key={index} href={`/${text.toLowerCase().replace(/\s+/g, '')}`} passHref>
          <ListItemButton onClick={handleDrawerClose}>
            <ListItemText primary={text} />
          </ListItemButton>
        </Link>
      ))}
    </List>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1, backgroundColor: "#6f4e37" /* Coffee Brown */ }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, ...(isOpen && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            My Coffee Shop
          </Typography>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onClose={handleDrawerClose}
        onOpen={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            paddingTop: theme.mixins.toolbar.minHeight,
            backgroundColor: "#a58d7f", 
          },
        }}
      >
        {drawer}
      </SwipeableDrawer>
    </Box>
  );
};

export default SideBarLayout;
