"use client"

import React from 'react';
import { Container, Button } from '@mui/material';
import { useSession } from "next-auth/react";
import { UserAccount } from "@/components/userAccount";

// Removed async since React components shouldn't be async
const UserAccountPage = ({ params } : any ) => {
  const { data: session } = useSession();
  const userName = params.profileSlug;

  return (
    <div>
      {!session?.user ? (
        <Container sx={{
          textAlign: 'center', mt: '-2px', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
        }}>
          <Button href="/create-account" variant="contained" sx={{ mt: 2 }}>
            To continue please, sign in
          </Button>
        </Container>
      ) : (
        <UserAccount userName={userName} />
      )}
    </div>
  );
};

export default UserAccountPage;
