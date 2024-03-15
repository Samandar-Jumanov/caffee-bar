import { Grid, Paper, Typography, Box } from '@mui/material';
import { IUserShared , ISharedCoffe  } from "@/types/types"


const SharedItems = ({ items }  : IUserShared ) => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      {items.map((item : ISharedCoffe) => (
        <Grid item xs={12} key={item.id}>
         <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
            <Typography variant="h5">{item.title}</Typography>
             <Typography variant="body1" sx={{ marginTop: 1 }}>{item.description}</Typography>
            {item.image && <img src={item.image} alt={item.title} style={{ maxWidth: '100%', marginTop: '10px' }} />}
        </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);


export default SharedItems 