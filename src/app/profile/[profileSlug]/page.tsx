"use client"

import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Avatar, Paper, Box, useMediaQuery, useTheme , Button  } from '@mui/material';
import { getUserData } from "../../../actions/user";
import { IUser, IUserShared, ISharedCoffe } from "@/types/types";
import Image from "next/image"
// Assuming getUserData is an async function that fetches user data based on userName

const UserAccountPage = ({ params } : any ) => {
  const [user, setUser] = useState<IUser | null>(null);
  const userName = params.profileSlug;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData(userName);
      setUser(userData);
    };

    fetchData();
  }, [userName]);

  if (!user) {
    return (
      <Container sx={{ color: '#fff', textAlign: 'center', marginTop: 4, backgroundColor: '#000' }}>
        <Typography variant="h6">User not found</Typography>
      
      </Container>
    );
  }


  return (
    <Container maxWidth="lg" sx={{ mt: 4, backgroundColor: '#000', color: '#fff' }}>
      <Grid container spacing={isMobile ? 2 : 4}>
        <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar src={user.image || undefined} alt={user.name || ""} sx={{ width: 90, height: 90 }} />
          <Typography variant="h6" sx={{ mt: 2 }}>{user.name}</Typography>
          <Typography variant="body1">{user.email}</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {user.shared?.map((item: ISharedCoffe) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, backgroundColor: '#424242', color: '#fff' }}>
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography variant="body1" sx={{ marginTop: 1 }}>{item.description}</Typography>
                    {item.image && <Image src={item.image} alt={item.title} style={{ maxWidth: '100%', marginTop: '10px', borderRadius: '4px' }} />}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserAccountPage;
