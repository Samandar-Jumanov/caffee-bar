"use client"

import React, { useState , useEffect } from 'react';
import { Table, TableContainer, Paper, Box , Button  } from '@mui/material';
import IngredientsTableHead from "@/components/tableHead";
import IngredientsTableRow from "@/components/tableRow";
import ShareIngredients from "@/components/share-ingrdients"
import data from '../../utils/ingredients-data';
import { useSession } from "next-auth/react"
import {CreateAccountPage} from "@/components/account-create"

const IngredientsTableContainer: React.FC =  () => {
    const { data : session } = useSession();
    const [chosen, setChosen] = useState<{ [key: string]: boolean }>({});
    const [close, setClose] = useState<boolean>(false);

   if(!session){
      return  <CreateAccountPage /> 
   }

    const handleOnClose = () => {
        setClose(false);
    };

    const handleAddClick = (name: string) => {
        setChosen((prevChosen) => ({
            ...prevChosen,
            [name]: !prevChosen[name],
        }));
    };

    const chosenIngredients : any[] = Object.values(chosen).filter(value => value);


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
                            handleAddClick={() => handleAddClick(ingredient.name)}
                        />
                    ))}
                </tbody>
            </Table>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: 2 }}>
        {chosenIngredients.length >= 2 && 
        <Button 
        onClick={() => setClose(true)}
        color="warning" 
        variant="contained"
         >  
         Share this 
         </Button>}
            </Box>
            {close && <ShareIngredients data={chosen} onClose={handleOnClose} open={close} />}
        </TableContainer>
    );
};

export default IngredientsTableContainer;
