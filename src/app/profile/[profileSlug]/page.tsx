"use client"

import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import { getUserData } from "../../../actions/user";
import { Container, Grid, Typography, Avatar, Card, CardContent , Box, Button, Divider , CardActions  } from '@mui/material';
import  ExpandableText from "@/components/expand-text"
import { ViewDetailsBtn } from "@/components/viewDetailsBtn";
import Image from "next/image";
import { IUser, ISharedCoffe } from "@/types/types";

const UserAccountPage = ({ params }: any) => {
  const [user, setUser] = useState<IUser | null>(null);
  const userName = params.profileSlug;
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      const fetchUserData = async () => {
        try {
          const data: IUser | null = await getUserData(userName);
          setUser(data);
        } catch (err) {
          console.error("Something went wrong", err);
          setUser(null); 
        }
      };
      fetchUserData();
    }
  }, [session?.user, userName]);

  if (!session?.user) {
    return (
      <Container sx={{
        textAlign: 'center', mt: '-2px', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
      }}>
        <Typography>To continue please create an account</Typography>
        <Button href='/create-account' color="warning" variant="contained">Create account</Button>
      </Container>
    );
  }



  return (
    <Container maxWidth="lg" sx={{
      mt: '-30px', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Avatar src={user?.image || undefined} alt={user?.name || ""} sx={{ width: 90, height: 90, mb: 2, mx: 'auto' }} />
        <Typography variant="h6">{user?.name}</Typography>
        <Typography variant="body1">{user?.email}</Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center" sx={{ borderColor: "black" }}>
        {user?.shared && user?.shared.length === 0 ? (
          <Box sx={{ display: 'block', textAlign: 'center' }}>
            <Typography>You do not have any created ingredients.</Typography>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ mt: 2 }}>
              <Button href="/add-coffee" color="warning" variant="contained">Create a special ingredient</Button>
            </Box>
          </Box>
        ) : (
          user?.shared?.map((item: ISharedCoffe) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <ExpandableText  description={ item.description } />
                </Typography>
                <Typography variant="body2" color="warning">
                    By you  {item.user.name}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Ingredients: {item.ingredients.join(", ")}
                </Typography>
              </CardContent>
              <CardActions>
                <ViewDetailsBtn coffeId={item.id} />
              </CardActions>
            </Card>
          </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default  UserAccountPage;
