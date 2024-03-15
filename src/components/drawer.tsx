"use client"

import React from 'react';
import { List, ListItemButton, ListItemText, Button } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import { useGlobalContext } from './context';
import Link from 'next/link';
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
       <Link href="/all-coffes">
        <ListItemButton onClick={handleDrawerClose}>
          <ListItemText primary="All Coffees" />
        </ListItemButton>
      </Link>

      {session ? (
        <>
          <Link href={`profile/${session?.user?.name}`}>
            <ListItemButton onClick={handleDrawerClose}>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </Link>

          <Link href="/add-coffee">
            <ListItemButton onClick={handleDrawerClose}>
              <ListItemText primary="Create Ingredient" />
            </ListItemButton>
          </Link>

          <ListItemButton onClick={handleDrawerClose}>
            <Button color="error" variant="contained" onClick={handleSignOut} size="medium">
              Log out
            </Button>
          </ListItemButton>

        </>
      ) : (

        <ListItemButton onClick={handleDrawerClose}>
          <Button 
            href="/create-account"
            variant="contained"
            color="warning"
          >
            Create Account
          </Button>
        </ListItemButton>
      )}

     
      
      
    </List>
  );
};
