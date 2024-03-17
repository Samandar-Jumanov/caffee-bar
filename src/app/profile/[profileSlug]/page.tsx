import { getUserData } from "../../../actions/user";
import { Container, Paper, Grid, Typography, Button, Avatar, Divider, Chip, Card, CardContent, CardMedia } from "@mui/material";
import { IUser, ISharedCoffe } from "@/types/types";
import  {UserAccount}  from "@/components/userAccount";

const UserAccountPage = async ({ params }: any) => {
  const userName = params.profileSlug;
  const user: IUser | null = await getUserData(userName);

  const contentDefaultImage = "data:image/jpeg;base64,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"
 
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
      
      <Grid container spacing={2} justifyContent="center">
        {user.shared?.length === 0 ? (
          <Typography>You have not shared any coffee recipes.</Typography>
        ) : (
          user.shared?.map((item: ISharedCoffe) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card sx={{ maxWidth: 345, m: 'auto', bgcolor: '#FAF0E6', color: '#5A4238', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image || contentDefaultImage} 
                  alt={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    Shared by: {item.user?.name || 'You'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {new Date(item.createdAt).toLocaleDateString()}
                  </Typography>
                  {item.ingredients.map((ingredient, index) => (
                    <Chip key={index} label={ingredient} variant="outlined" size="small" sx={{ mr: 0.5, mb: 0.5, color: '#5A4238', borderColor: '#8C7B75' }} />
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default UserAccountPage
