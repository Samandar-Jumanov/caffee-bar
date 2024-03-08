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
  width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' }, 
  bgcolor: 'rgba(0, 0, 0, 0.8)',
  color: 'white',
  border: '2px solid #fff', 
  borderRadius: '8px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)', 
  p: { xs: 2, sm: 3, md: 4 }, 
  overflowY: 'auto' as 'auto',
  maxHeight: '90%',
  '& ul': {
    listStyle: 'none', 
    padding: 0,
  },
  '& li': {
    marginBottom: '8px',
  },
  '& button': {
    marginTop: '16px', 
  },
};

const ShareIngredients: React.FC<ShareIngredientsProps> = ({ data, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" marginBottom="16px">
          Ingredients
        </Typography>
        <ul>
          {Object.keys(data).map((key) => (
            <li key={key}>
              {key}: {data[key] ? 'Yes' : 'No'}
            </li>
          ))}
        </ul>
        <Button variant="contained" sx={{ marginRight: 1 }}>
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
