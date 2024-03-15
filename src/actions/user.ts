import prisma from "../../prisma/prisma"
import { IUser } from  "@/types/types"


export const getUserData = async (  name  : string ) : Promise<IUser | null > =>{
       console.log(name)
       try {
              await prisma.$connect().then(() =>{
                         console.log('Db connected ')
              }).catch(err => { console.log(err) })

              
          const user : IUser | any = await prisma.user.findUnique({
              where : { name  : name  },
              include : { shared : true }
          })
            
          console.log(user)
          return user   ? user : null
       }catch(err : any ){
              console.log(err) 
              return null 
       }
}


