
import React from 'react';
import { TableRow, TableCell, IconButton, Hidden, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


const IngredientsTableRow: React.FC<{
    ingredient: any,
    chosen: { [key: string]: boolean },
    handleAddClick: (ingredientName: string) => void
  }> = ({ ingredient, chosen, handleAddClick }) => (
    <TableRow hover sx={{
        '&:hover': {
            backgroundColor: '#BCAAA4', 
        },
        '& .MuiTableCell-body': {
            color: '#5D4037',
        },
    }}>
        <TableCell>
            <Typography variant="body1">{ingredient.name}</Typography>
            <IconButton
                onClick={() => handleAddClick(ingredient.name)}
                color="info"
                aria-label={chosen[ingredient.name] ? "remove" : "add"}
                size="small"
                sx={{ ml: 1 }}
            >
                {chosen[ingredient.name] ? <RemoveCircleOutlineIcon color="error" /> : <AddCircleOutlineIcon />}
            </IconButton>
        </TableCell>
        <Hidden xsDown>
            <TableCell align="right">{ingredient.price.toFixed(2)}</TableCell>
        </Hidden>
        <TableCell align="right">{ingredient.quantity}</TableCell>
    </TableRow>
  );
  
export default IngredientsTableRow;
