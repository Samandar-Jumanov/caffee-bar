"use client"

import React from 'react';
import { List, ListItemButton, ListItemText, Button  } from '@mui/material';
import { signOut , useSession  } from 'next-auth/react';
import { useGlobalContext } from './context'
import Link from 'next/link';


export const SideBarDrawer = ( ) =>{
const { isAuthenticated , setIsAuthenticated , setOpen , open  } = useGlobalContext();
const { data : session } = useSession();

const handleSignOut = async () =>{
    if(session) {
          await  signOut()
    }else {
      setIsAuthenticated(false)
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

    {(session || isAuthenticated) ? (
        <>
      <Link href="/add-coffee" >
          <ListItemButton onClick={handleDrawerClose}>
              <ListItemText primary="Create ingredient"/>
            </ListItemButton>
       </Link>
       <Button color="error" onClick={handleSignOut}>  Log out  </Button>
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