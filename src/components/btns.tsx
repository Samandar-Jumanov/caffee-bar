import React from 'react';
import { Button, Stack } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IBtns } from "@/types/types"

 const SignInButtons = ({  onGithubSignIn } : IBtns ) => (
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
      onClick={onGithubSignIn}
      startIcon={<GitHubIcon />}
    >
      Continue with Github
    </Button>
  </Stack>
);




export  default SignInButtons