"use client"
import React from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';

type ShareIngredientsProps = {
  data: { [key: string]: boolean };
  open: boolean;
  onClose: () => void;
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto' as 'auto',
  maxHeight: '90%',
};

const ShareIngredients: React.FC<ShareIngredientsProps> = ({ data, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Ingredients
        </Typography>
        <ul>
          {Object.keys(data).map((key) => (
            <li key={key}>
              {key}: {data[key] ? 'Yes' : 'No'}
            </li>
          ))}
        </ul>
        <Button variant="contained"  sx={{ marginRight: 1 }}>
          Save
        </Button>
        <Button variant="outlined" onClick={onClose}>
          Back
        </Button>
      </Box>
    </Modal>
  );
};

export default ShareIngredients;
