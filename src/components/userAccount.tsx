

import {   Box , Avatar , Typography  } from "@mui/material"
import { IUserAccount } from "@/types/types"


const userDefaultImage = "https://example.com/path/to/coffee-themed-default-image.jpg";

export const UserAccount = ({ user }:  IUserAccount | any   ) =>{
       return (
        <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Avatar src={user?.image || undefined} alt={user?.name || ""} 
         sx={{ width: 90, height: 90, mb: 2, mx: 'auto' }} />
        <Typography variant="h6">{user?.name}</Typography>
        <Typography variant="body1">{user?.email}</Typography>
      </Box>
       )
};


