export interface Ingredient {
    name: string;
    price: number;
    quantity: number;
}


export type ChosenIngredient = {
       name : boolean 
}



export type  ResponseType   = {
    status  ? : number ,
    message : string ,
    success  : boolean
}



export type  IUser  ={
        id: string;
        name: string | null;
        email: string | null;
        emailVerified: Date | null;
        image: string | null;
        password: string | null;
        hashedPassword: string | null;
        createdAt: Date;
        updatedAt: Date;
}



export type  ICreatedSharedCoffe =  "Invalid inputs" |  "User not found | Something went wrong" | "Cannot create " | "Created"

export type ISharedCoffe = {
      title : string 
      description : string 
      ingredients : string[]
      user : IUser 
      image ? : string 
}

