"use client"

import { Box, Typography , Button } from '@mui/material';

function Error() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor : "black"
      }}
    >
      <Typography variant="h4" component="h1" color="warning">
         Something went wrong! Please try again later
         <Button href="/" color="warning"> 
              Go home 
        </Button>
      </Typography>
    </Box>
  );
}



export default Error;
