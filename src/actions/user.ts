import prisma from "../../prisma/prisma"
import { IUser } from  "@/types/types"


export const getUserData = async (  userName : string ) : Promise<IUser | null > =>{
       try {
          const user : IUser | any = await prisma.user.findUnique({
              where : { name  : userName },
              include : { shared : true }
          })
          

 
          return user   ? user : null
       }catch(err : any ){
              console.log(err) 
              return null 
       }
}


