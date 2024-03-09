"use client"

import React, { useState } from 'react';
import {
  List, ListItemButton, ListItemText, CssBaseline, AppBar, Toolbar, 
  Typography, IconButton, Box, SwipeableDrawer, useTheme , Button 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

interface SideBarLayoutProps {}

const drawerWidth = 240;

const SideBarLayout: React.FC<SideBarLayoutProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const theme = useTheme();
  const { data : session } = useSession();


  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  };


  const handleDrawerClose = () => {
    setIsOpen(false);
  };


  const drawer = (
    <List>
        <Link href="/about" >
          <ListItemButton onClick={handleDrawerClose}>
            <ListItemText primary="About us "/>
          </ListItemButton>
        </Link>

        <Link href="/coffes" >
          <ListItemButton onClick={handleDrawerClose}>
            <ListItemText primary="Coffes"/>
          </ListItemButton>
        </Link>

        { !session ?  (
          <Button href="/create-account"
           variant="contained"
            color="warning"> Create account  </Button>
             )  : 
          <Button color="error"
           variant="contained" 
           onClick={signOut} >  Sign out   </Button>
        }
        
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
           Coffee Shop 
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
