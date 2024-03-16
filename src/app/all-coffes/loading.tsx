"use client";

import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { keyframes } from '@mui/system';

const fadeInOut = keyframes`
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
`;

const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      flexDirection="column"
      sx={{
        backgroundColor: 'background.default',
        color: 'text.primary',
        marginTop : "50px"
      }}
    >
      <CircularProgress color="warning" />
      <Typography
        color="warning"
        sx={{
          marginTop: '20px',
          animation: `${fadeInOut} 2s ease-in-out infinite`,
        }}
      >
      </Typography>
    </Box>
  );
};

export default Loading;
