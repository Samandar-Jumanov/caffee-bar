"use client"

import { Button, Stack, Typography } from '@mui/material';
import { ChangeEvent  } from 'react';
import { useGlobalContext } from "./context"
import { toast } from "react-hot-toast";

const ImageUploader = () => {
    const { selectedFile,  setSelectedFile } = useGlobalContext()  

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file && file.size < 5242880 && file.type.startsWith('image/')) {
      setSelectedFile(file);
    } else {
      toast.error('Please select an image file that is less than 5MB');
    }
  };

  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h6">Upload Coffee Ingredient Image</Typography>
      <Button
        variant="contained"
        component="label"
      >
        Upload File
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleFileChange}
        />
      </Button>
      {selectedFile && (
        <Typography>{selectedFile.name}</Typography>
      )}
    </Stack>
  );
};

export default ImageUploader;
