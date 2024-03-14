import React from "react"
import { revalidatePath } from "next/cache"



export const revalidate =  ( )  => {
             revalidatePath("/all-coffes", "layout")
};

