

import { Button, Box, Card, CardMedia, CardContent, Typography, Chip, Avatar, Stack, Grid,  Divider } from "@mui/material";

import {  ISharedCoffe } from "@/types/types";


interface SharedProps {
      shared : ISharedCoffe[] | undefined 
}


const userDefaultImage =  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-icons-png.freepik.com%2F512%2F219%2F219988.png&tbnid=cbEWZWDGJr8grM&vet=10CIYBEDMooQFqFwoTCMjN3-Tj-oQDFQAAAAAdAAAAABAD..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ficon%2Fuser_219988&docid=Zme9QDZo5ZMJ3M&w=512&h=512&q=user%20image&client=firefox-b-d&ved=0CIYBEDMooQFqFwoTCMjN3-Tj-oQDFQAAAAAdAAAAABAD"
export const UserShared = (  { shared }  : SharedProps) => {
       return (
        <Grid container spacing={2} justifyContent="center" sx={{ borderColor: "black" }}>
        {shared?.length === 0 ? (
          <Box sx={{ display: 'block', textAlign: 'center' }}>
            <Typography>You do not have any created ingredients.</Typography>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ mt: 2 }}>
              <Button href="/add-coffee" color="warning" variant="contained">Create a special ingredient</Button>
            </Box>
            
          </Box>
        ) : (
         shared?.map((item: ISharedCoffe) => (
          <Card sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', m: 2, boxShadow: 3, color: "black", overflow: 'visible' }} key={item.id}>
          <Stack direction="row" spacing={2} sx={{ p: 2, alignItems: 'center' }}>
            <Avatar src={item?.user?.image || userDefaultImage } alt={item?.user?.name || "By you "} sx={{ width: 50, height: 50 }} />
            <Box>
              <Typography variant="subtitle1">{item?.user?.name || "By you "}</Typography>
              <Typography variant="body2" color="text.secondary">{new Date(item?.createdAt).toLocaleDateString()}</Typography>
            </Box>
          </Stack>
          {item?.image && <CardMedia component="img" image={item?.image} alt={item.title} sx={{ maxHeight: 300, objectFit: 'cover' }} />}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
              {item.ingredients.map((ingredient : string , index :  number  , array: string[] ) => (
                 <Chip key={index} label={ingredient}  variant="outlined" />
              ))}
            </Box>
      
            
          </CardContent>
         
        </Card>
          ))
        )}
      </Grid>
       )
}