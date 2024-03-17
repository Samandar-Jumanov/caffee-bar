
import { getUserData } from "../../../actions/user";
import { Container,  Box  } from '@mui/material';
import { UserShared } from "@/components/userShared"
import { IUser  } from "@/types/types";
import { UserAccount } from "@/components/userAccount";


const UserAccountPage =  async ({ params }: any) => {
  const userName = params.profileSlug;
  const user : IUser | null = await getUserData(userName);

  return (
    <Container maxWidth="lg" sx={{
      mt: '120px', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    }}>
     
        <UserAccount user={user} />
        <UserShared  shared={user?.shared } />
    </Container>
  );
};

export default  UserAccountPage;
