"use client"

import React from 'react';
import { TableRow, TableCell, IconButton, Hidden } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


const IngredientsTableRow: React.FC<{ ingredient: { name: string; price: number; quantity: string; }, chosen: { [key: string]: boolean }, handleAddClick: (name: string) => void }> = ({ ingredient, chosen, handleAddClick }) => (
    <TableRow hover sx={{
        '&:hover': {
            backgroundColor: '#BCAAA4',
        },
        '& .MuiTableCell-body': {
            color: '#5D4037',
        },
    }}>
        <TableCell>
            {ingredient.name}
            <IconButton
                color="info"
                aria-label={chosen[ingredient.name] ? "remove" : "add"}
                size="small"
                onClick={() => handleAddClick(ingredient.name)}
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
