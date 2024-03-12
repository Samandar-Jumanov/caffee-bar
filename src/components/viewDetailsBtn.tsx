"use client";

import { useRouter } from "next/navigation"
import { Button } from "@mui/material"

export const ViewDetailsBtn= ( coffeId : string ) => {
    const router = useRouter();

    const handleViewDetails = () =>{
           router.push(`coffe/${coffeId.coffeId}`)
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

