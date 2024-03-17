"use client"

import React  , { useState  , useEffect}from "react";
import { Box, Grid, Card, CardContent, Typography, CardActions , Button   } from "@mui/material";
import { getAllShared } from "@/actions/shared";
import { ViewDetailsBtn } from "@/components/viewDetailsBtn";
import { ISharedCoffe   } from "@/types/types";
import Link from "next/link"
import  ExpandableText from "@/components/expand-text"


const AllCoffees =  async  () => {
  const [allShared, setAllShared] = useState<ISharedCoffe[] | string>([]);

  useEffect(() => {
    const fetchAllShared = async () => {
      const allShared = await getAllShared();
      setAllShared(allShared);
    };
    fetchAllShared();
  }, []);


  const isSharedArray = Array.isArray(allShared);
 
  // fix styling 
  
  return (
    <>
     {isSharedArray ? (
      <Box  sx={{ marginTop: '80px' }}>
             <Grid container spacing={4} sx={{ background : "#775B3E" , padding : "20px"}}>
            {allShared.map((shared: ISharedCoffe) => (
              <Grid item xs={12} sm={6} md={4} key={shared.id} >
                <Card sx = {{ background : "#FFFAD6"}}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {shared.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <ExpandableText  description={ shared.description } />
                    </Typography>
                    <Typography variant="body2" color="warning">
                      {shared.user.name || "Default User "}
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
        )) }
          </Grid>
      </Box>
         
          ) : 

          (
            <Box
            sx={{
              display: 'flex',
              flexDirection: 'column', 
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              backgroundColor: 'background.default',
              color: 'text.primary', 
              p: 3, 
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Something went wrong! Please try again later.
            </Typography>
            <Link href="/" passHref>
              <Button variant="contained" color="primary">
                Go Home
              </Button>
            </Link>
          </Box>

          )}
         
    </>
  );
};

export default AllCoffees;
