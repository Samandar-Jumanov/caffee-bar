
import { getUserData } from "../../../actions/user";
import { Container, Paper, Button , Grid , Card,  CardContent, Typography, Chip, Divider } from "@mui/material";
import { IUser } from "@/types/types";
import  {UserAccount}  from "@/components/userAccount";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { ISharedCoffe } from "@/types/types";
import Image from "next/image"




const defaultImageUrl = "https://i.pinimg.com/736x/09/52/e9/0952e9d8c44d9e1fcc1e9b6da06ca49c.jpg"
const UserAccountPage =  async  ({ params }: any) => {
   const userName = params.profileSlug;
    const user : IUser | null = await getUserData(userName);
 

 
  if (!user) {
    return (
      <Container maxWidth="lg" sx={{
        marginTop : "120px", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      }}>
        <Typography variant="h4"color="info" gutterBottom>  Something went wrong or User not found , Please try again later</Typography>
        <Button color="warning" size="large" href='/all-coffes' 
        variant="contained" 
        sx={{ mt: 2, backgroundColor: '#8C7B75', '&:hover': { backgroundColor: '#5A4238' } }}>
          All coffees
          </Button>
      </Container>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ mb: 4, p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px', bgcolor: '#ffb17a' }}>
          <UserAccount user={user} />
      </Paper>
    <Grid container spacing={2} justifyContent="center">
    {user?.shared?.length === 0 ? (
      <Typography>You have not shared any coffee recipes.</Typography>
    ) : (
      user?.shared?.map((item: ISharedCoffe) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card sx={{ maxWidth: 345, m: 'auto', bgcolor: '#49250B', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
 
          <Image
           src={item.image || defaultImageUrl}
           alt={item.title || 'Default Image Description'}
           height={140}
           width={140}
           layout="responsive"
/>

            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="white">
                {item.description}
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body2" color="white">
                Shared by: You
              </Typography>
              <Typography variant="body2" color="white" sx={{ mb: 2 }}>
                {new Date(item.createdAt).toLocaleDateString()}
              </Typography>
              {item.ingredients.map((ingredient : string , index : number , array : string[]) => (
                <Chip key={index} label={ingredient} variant="outlined" size="small" sx={{ mr: 0.5, mb: 0.5, color: 'white', borderColor: 'white' }} />
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

export default UserAccountPage;
