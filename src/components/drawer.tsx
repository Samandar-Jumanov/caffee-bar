"use client"

import React from 'react';
import { Divider, List, ListItemButton, ListItemIcon, ListItemText, Button, Typography } from '@mui/material';
import CoffeeIcon from '@mui/icons-material/Coffee';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut, useSession } from 'next-auth/react';
import { useGlobalContext } from './context';
import Link from 'next/link';
import MuiLink from '@mui/material/Link'; 
import { toast } from "react-hot-toast";

export const SideBarDrawer = () => {
  const { setOpen } = useGlobalContext();
  const { data: session } = useSession();

  const handleSignOut = async () => {
    if(session) {
      await signOut();
      toast.success("Logged out successfully");
    }
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <List>
      <ListItemButton >
          <MuiLink underline="none" color="inherit" sx={{ display: 'flex', width: '100%' }}>
            <ListItemIcon>
              <CoffeeIcon />
            </ListItemIcon>
             <Button sx={{  color : "black"}} onClick={handleDrawerClose} href="/all-coffes">  All coffes   </Button>
          </MuiLink>
      </ListItemButton>
      <Divider />
      {session ? (
        <>
          <ListItemButton onClick={handleDrawerClose}>
            
              <MuiLink underline="none" color="inherit" sx={{ display: 'flex', width: '100%' }}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <Button 
                sx={{  color : "black"}} onClick={handleDrawerClose} 
                href={`profile/${session?.user?.name}`}> 
                 Your profile   
                  </Button>

              </MuiLink>
           
          </ListItemButton>
          <Divider />
          
          <ListItemButton onClick={handleDrawerClose}>
            
            <MuiLink underline="none" color="inherit" sx={{ display: 'flex', width: '100%' }}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <Button 
              sx={{  color : "black"}} onClick={handleDrawerClose} 
              href='/add-coffe'> 
               Add coffe 
              </Button>

            </MuiLink>
         
        </ListItemButton>
        <Divider />

          <ListItemButton onClick={handleSignOut}>
            <Button
              color="error"
              variant="contained"
              size="medium"
              startIcon={<LogoutIcon />}
              sx={{ width: '100%' }}
            >
              Log out
            </Button>
          </ListItemButton>
        </>
      ) : (
        <ListItemButton onClick={handleDrawerClose}>
          <Link href="/create-account" passHref>
            <Button
              variant="contained"
              color="warning"
              size="medium"
              sx={{ width: '100%' }}
            >
              <Typography>Create Account</Typography>
            </Button>
          </Link>
        </ListItemButton>
      )}
    </List>
  );
};
