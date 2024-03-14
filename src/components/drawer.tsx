"use client"

import React from 'react';
import { List, ListItemButton, ListItemText, Button  } from '@mui/material';
import { signOut , useSession  } from 'next-auth/react';
import { useGlobalContext } from './context'
import Link from 'next/link';
import { toast } from "react-hot-toast"


export const SideBarDrawer = ( ) =>{
const { isAuthenticated , setIsAuthenticated , setOpen , open  } = useGlobalContext();
const { data : session } = useSession();

const handleSignOut = async () =>{
    if(session) {
          await  signOut()
          toast.success("Logged out succesfully")
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
       <Button color="error" variant="contained" onClick={handleSignOut}>  Log out  </Button>
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