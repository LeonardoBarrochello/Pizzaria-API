import { Request, response, Response } from "express";
import { ICreateOrderDto } from "../dtos/ICreateOrderDto";
import OrderMap from "../mappers/OrderMap";
import OrderService from "../services/OrderService";


const orderService = new OrderService();

export default class OrderController {
     async create( req : Request , res : Response){

        const { items } : ICreateOrderDto = req.body;
        
        await orderService.create({items});

        return res.status(201).send()
     }

     async list(req : Request , res : Response){

         const orders = await orderService.list(); 
         
         const ordersMapped = OrderMap.ListOrdersDto(orders);

         return res.status(200).json(ordersMapped);
   }
   async findById(req : Request , res : Response){
         const { id } = req.params;
         const order = await orderService.findById(Number(id));
         return res.status(201).json(order);
   }
}