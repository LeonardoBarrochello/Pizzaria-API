import { prisma, PrismaClient } from "@prisma/client";

interface ICreatePizza {
    name : string;
    price : number;
}

const prismaClient = new PrismaClient();

export default class PizzaService {
     async create( data : ICreatePizza) {    
        const { name , price } = data;
        await prismaClient.pizza.create({
                    data : {
                         name,
                         price
                    }
        })
    }
    async list(){
          const pizzas = await prismaClient.pizza.findMany();
          return pizzas;
    }
}
