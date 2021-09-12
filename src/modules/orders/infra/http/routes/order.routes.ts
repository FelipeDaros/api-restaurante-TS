import { Router } from "express";
import { CreateOrderController } from "../controllers/CreateOrderController";
import { FindAllOrdersController } from "../controllers/FindAllOrdersController";


const orderRouter = Router();

const createOrderController = new CreateOrderController();
const findAllOrdersController = new FindAllOrdersController();

orderRouter.post("/", createOrderController.handle);
orderRouter.get("/", findAllOrdersController.handle);


export { orderRouter }