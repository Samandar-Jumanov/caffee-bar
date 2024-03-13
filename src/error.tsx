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
      bgcolor="error.main" // Use theme's error color
      color="white" // This ensures text color is white
    >
      <Typography variant="h4">Something went wrong</Typography>
    </Box>
  );
};
