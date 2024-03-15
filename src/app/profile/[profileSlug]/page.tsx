
import React  from 'react';
import {
  Avatar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  useTheme,
} from '@mui/material';
import ExpandableText from "@/components/expand-text";
import { ViewDetailsBtn } from "@/components/viewDetailsBtn";
import { IUser } from "@/types/types";
import { useRouter } from 'next/navigation';
import { getUserData } from "../../../actions/user";

const UserAccount =  async ( { params } : any ) => {


  const name  = await params.profileSlug.toString();
  const user : IUser | any  = await  getUserData(name  as string )

  const theme = useTheme();

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <Container>
      <Typography variant="h4" sx={{ color: theme.palette.common.white }}>{user.name || 'User Name'}</Typography>
      <Avatar src={user.image || ''} alt={user.name || 'User Avatar'}>
        {!user.image ? user.name?.[0] : null}
      </Avatar>
      <Typography variant="body1" sx={{ color: theme.palette.common.white }}>Email: {user.email}</Typography>
      <Grid container spacing={2}>
        {user.shared && user.shared.map((shared: any) => (
          <Grid item xs={12} sm={6} md={4} key={shared.id}>
            <Card sx={{ backgroundColor: theme.palette.grey[900] }}>
              <CardContent>
                <Typography variant="h5" component="div" sx={{ color: theme.palette.common.white }}>
                  {shared.title}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  <ExpandableText description={shared.description} />
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.warning.main }}>
                  {shared.user?.name || "Default User"}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2, color: theme.palette.common.white }}>
                  Ingredients: {shared.ingredients.join(", ")}
                </Typography>
              </CardContent>
              <CardActions>
                <ViewDetailsBtn coffeId={shared.id} />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UserAccount;
