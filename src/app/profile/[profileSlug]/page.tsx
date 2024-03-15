import React from 'react';
import { Avatar, Typography, Container, Grid, Card, CardContent, CardActions } from '@mui/material';
import { getUserData } from "../../../actions/user";
import ExpandableText from "@/components/expand-text";
import { ViewDetailsBtn } from "@/components/viewDetailsBtn";
import { IUser } from "@/types/types";





const UserAccount   = async  ({ params  } : any) => {
  const email = await params.profileSlug.toString();

  const user : IUser | any  = await  getUserData(email as string )
  if (!user) return <div>User not found</div>;

  return (
    <Container>
      <Typography variant="h4">{user.name || 'User Name'}</Typography>
      <Avatar src={user.image || ''} alt={user.name || 'User Avatar'}>
        {!user.image ? user.name?.[0] : null}
      </Avatar>
      <Typography variant="body1">Email: {user.email}</Typography>
      <Grid container spacing={2}>
        {user.shared.map((shared : any ) => (
          <Grid item xs={12} sm={6} md={4} key={shared.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {shared.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <ExpandableText description={shared.description} />
                </Typography>
                <Typography variant="body2" color="warning">
                  {shared.user.name || "Default User"}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
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
