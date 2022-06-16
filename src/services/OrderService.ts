import { PrismaClient } from "@prisma/client";
import AppError from "../api/errors/AppError";
import { ICreateOrderDto } from "../dtos/ICreateOrderDto";
import OrderMap from "../mappers/OrderMap";


const prismaClient = new PrismaClient();

export default class OrderService {

     async create({ items } : ICreateOrderDto) { 

        var orderItems = OrderMap.ToDto({items});

        await prismaClient.order.create({
            
                data: {
                    orderItems :{
                        create : orderItems 
                    }
                }
        })
     }
     async list (){ 
          var orders = await prismaClient.order.findMany({
              include : {
                 orderItems : {
                     include : {
                        pizza : true
                     }
                 }
              }
          });
          return orders; 
     }

     async findById(id:number) {
         const order = await prismaClient.order.findFirst({
             where : {
                 id
             },
             include :{ 
                orderItems : {
                     include : {
                        pizza  : true
                     }
                }
             }
         })

         if(!order){
             throw new AppError("order not found!")    
         }

         return order     
     }
}