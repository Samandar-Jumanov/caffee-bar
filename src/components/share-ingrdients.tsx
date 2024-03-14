"use client"

import React, { useState } from 'react';
import { Modal, Box, Button, Typography, TextField } from '@mui/material';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Corrected import
import { createShared } from "@/actions/shared";
import { revalidate } from "@/utils/sharebtn"

type ShareIngredientsProps = {
  data: { [key: string]: boolean };
  open: boolean;
  onClose: () => void;
};

const style = {
  position: 'absolute',
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
  overflowY: 'auto',
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

const ShareIngredients: React.FC<ShareIngredientsProps> = ({ data, open, onClose }) => {
    const { data: session } = useSession();
    const [title, setTitle] = useState('');

    const [description, setDescription] = useState('');
    const router = useRouter(); 
    const userEmail = session?.user?.email; 

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(userEmail) {
            try {
                const selectedIngredients = Object.keys(data).filter(key => data[key]);
                const res = await createShared(selectedIngredients, userEmail, title, description);
                if(res == "Created") {
                    onClose()
                    revalidate()
                    router.push("/all-coffes"); 
                }
            } catch (error) {
                console.error("Failed to share ingredients", error);
            }
        }
    };
    

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style} component="form" onSubmit={handleSubmit}>
        <Typography id="modal-modal-title" variant="h6" component="h2" marginBottom="16px">
          Share Ingredients
        </Typography>
        <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            color="secondary"
            required
        />
        <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={4}
            margin="normal"
            variant="outlined"
            color="secondary"
            required
        />
        <ul>
          {Object.keys(data).map((key) => (
            <li key={key}>
              {key}: {data[key] ? 'Yes' : 'No'}
            </li>
          ))}
        </ul>
        <Button type="submit" variant="contained" sx={{ marginRight: 1 }}>
          Share
        </Button>
        <Button variant="outlined" onClick={onClose}>
          Back
        </Button>
      </Box>
    </Modal>
  );
};

export default ShareIngredients;
