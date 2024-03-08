"use client"
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Hidden, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; // Import MUI add icon
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'; // Import MUI remove icon
import data from '@/utils/ingredients-data'; // Ensure this path is correct for your project structure

const IngredientsTable: React.FC = () => {
    const [chosen, setChosen] = useState<{ [key: string]: boolean }>({});
    
    console.log({
           chosen : chosen 
    });
    
    const handleAddClick = (name: string) => {
        setChosen((prevChosen) => ({
            ...prevChosen,
            [name]: !prevChosen[name], 
        }));

    };

    return (
        <TableContainer component={Paper} sx={{
            mt: 2,
            overflowX: 'auto',
            maxHeight: { xs: '60vh', sm: '70vh', md: '80vh' },
            backgroundColor: '#FFF8E1',
            '& .MuiTableHead-root': {
                backgroundColor: '#6D4C41',
            },
            '& .MuiTableCell-head': {
                color: 'white',
                fontWeight: 'bold',
            },
            '& .MuiTableRow-hover:hover': {
                backgroundColor: '#BCAAA4',
            },
            '& .MuiTableCell-body': {
                color: '#5D4037',
            },
        }}>
            <Table aria-label="ingredients table" sx={{ marginTop: "40px" }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Ingredient</TableCell>
                        <Hidden xsDown>
                            <TableCell align="right">Price ($)</TableCell>
                        </Hidden>
                        <TableCell align="right">Quantity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((ingredient) => (
                        <TableRow key={ingredient.name} hover>
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
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default IngredientsTable;
