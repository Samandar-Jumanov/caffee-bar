"use client"

import React, { useEffect, useState } from 'react';
import { Button, TextField, Grid, Paper, Typography, Container, CircularProgress } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import SignInButtons from '@/components/btns'; 
import { createAccount } from '@/actions/user'; 
import { useGlobalContext } from "@/components/context"
import { ResponseType } from "@/types/types"

const SignupForm: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isAuthenticated , setIsAuthenticated  } = useGlobalContext();
   
  useEffect(() => {
    if (session) {
      router.push('/all-coffees'); 
    }
  }, [session, router]);

  const handleSignInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn('google');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignInWithGitHub = async () => {
    setIsLoading(true);
    try {
      await signIn('github');
    } catch (error) {
      console.error('Error signing in with GitHub:', error);
    } finally {
      setIsLoading(false);
    }
  };


  console.log(isAuthenticated)
  const handleSubmit = async (event :  any ) => {
      event.preventDefault(); 
      setIsLoading(true); 
      const formData = new FormData(event.currentTarget); 

      try {
      const res  : ResponseType  | undefined  =   await createAccount( formData ); 

      if(res?.success) {
        setIsAuthenticated(true)
        router.push('/all-coffes'); 
        setIsLoading(false)
        }

        if(!res?.success) {
            alert("Something went wrong")
        }

      } catch (error : any ) {
          console.log("Something went wrong", error)
      } finally {
        setIsLoading(false); 
      };
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={6} style={{ padding: '20px', marginTop: '80px', borderRadius: '15px', backgroundColor: '#fff8e1' }}>
        <Typography variant="h4" align="center" gutterBottom style={{ color: '#6d4c41' }}>
          Sign Up
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="name"
                name="name"
                label="Full Name"
                fullWidth
                variant="outlined"
                InputLabelProps={{ style: { color: '#5d4037' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                name="email"
                label="Email Address"
                fullWidth
                variant="outlined"
                InputLabelProps={{ style: { color: '#5d4037' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                InputLabelProps={{ style: { color: '#5d4037' } }}
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                color="warning"
                style={{ backgroundColor: '#6d4c41', color: '#ffffff' }}
                disabled={isLoading}
              >
                {isLoading ? <CircularProgress size={24} /> : 'Sign Up'}
              </Button>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <SignInButtons
                onGoogleSignIn={handleSignInWithGoogle}
                onGithubSignIn={handleSignInWithGitHub}
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Button variant="text" color="warning" href="/login">
                Already have an account?
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignupForm;
