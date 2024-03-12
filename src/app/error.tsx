"use client"


import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link'; 

function Error() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'background.default',
        color: 'text.primary', 
        p: 3, 
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Something went wrong! Please try again later.
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        If you continue to experience issues, please contact our support team.
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          Go Home
        </Button>
      </Link>
    </Box>
  );
}

export default Error;
