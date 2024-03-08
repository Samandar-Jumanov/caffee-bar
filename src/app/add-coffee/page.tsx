"use client"

import React, { useState } from 'react';
import { TableContainer, Paper, Box } from '@mui/material';
import IngredientsTableHead from "@/components/tableHead";
import IngredientsTableRow from "@/components/tableRow";
import ShareButton from "@/components/shareBtn";

import data from '@/utils/ingredients-data';

const IngredientsTableContainer: React.FC = () => {
    const [chosen, setChosen] = useState<{ [key: string]: boolean }>({});
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
            <IngredientsTableHead />
            {data.map((ingredient : any ) => (
                <IngredientsTableRow
                    key={ingredient.name}
                    ingredient={ingredient}
                    chosen={chosen}
                    handleAddClick={handleAddClick}
                />
            ))}
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: 2 }}>
                {numberOfChosen >= 2 && <ShareButton />}
            </Box>
        </TableContainer>
    );
};

export default IngredientsTableContainer;
