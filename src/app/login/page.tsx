"use client"

import React, { useState, useEffect } from 'react';
import { Button, TextField, Grid, Paper, Typography, Container, CircularProgress } from '@mui/material';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"; 
import SignInButtons from "@/components/btns";
import { useSession } from "next-auth/react";
import { useGlobalContext } from "@/components/context";
import { toast } from "react-hot-toast"
const LoginForm: React.FC = () => {

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);



useEffect(() =>{
      if(session){
        router.push("/all-coffes")
      }
} , [session])

  const handleSignInWithGitHub = async () => {
    try {
      await signIn('github').
      then((res  : any ) =>{
        toast.success("Logged in succesfully")
        router.push("/all-coffes")
      }).catch(( error : any ) =>{
           toast.success("Something went wrong ")
          router.push("/")
      })
     
    } catch (error : any ) {
       toast.error(`Cannot log in yo your account ${error.message}`) 
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
      try {
        await signIn('credentials', {
          redirect: true,
          email : email as string ,
          password :password as string  ,
          signup: "false"
        }).then((res ) =>{
          toast.success("Logged in succesfully")
          router.push("/all-coffes")
        }).catch(( error : any ) =>{
             toast.success(error.message)
             router.push("/")
        })

        
      }catch(error : any ){
        toast.error(`Cannot create an account ${error.message}`) 
      }
  };


  return (
    <Container maxWidth="sm">
      <Paper elevation={6} style={{ padding: '20px', marginTop: '80px', borderRadius: '15px', backgroundColor: '#fff8e1' }}>
        <Typography variant="h4" align="center" gutterBottom style={{ color: '#6d4c41' }}>
          Login
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
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
                onChange={(e : any ) => setEmail(e.target.value)}
                InputLabelProps={{
                  style: { color: '#5d4037' }
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
                onChange={(e : any ) => setPassword(e.target.value)}
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
