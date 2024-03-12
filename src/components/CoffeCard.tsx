import { Button ,  Box, Card, CardMedia, CardContent, Typography, Chip, Avatar, Stack, Grid } from "@mui/material";

const CoffeeCard = ({ coffee }: any) => (
  <Card sx={{ width: '70%', bgcolor: 'warning.main', m: 2, boxShadow: 3, color: "black" , height:"60vh" }}>
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item xs={12} sm={7}>
        {coffee.image && <CardMedia component="img" height="200" image={coffee.image} alt={coffee.title} />}
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {coffee.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {coffee.description}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
            {coffee.ingredients.map((ingredient : string , index : string ) => (
              <Chip key={index} label={ingredient} variant="outlined" />
            ))}
          </Box>
        </CardContent>
      </Grid>
      <Grid item xs={12} sm={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Avatar src={coffee.user.image} alt={coffee.user.name} sx={{ width: 150, height: 150, mb: 2 }} />
        <Typography variant="subtitle1" sx={{ mb: 1 }}>{coffee.user.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {coffee.user.email}
        </Typography>
      </Grid>
    </Grid>

    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <Button variant="contained" href="/all-coffes"  size="medium">Back to coffees</Button>
    </Box>
  </Card> 
);

export default CoffeeCard;
