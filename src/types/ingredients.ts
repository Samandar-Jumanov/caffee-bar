export interface Ingredient {
    name: string;
    price: number;
    quantity: number;
}



type IValue = {
      quantity : string ,
      price : number 
}

export interface IChosenIngredient  {
       name : string ,
       value?  : IValue
}


