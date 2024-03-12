import React  from "react";
import { Box, Grid, Card, CardContent, Typography, Button, CardActions } from "@mui/material";
import { getAllShared } from "@/actions/shared";
import { ViewDetailsBtn } from "@/components/viewDetailsBtn"

type CoffeeItem = {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
};

type SharedResponse = {
  allShared: CoffeeItem[];
};


const AllCoffes = async  () => {
      const allShared = await getAllShared();

  return (
    <>
    
      <Box padding={3}  sx={{ marginTop : '60px'}}>
        <Grid container spacing={4}>
          {allShared.map((shared) => (
            <Grid item xs={12} sm={6} md={4} key={shared.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {shared.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {shared.description}
                  </Typography>
                  <Typography variant="body2" color="warning">
                    {shared.user?.name}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    Ingredients: {shared.ingredients.join(", ")}
                  </Typography>
                </CardContent>
                <CardActions>
                  <ViewDetailsBtn  coffeId={shared.id}/>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default AllCoffes;
