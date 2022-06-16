import { PrismaClient } from "@prisma/client";
import { Request, response, Response } from "express";
import PizzaService from "../services/PizzaService";


interface IRequest {
     name : string;
     price : number;
}


const prismaClient = new PrismaClient();
const pizzaService = new PizzaService();

export default class PizzaController {

        async create(req : Request , res : Response){
             const { name , price} : IRequest = req.body;
             await pizzaService.create({name,price});
             return res.status(201).send();
        }
        async list(req : Request , res : Response){
             const pizzas = await pizzaService.list();
             return res.status(200).json({
                 _count : pizzas.length,
                 pizzas
             })
        }

}