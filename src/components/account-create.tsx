import React from 'react';
import { Button, Box, Typography } from "@mui/material";

export const CreateAccountPage = () => {
  return (
    <Box
      sx={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        height: '100vh', 
        bgcolor: 'black',
        color: 'white',
      }}
    >
      <Typography variant="h4" gutterBottom component="div" sx={{ color: '#ffffff', marginBottom: 2 }}>
       To continue please open an account 
      </Typography>
      <Button
        href="/create"
        color="warning"
        variant="contained"
        sx={{
          backgroundColor: '#6d4c41', // Custom button color
          color: '#ffffff', // Text color
          '&:hover': {
            backgroundColor: '#5d4037', 
          },
        }}
      >
        Sign in to your account
      </Button>
    </Box>
  );
};
