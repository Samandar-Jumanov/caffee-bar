"use client";

import { useRouter } from "next/navigation"
import { Button } from "@mui/material"
import  { Coffe } from "@/types/types"

export const ViewDetailsBtn= ( coffe : Coffe ) => {
    const router = useRouter();

    const handleViewDetails = () =>{
           router.push(`coffe/${coffe.coffeId}`)
    };

      return (
        <Button size="small" 
        variant="contained" 
        color="warning"
         onClick={handleViewDetails}
         >View Details
         </Button>
      )
}

