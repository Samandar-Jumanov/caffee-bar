import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

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
        Oops! somtheing went wrong
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        The page you're looking for doesn't exist.
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          Go home  
        </Button>
      </Link>
    </Box>
  );
};

export default Custom404;
