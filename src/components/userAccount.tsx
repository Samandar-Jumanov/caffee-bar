
import { getUserData } from './../actions/user';
import { Container, Grid, Typography, Avatar, Paper, Box, Button } from '@mui/material';
import Image from "next/image";
import { IUser, ISharedCoffe } from "@/types/types";

type UserSlug  = {
       userName : string 
}

export const UserAccount = async ( { userName }: UserSlug) => {
   const user : IUser | null  = await getUserData(userName)

   if(!user){
    <Container sx={{
        textAlign: 'center', mt: '-2px', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
      }}>
           <Typography>  Something went wrong , Please try again later </Typography>
           <Button href='/all-coffes' color="warning" variant="outlined">  All coffes </Button>
      </Container>
   }

   return (
    
    <Container maxWidth="lg" sx={{
        mt: 4, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
      }}>
       
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Avatar src={user?.image || undefined} alt={user?.name || ""} sx={{ width: 90, height: 90, mb: 2, mx: 'auto' }} />
          <Typography variant="h6">{user?.name}</Typography>
          <Typography variant="body1">{user?.email}</Typography>
        </Box>
  
       
        <Grid container spacing={2} justifyContent="center">
          {user?.shared.length === 0 ? (
            <Typography>You do not have any created ingredients.</Typography>
          ) : (
            user?.shared?.map((item: ISharedCoffe) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Paper elevation={3} sx={{ p: 2, mb: 2, bgcolor: '#424242', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="h5" sx={{ textAlign: 'center' }}>{item.title}</Typography>
                  <Typography variant="body1" sx={{ mt: 1, textAlign: 'center' }}>{item.description}</Typography>
                  {item.image && (
                    <Box sx={{ maxWidth: '100%', mt: 2, borderRadius: '4px', overflow: 'hidden' }}>
                      <Image src={item.image} alt={item.title} width={200} height={200} layout="intrinsic" />
                    </Box>
                  )}
                </Paper>
              </Grid>
            ))
          )}
        </Grid>
      </Container>

   )
}