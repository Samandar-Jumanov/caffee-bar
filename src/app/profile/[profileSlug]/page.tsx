import { getUserData } from "../../../actions/user";
import { Container, Paper, Grid, Typography, Button, Avatar, Divider, Chip, Card, CardContent, CardMedia } from "@mui/material";
import { IUser, ISharedCoffe } from "@/types/types";
import  {UserAccount}  from "@/components/userAccount";
import { UserShared } from "@/components/userShared";

const UserAccountPage = async ({ params }: any) => {
  const userName = params.profileSlug;
  const user: IUser | null = await getUserData(userName);

 
  if (!user) {
    return (
      <Container maxWidth="lg" sx={{
        mt: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      }}>
        <Typography variant="h4" gutterBottom>User not found, Please try again later</Typography>
        <Button color="warning" size="large" href='/all-coffees' variant="contained" sx={{ mt: 2, backgroundColor: '#8C7B75', '&:hover': { backgroundColor: '#5A4238' } }}>All coffees</Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ mb: 4, p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px', bgcolor: '#FFF6E5' }}>
          <UserAccount user={user} />
      </Paper>
        < UserShared shared={user?.shared} />
    </Container>
  );
};

export default UserAccountPage
