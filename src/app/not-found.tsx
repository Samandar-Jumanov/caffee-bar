"use client"

import { Box, Typography, Button } from '@mui/material';

const Custom404  = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="background.default"
      color="text.primary"
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Oops! Something went wrong
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        The page you are  looking for does not exist 
      </Typography>
        <Button href="/"  variant="contained" color="primary">
          Go home  
        </Button>
    </Box>
  );
};

export default Custom404;
