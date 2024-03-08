"use client"
import React from 'react';
import { TableHead, TableRow, TableCell, Hidden } from '@mui/material';

const IngredientsTableHead: React.FC = () => (
    <TableHead sx={{
        backgroundColor: '#6D4C41',
        '& .MuiTableCell-head': {
            color: 'white',
            fontWeight: 'bold',
        },
    }}>
        <TableRow>
            <TableCell>Ingredient</TableCell>
            <Hidden xsDown>
                <TableCell align="right">Price ($)</TableCell>
            </Hidden>
            <TableCell align="right">Quantity</TableCell>
        </TableRow>
    </TableHead>
);

export default IngredientsTableHead;
