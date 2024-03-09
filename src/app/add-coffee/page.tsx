"use client"
import React, { useState } from 'react';
import { Table, TableContainer, Paper, Box , Button  } from '@mui/material';
import IngredientsTableHead from "@/components/tableHead";
import IngredientsTableRow from "@/components/tableRow";
import ShareIngredients from "@/components/share-ingrdients"
import data from '@/utils/ingredients-data';


const IngredientsTableContainer: React.FC =  () => {
    const [chosen, setChosen] = useState<{ [key: string]: boolean }>({});
    const [close, setClose] = useState<boolean>(false);

    const handleOnClose = () => {
        setClose(false);
    };

    const handleAddClick = (name: string) => {
        setChosen((prevChosen) => ({
            ...prevChosen,
            [name]: !prevChosen[name],
        }));
    };

    const numberOfChosen = Object.values(chosen).filter(value => value).length;

    return (
        <TableContainer component={Paper} sx={{
            mt: 2,
            overflowX: 'auto',
            maxHeight: { xs: '60vh', sm: '70vh', md: '80vh' },
            backgroundColor: '#FFF8E1',
        }}>
            <Table aria-label="ingredients table" sx={{ marginTop: '40px'}}>
                <IngredientsTableHead />
                <tbody>
                    {data.map((ingredient) => (
                        <IngredientsTableRow
                            key={ingredient.name}
                            ingredient={ingredient}
                            chosen={chosen}
                            handleAddClick={handleAddClick}
                        />
                    ))}
                </tbody>
            </Table>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: 2 }}>
        {numberOfChosen >= 2 && 
        <Button 
        onClick={() => setClose(true)}
        color="warning" 
        variant="contained"
         >  
         Share this 
         </Button>}
            </Box>
            {close && <ShareIngredients data={chosen} onClose={handleOnClose} />}
        </TableContainer>
    );
};

export default IngredientsTableContainer;
