"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import BarImage from "../../public/bar.jpg";

const HomePageComponent = () => {
  const theme = useTheme();
  const isMobile  : boolean = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{
      position: 'relative',
      height: '100vh',
      width: '100%',
      bgcolor: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column-reverse' : 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        height: '60%',
        width: '80%',
        backgroundColor: isMobile ? 'rgba(0,0,0,0.5)' : 'black', 
        color: "white",
        borderRadius: '12px', 
        overflow: 'hidden',
      }}>
        {isMobile ? (
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}>
            <Image
              src={BarImage}
              alt="Bar"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        ) : (
          <Box sx={{
            width: '50%',
            height: '100%',
            position: 'relative',
          }}>
            <Image
              src={BarImage}
              alt="Bar"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        )}

        <Box sx={{
          width: isMobile ? '100%' : '50%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: isMobile ? 'center' : 'flex-start',
          padding: isMobile ? '60px 20px 20px' : '20px', 
          zIndex: 2,
          textAlign: isMobile ? 'center' : 'left',
        }}>
          <Typography variant="h3" component="h1" sx={{ color: 'brown', mb: 4 }}>
             Share Bar
          </Typography>
          <Typography variant="h5" sx={{ color: 'white', mb: 2 }}>
            Discover our world-class cocktails and beverages
          </Typography>
          <Link href="/coffees" passHref>
            <Button variant="contained" color="warning" sx={{ zIndex: 2 }}>
              View Menu && Share a menu 
            </Button>
          </Link>
          <br />
          <Link href="/create-account" passHref>
            <Button variant="contained" color="warning" sx={{ zIndex: 2 }}>
             Continue with creating account 
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePageComponent;
