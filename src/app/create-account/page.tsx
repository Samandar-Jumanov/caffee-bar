"use client"
import React  from 'react';
import { Button, TextField, Grid, Paper, Typography, Container } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { signIn } from "next-auth/react";
import { createAccount } from '@/actions/user';

const SignupForm: React.FC = () => {

  return (
    <Container maxWidth="sm">
      <Paper elevation={6} style={{ padding: '20px', marginTop: '80px', borderRadius: '15px', backgroundColor: '#fff8e1' }}>
        <Typography variant="h4" align="center" gutterBottom style={{ color: '#6d4c41' }}>
          Sign Up
        </Typography>
        <form noValidate autoComplete="off" action={createAccount}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="name"
                name="name"
                label="Full Name"
                fullWidth
                variant="outlined"
                InputLabelProps={{
                  style: { color: '#5d4037' },
                }}
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
                InputLabelProps={{
                  style: { color: '#5d4037' },
                }}
              />
            </Grid>

            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                color="warning"
                style={{ backgroundColor: '#6d4c41', color: '#ffffff' }}
              >
                Sign Up
              </Button>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Button
                type="button"
                variant="contained"
                color="primary"
                style={{ backgroundColor: '#6d4c41', color: '#ffffff' }}
                onClick={() => signIn("google")}
                startIcon={<GoogleIcon />}
              >
                Continue with Google
              </Button >
            </Grid>


            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Button
                variant="text"
                color="warning"
                href="/login"
              >
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
