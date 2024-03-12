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



// Assuming the existence of `user` and `shared` models in your Prisma schema.
export const createShared = async (
    ingredients: string[],
    userEmail: string,
    title: string,
    description: string
)  => {
   

    if (!ingredients.length || !userEmail || !title || !description) {
        return { message: "Invalid inputs" };
    }

      console.log("Started ")
    const user = await prisma.user.findUnique({
        where: { email: userEmail },
        include: { shared: true }
    });

    if (!user) {
        return { message: "User not found | Something went wrong" };
    }

    console.log("User found ")
    const shared = await prisma.shared.create({
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
        return { message: "Shared not created | Something went wrong" };
    }

    console.log("created")


    return { message: "Created" };
};
