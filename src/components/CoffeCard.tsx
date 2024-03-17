import { Button, Box, Card, CardMedia, CardContent, Typography, Chip, Avatar, Stack, Grid, CardActions, IconButton } from "@mui/material";


const CoffeeCard = ({ coffee } : any ) => (
  <Card sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', m: 2, boxShadow: 3, color: "black", overflow: 'visible' }}>
    <Stack direction="row" spacing={2} sx={{ p: 2, alignItems: 'center' }}>
      <Avatar src={coffee?.user?.image} alt={coffee?.user?.name || "By you "} sx={{ width: 50, height: 50 }} />
      <Box>
        <Typography variant="subtitle1">{coffee?.user?.name || "By you "}</Typography>
        <Typography variant="body2" color="text.secondary">{new Date(coffee.createdAt).toLocaleDateString()}</Typography>
      </Box>
    </Stack>
    {coffee?.image && <CardMedia component="img" image={coffee?.image} alt={coffee.title} sx={{ maxHeight: 300, objectFit: 'cover' }} />}
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {coffee.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {coffee.description}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
        {coffee.ingredients.map((ingredient : string , index : string ) => (
           <Chip key={index} label={ingredient} variant="outlined" />
        ))}
      </Box>

      
    </CardContent>
    <CardActions disableSpacing sx={{ justifyContent: 'space-between' }}>
      {/* <Box>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>
      </Box> */}


    </CardActions>
  </Card>
);

export default CoffeeCard;
