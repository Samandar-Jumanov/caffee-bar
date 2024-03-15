"use server"

import prisma from "../../prisma/prisma"
import { ISharedCoffe , ICreatedSharedCoffe } from "@/types/types"
// import  saveToBucket from "@/utils/shareBucket";

export const getAllShared = async ( )  : Promise<ISharedCoffe[]  | string >=> {
       try {
        const getAllShared  : ISharedCoffe[]  | any= await prisma.shared.findMany({
            include : {
                user : true
            }
        });
  
        return getAllShared;
       }catch(err) {
          console.log(err)
          return "Something went wrong"
       }
}


export const getSharedById = async (id: string) : Promise<ISharedCoffe | string >  =>{
         try {
            const foundShared  : ISharedCoffe | any = await prisma.shared.findUnique({
                where : {
                    id : id
                },
                include : {
                    user : true
                }
            });

            if(!foundShared) return "Cannot find 404"
            return foundShared;

         }
         catch(err){
              return "Something went wrong"
         }
};



export const createShared = async (
    ingredients: string[],
    userEmail: string,
    title: string,
    description: string,
)  : Promise<ICreatedSharedCoffe | string | undefined  > => {
   

      try {
        if (!ingredients.length || !userEmail || !title || !description) {
            return  "Invalid inputs"
        }
    
        const user = await prisma.user.findUnique({
            where: { email: userEmail }
        });
    
        if (!user) {
            return  "User not found | Something went wrong"
        }
    
        // let imageUrl = "";
        
    
    
        const shared   = await prisma.shared.create({
            data: {
                title,
                description,
                ingredients,
                user: {
                    connect: {
                        id: user.id 
                    }
                }
            }
        });
    
        if (!shared) {
              return "Cannot create "
        }

        console.log({
               newShared : shared ,
               status : "Created"
        })
        
       return "Created"
      }catch(err : any ){
           return err.message
           console.log(err.message)
      }
};
