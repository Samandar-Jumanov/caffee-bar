import React from 'react';
import { Button, Stack } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import GithubIcon from '@mui/icons-material/Github';
import { IBtns } from "@/types/types"
const SignInButtons = ({ onGoogleSignIn, onGithubSignIn } : IBtns ) => (
  <Stack direction="column" spacing={2} alignItems="center">
    <Button
      type="button"
      variant="contained"
      color="primary"
      sx={{
        backgroundColor: '#6d4c41', 
        color: '#ffffff', 
        '&:hover': {
          backgroundColor: '#5a4033', 
        },
      }}
      onClick={onGoogleSignIn}
      startIcon={<GoogleIcon />}
    >
      Continue with Google
    </Button>

    <Button
      type="button"
      variant="contained"
      color="primary"
      sx={{
        backgroundColor: '#6d4c41', 
        color: '#ffffff', 
        '&:hover': {
          backgroundColor: '#5a4033', 
        },
      }}
      onClick={onGithubSignIn}
      startIcon={<GithubIcon />}
    >
      Continue with Github
    </Button>
  </Stack>
);

export default SignInButtons;
