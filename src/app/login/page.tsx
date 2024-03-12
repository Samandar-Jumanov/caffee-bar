"use client"
import React, { useState, useEffect } from 'react';
import { Button, TextField, Grid, Paper, Typography, Container, CircularProgress } from '@mui/material';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"; 
import SignInButtons from "@/components/btns";
import { useSession } from "next-auth/react";
import { signInAccount } from '@/actions/user';
import { useGlobalContext } from "@/components/context";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { data: session } = useSession();
  const { isAuthenticated, setIsAuthenticated } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);

  if (session || isAuthenticated) {
    return <h1>Please sign out from your current account please</h1>;
  }

  const handleSignInWithGoogle = async () => {
    try {
      await signIn('google');
      router.push("/all-coffes")
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleSignInWithGitHub = async () => {
    try {
      await signIn('github');
      router.push("/all-coffes")
    } catch (err) {
      console.log(err);
      throw new Error("Something went wrong ");
    }
  };

  const handleSignIn = async (event : any ) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);

    try {
      const res = await signInAccount(formData);

      if (res.success) {
        router.push("/all-coffes"); 
        setIsAuthenticated(true);
      } else {
        alert(res.message); 
      }
    } catch (err) {
      alert("Something went wrong", err.message); 
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={6} style={{ padding: '20px', marginTop: '80px', borderRadius: '15px', backgroundColor: '#fff8e1' }}>
        <Typography variant="h4" align="center" gutterBottom style={{ color: '#6d4c41' }}>
          Login
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSignIn}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                name="email"
                label="Email Address"
                fullWidth
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{
                  style: { color: '#5d4037' },
                }}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputLabelProps={{
                  style: { color: '#5d4037' },
                }}
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Button 
                 color="warning" 
                 variant="contained" 
                 type="submit"
               >
                 {isLoading ? <CircularProgress size={24} /> : 'Log in '}
              </Button>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
             <SignInButtons
              onGoogleSignIn={handleSignInWithGoogle}
              onGithubSignIn={handleSignInWithGitHub}
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Button 
               href="/create-account" 
               color="warning"
              >
                Did not have an account 
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginForm;
