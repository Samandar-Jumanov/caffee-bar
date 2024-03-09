"use server"

import { hash } from 'bcrypt'
import prisma from '../../prisma/prisma'




const connectDb = async ( ) =>{
         try {
              await prisma.$connect();
               console.log("db connected ")
         }catch(err : any ){
               console.log({
                      db : err.message
               })
         }
}


export const createAccount = async ( formData : FormData ) =>{
     await connectDb()
          try {
               const username = formData.get("name") as string 
               const email = formData.get("email") as string
               const password = formData.get("password") as string
           
               if(!username || !password || !email) return { message : "Please fill in all fields" }
        
               const exist = await prisma.user.findUnique({
                  where : { email : email}
               })
        
               if(exist) {
                    return  { message : "User already exists"}
               }
         

        
               const hashedPassword = await hash(password, 12);

               const newUser = await prisma.user.create(
                    {
                         data : {
                              name : username,
                              email : email,
                              password : hashedPassword
                         }
                    }
               )
        
               if(newUser) {
                    console.log({ user : "Can be created "})
                    return { message : "Account created successfully"}
               }
        
          }catch(error : any  ) {
                console.log({
                      userCreation : error.message 
                })
                      return { message : "Something went wrong"}
          }

}



