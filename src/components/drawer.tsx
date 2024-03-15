"use client"
import React from 'react';
import { List, ListItemButton, ListItemText, Button } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import { useGlobalContext } from './context';
import Link from 'next/link';
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation"; // Fixed import statement

export const SideBarDrawer = () => {
  const { setOpen } = useGlobalContext();
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    if(session) {
      await signOut();
      toast.success("Logged out successfully");
    }
  };

  const profilePage = () => {
    const name = session?.user?.name;
    router.push(`profile/${name}`);
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
          <ListItemButton onClick={profilePage}>
            <ListItemText primary="Your Profile" />
          </ListItemButton>
        

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
