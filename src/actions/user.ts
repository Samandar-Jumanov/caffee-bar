"use server"

import { hash , compare} from 'bcrypt'
import prisma from '../../prisma/prisma'
import { IUser , ResponseType } from '@/types/types'



export const createAccount = async ( formData : FormData ) =>{
  const response : ResponseType  = {
     success : false ,
     message : "" ,
  };
  

          try {
               const username = formData.get("name") as string 
               const email = formData.get("email") as string
               const password = formData.get("password") as string
           
               if(!username || !password || !email) {
                    response['success'] = false ;
                    response['message'] = "Please enter valid inputs"
                    return response
               }
        
               const exist = await prisma.user.findUnique({
                  where : { email : email}
               })
        
               if(exist) {
                    response['success'] = false ;
                    response['message'] = "Email is being used"
                    return response
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
                    response['success'] = true ;
                    response['message'] = "Created"
                    return response 
               }
        
          }catch(error : any  ) {
               response['success'] = false ;
               response['message'] = "Something went wrong"
               response['status'] = 500
               return response 
          }

}


export const signInAccount = async ( formData : FormData ) =>{
     const response : ResponseType  = {
          success : false ,
          message : "" ,
       };
       
       const email = formData.get("email")as string 
       const password = formData.get("password") as string 

       if(!email || !password ) {
            response['success'] = false ;
            response['message'] = "Invalid inputs"
            return response 
       }

       const user : IUser | null  = await prisma.user.findUnique({
            where : { email : email}
       });


       if(!user) {
             response['success'] = false ;
            response['message'] = "User not found  "
            return response 
       };



       const isValidPassword = await compare(password , user?.password as string );

       if(!isValidPassword ) {
          response['success'] = false ;
          response['message'] = "Invalid password"
          return response 
       };
       
        response['success'] = true ;
        response['message'] = "Logged in"
        return response 
};





