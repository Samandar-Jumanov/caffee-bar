import { Avatar, Typography, Paper, Box } from '@mui/material';
import { IUserAccount } from "@/types/types"

const UserProfile = ({ user } : IUserAccount) => (

  <Paper elevation={3} sx={{ padding: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
    <Avatar src={user.image ||  undefined} alt={user.name || ""} sx={{ width: 56, height: 56 }} />
       <Box>
      <Typography variant="h6">{user.name}</Typography>
      <Typography variant="body1">{user.email}</Typography>
      </Box>
  </Paper>
);


export default  UserProfile;
