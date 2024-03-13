import React from "react"
import { revalidatePath } from "next/cache"



export const revalidate = async ( )  => {
        try {
            await revalidatePath("/all-coffes", "page")
        }catch(err : any ){
              console.log(err)
        }
};

