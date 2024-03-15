
// Import necessary modules
import React from 'react';
import {Container ,  Typography } from "@mui/material";
import { getUserData } from "../../../actions/user";
import { IUser } from "@/types/types";
import UserProfile from "@/components/user";
import SharedItems from "@/components/sharedItems";

const UserAccount = async  (  { params } : any ) => {
  const userName = params.profileSlug;
  const user: IUser | any = await getUserData(userName);
  
  if (!user) {
    return (
      <Container>
        <Typography variant="h6" sx={{ color: '#ffffff', textAlign: 'center', marginTop: 4 }}>User not found</Typography>
      </Container>
    );
  }



  return (
    <Container maxWidth="md">
         <UserProfile  user={user}/>
       <SharedItems   items={user.shared || []} />
    </Container>
  );
};



export default UserAccount;
