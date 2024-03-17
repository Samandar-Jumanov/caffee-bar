"use client"

import { useState , useEffect} from "react"
import { getUserData } from "../../../actions/user";
import { Container, Paper,  Typography, Button } from "@mui/material";
import { IUser } from "@/types/types";
import  {UserAccount}  from "@/components/userAccount";
import { UserShared } from "@/components/userShared";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"

const UserAccountPage = async ({ params }: any) => {
   const userName = params.profileSlug;
   const [user , setUser ] = useState<IUser |null>(null)
   const { data : session } = useSession();
   const router = useRouter();

  //  if(!session) {
  //      toast.error("To continue please create an account ")
  //      router.push('/all-coffes')
  //  };

   useEffect(() =>{
       const fetchData = async () =>{
          const data= await getUserData(userName);
          setUser(data)
       }
       fetchData()
   } ,[])


 
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
      <Paper elevation={3} sx={{ mb: 4, p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px', bgcolor: '#FFF6E5' }}>
          <UserAccount user={user} />
      </Paper>
        < UserShared shared={user?.shared} />
    </Container>
  );
};

export default UserAccountPage;
