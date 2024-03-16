import React from 'react';
import { Container, Grid, Typography, Avatar, Paper, Box, Button } from '@mui/material';
import { getUserData } from "../../../actions/user";
import { IUser, ISharedCoffe } from "@/types/types";
import Image from "next/image";

const UserAccountPage = async  ({ params } : any ) => {
  const userName = params.profileSlug;
  const user: IUser | null = await getUserData(userName);

  if (!user) {
    return (
      <Container sx={{
        bgcolor: 'black', color: 'white', textAlign: 'center', mt: '-2px', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
      }}>
        <Typography variant="h6">User not found</Typography>
        <Button href="/create-account" variant="contained" sx={{ mt: 2 }}>Please sign in to your account</Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{
      mt: 4, bgcolor: 'black', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
    }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Avatar src={user.image || undefined} alt={user.name || ""} sx={{ width: 90, height: 90, mb: 2 }} />
          <Typography variant="h6">{user.name}</Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>{user.email}</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {user.shared.length === 0 ? (
              <Typography>You do not  have any created ingredients</Typography>
            ) : (
              <Grid container spacing={2} justifyContent="center">
                {user.shared?.map((item: ISharedCoffe) => (
                  <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <Paper elevation={3} sx={{ p: 2, mb: 2, bgcolor: '#424242', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <Typography variant="h5" sx={{ textAlign: 'center' }}>{item.title}</Typography>
                      <Typography variant="body1" sx={{ mt: 1, textAlign: 'center' }}>{item.description}</Typography>
                      {item.image && (
                        <Box sx={{ maxWidth: '100%', mt: 2, borderRadius: '4px', overflow: 'hidden' }}>
                          <Image src={item.image} alt={item.title} width={200} height={200} layout="intrinsic" />
                        </Box>
                      )}
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserAccountPage;
