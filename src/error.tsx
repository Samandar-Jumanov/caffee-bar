"use client"

import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const Error = () => {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh" 
      bgcolor="error.main" 
      color="white" 
    >
      <Typography variant="h4">Something went wrong</Typography>
    </Box>
  );
};
