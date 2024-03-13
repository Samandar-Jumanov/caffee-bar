import React from "react";
import { Box, Grid, Card, CardContent, Typography, CardActions } from "@mui/material";
import { getAllShared } from "@/actions/shared";
import { ViewDetailsBtn } from "@/components/viewDetailsBtn";
import { ISharedCoffe } from "@/types/types";

const AllCoffees = async () => {
  const allShared = await getAllShared();

  const isSharedArray = Array.isArray(allShared);

  return (
    <>
      <Box padding={3} sx={{ marginTop: '60px' }}>
        <Grid container spacing={4}>
          {isSharedArray ? (
            allShared.map((shared: ISharedCoffe) => (
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
                    <ViewDetailsBtn coffeId={shared.id} />
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="h6" color="error" sx={{ textAlign: 'center', width: '100%' }}>
              {allShared} 
            </Typography>
          )}
        </Grid>
      </Box>
    </>
  );
};

export default AllCoffees;