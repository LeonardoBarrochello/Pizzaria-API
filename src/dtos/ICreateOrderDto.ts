

interface Pizza {
    id : number;
}

interface Item {
    pizza : Pizza;
    quantity : number
}

export interface ICreateOrderDto {
     items : Item[]
}