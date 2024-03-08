import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Hidden } from '@mui/material';
import data from '@/utils/ingredients-data'; // Make sure this path is correct

const IngredientsTable: React.FC = () => {
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
      <Table aria-label="ingredients table" sx={{
           marginTop : "40px"
      }}>
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
              <TableCell>{ingredient.name}</TableCell>
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
