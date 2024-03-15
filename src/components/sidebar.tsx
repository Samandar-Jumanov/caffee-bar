"use client"

import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, IconButton, Box, SwipeableDrawer, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useGlobalContext } from './context';
import {SideBarDrawer} from './drawer'; 


const drawerWidth = 240;

const SideBarLayout = () => {
  const { open, setOpen } = useGlobalContext();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1, backgroundColor: '#6f4e37' /* Coffee Brown */ }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Share Bar
          </Typography>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        onOpen={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            paddingTop: theme.mixins.toolbar.minHeight + 1, 
            backgroundColor: '#a58d7f',
          },
        }}
      >
       
        <SideBarDrawer />
      </SwipeableDrawer>
    </Box>
  );
};

export default SideBarLayout;
