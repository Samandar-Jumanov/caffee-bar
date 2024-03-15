"use client"

import React from 'react';
import { List, ListItemButton, ListItemText, Button  } from '@mui/material';
import { signOut , useSession  } from 'next-auth/react';
import { useGlobalContext } from './context'
import Link from 'next/link';
import { toast } from "react-hot-toast"


export const SideBarDrawer = ( ) =>{
const {  setOpen , open  } = useGlobalContext();
const { data : session } = useSession();

const handleSignOut = async () =>{
    if(session) {
          await  signOut()
          toast.success("Logged out succesfully")
    }
}


const handleDrawerClose = () => {
    setOpen(false);
  };


return  (
<List>

  <Link href="/all-coffes" >
                <ListItemButton onClick={handleDrawerClose}>
                    <ListItemText primary="All coffes "/>
                  </ListItemButton>
  </Link>
  
  <Link href="/" >
                <ListItemButton onClick={handleDrawerClose}>
                    <ListItemText primary="Home "/>
                  </ListItemButton>
  </Link>

    {(session) ? (
        <>
      <Link href="/add-coffee" >
          <ListItemButton onClick={handleDrawerClose}>
              <ListItemText primary="Create ingredient"/>
            </ListItemButton>
       </Link>
       <ListItemButton onClick={handleDrawerClose}>
          <Button color="error" variant="contained"
           onClick={handleSignOut} size="medium">  
           Log out 
           </Button>
        </ListItemButton>
        </>

    ) : 
    
    <Button 
    href="/create-account"
       variant="contained"
        color="warning">
           Create account 
         </Button>
    }
</List>
);
}