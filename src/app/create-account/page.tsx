"use client"

import React, { useEffect, useState } from 'react';
import { Button, TextField, Grid, Paper, Typography, Container, CircularProgress } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import SignInButtons from '@/components/btns'; 
import { toast } from "react-hot-toast"

const SignupForm: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ name , setName ] = useState<string  >("")
  const [ email , setEmail ] = useState<string  >("")
  const [ password  , setPassword  ] = useState<string  >("")

  useEffect(() => {
    if (session) {
      router.push('/all-coffes'); 
    }
  }, [session, router]);
  

  const handleSignInWithGitHub = async () => {
    setIsLoading(true);
    try {
      await signIn('github');
      toast.success("Account created successfully")
    } catch (error : any ) {
      toast.error(`Cannot create an account ${error.message}`)
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
      try {
        await signIn('credentials', {
          redirect: true,
          email :email,
          password :password ,
          name : name ,
          signup: "true"
        });
        
        toast.success("Account created successfully")
      }catch(error : any ){
       toast.error(`Cannot create an account ${error.message}`)
      }
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
                onChange={(e :  React.ChangeEvent<HTMLInputElement>  ) => setName(e.target.value)}
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
                onChange={(e:  React.ChangeEvent<HTMLInputElement>  ) => setEmail(e.target.value)}
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
                onChange={(  e :  React.ChangeEvent<HTMLInputElement>  ) => setPassword(e.target.value)}
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
