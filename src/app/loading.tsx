"use client"

import React from 'react';
import { Box, Typography } from "@mui/material";

 const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <Typography color="warning">Loading....</Typography>
    </Box>
  );
};


export default  Loading 
