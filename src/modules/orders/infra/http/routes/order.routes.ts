import { Router } from "express";
import { CreateOrderController } from "../controllers/CreateOrderController";
import { FindAllOrdersController } from "../controllers/FindAllOrdersController";
import { FindOrderByIdClientController } from "../controllers/findOrderByIdClientController";



const orderRouter = Router();

const createOrderController = new CreateOrderController();
const findAllOrdersController = new FindAllOrdersController();
const findOrderByIdClientController = new FindOrderByIdClientController();

orderRouter.post("/", createOrderController.handle);
orderRouter.get("/", findAllOrdersController.handle);
orderRouter.get("/filterClient", findOrderByIdClientController.handle);


export { orderRouter }