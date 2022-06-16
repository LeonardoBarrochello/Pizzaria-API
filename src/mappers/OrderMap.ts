import { Order , OrderItem , Pizza } from "@prisma/client";
import { ICreateOrderDto } from "../dtos/ICreateOrderDto";


interface IOrderItem  extends OrderItem { 
      pizza : Pizza
 } 

interface IOrder extends Order {
     orderItems : IOrderItem[]
}    

export default class OrderMap {

     static ToDto({items} : ICreateOrderDto){
          var orderMapped = items.map((element) => {    
               return {          
                    pizzaId : element.pizza.id,     
                    quantity : element.quantity
               }
          })

          return orderMapped;
        
     }

     static ListOrdersDto( orders : IOrder[]){
          var ordersMapped = {
                count : 0,
                orders : []
          }
          ordersMapped.orders = orders.map((element) => {                 
               return {          
                    id : element.id,                   
                    items :  element.orderItems.map((element) => {
                         return {
                               id : element.id ,
                               pizza : element.pizza
                         }
                    }),
               }
          })

          ordersMapped.count = ordersMapped.orders.length

          return ordersMapped;
        
     }
}