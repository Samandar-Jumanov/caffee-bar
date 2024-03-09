"use server"
import prisma from "../../prisma/prisma"

export const getAllShared = async ( ) =>{
      const getAllShared = await prisma.shared.findMany({
          include : {
              user : true
          }
      });

      return getAllShared;

}

export const getSharedById = async (id: string) =>{
    const getSharedById = await prisma.shared.findUnique({
        where : {
            id : id
        },
        include : {
            user : true
        }
    });

    return getSharedById;
};




export const createShared = async ( formData : FormData , ingredients : string[] , userId : string ) =>{
      const user = await prisma.user.findUnique({
          where : { id : userId },
          include : { shared : true}
      });

      if(!user) {
           return { message :"User not found | Something went wrong "}
      }


     const title   = formData.get('title');
     const description = formData.get('description');
     const image = formData.get('image');

        const shared = await prisma.shared.create({
            data : {
                title : title as string,
                description : description as string,
                ingredients  : ingredients as string[],
                image : image as string,
                user : {
                    connect : {
                        id : userId
                    }
                }
            }
        });

        if(!shared) {
            return { message : "Shared not created | Something went wrong"}
        }

        await prisma.user.update({
              where : { id : userId },
              data : {
                  shared : {
                      connect : {
                          id : shared.id
                      }
                  }
              }
        })
        return { message : "Shared created successfully" }
};






