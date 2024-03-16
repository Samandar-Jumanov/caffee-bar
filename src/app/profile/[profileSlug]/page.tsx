"use client"

import React from 'react';
import { Container, Button } from '@mui/material';
import { useSession } from "next-auth/react"
import { UserAccount } from "@/components/userAccount"

const UserAccountPage = async ({ params }: any) => {
   const { data : session } = useSession()
   const userName = params.profileSlug


  if (!session?.user) {
    return (
      <Container sx={{
        textAlign: 'center', mt: '-2px', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
      }}>
        <Button href="/create-account" variant="contained" sx={{ mt: 2 }}>
          To continue please , sign in 
        </Button>
      </Container>
    );
  }

  return (
         <UserAccount userName={userName} />
  );
};

export default UserAccountPage;
