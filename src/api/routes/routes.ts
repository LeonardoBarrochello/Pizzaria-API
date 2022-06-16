import { Router } from "express";
import OrderController from "../../controllers/OrderController";
import PizzaController from "../../controllers/PizzaController";



const appRoutes = Router();

const pizzas = [
    {
      "name": "Margherita",
      "price": 5,
      "ingredients": [
        "tomato",
        "mozzarella"
      ]
    },
    {
      "name": "Bufala",
      "price": 6,
      "ingredients": [
        "tomato",
        "mozarella di bufala"
      ]
    },
    {
      "name": "Romana",
      "price": 5,
      "ingredients": [
        "tomato",
        "mozzarella",
        "anchovies",
        "oregano",
        "oil"
      ]
    },
    {
      "name": "Diavola",
      "price": 7.5,
      "ingredients": [
        "tomato",
        "mozzarella",
        "spicy salami"
      ]
    },
    {
      "name": "Pizza Bianca",
      "price": 5,
      "ingredients": [
        "mozzarella",
        "oregano"
      ]
    }
]

const pizzaController = new PizzaController();
const orderController = new OrderController();

appRoutes.get("/pizzas" , pizzaController.list)
appRoutes.post("/pizzas" , pizzaController.create)

appRoutes.get("/orders", orderController.list)

appRoutes.post("/orders", orderController.create)

appRoutes.get("/orders/:id",orderController.findById)



export default appRoutes;