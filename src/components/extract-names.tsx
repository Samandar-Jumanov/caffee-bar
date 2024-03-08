"use client"

import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { IChosenIngredient } from "@/types/ingredients";

interface ExtractIngredientNamesProps {
  data: IChosenIngredient[];
}

const ExtractIngredientNames: React.FC<ExtractIngredientNamesProps> = ({ data }) => {
  const [names, setNames] = useState<IChosenIngredient[]>(data);

  console.log({
     data: data 
  });

  const removeIngredient = (nameToRemove: string) => {
    const filteredNames = names.filter(ingredient => ingredient.name !== nameToRemove);
    setNames(filteredNames);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        p: 2, 
      }}
    >
      {names.length > 0 && names.map((ingredient) => (
        <Box key={ingredient.name} sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <Typography sx={{ marginRight: '8px', color: 'black' }}>{ingredient.name}</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => removeIngredient(ingredient.name)}
            sx={{ backgroundColor: 'blue' }} // This will be overridden by MUI's primary color, consider customizing theme for a permanent effect
          >
            X
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default ExtractIngredientNames;
