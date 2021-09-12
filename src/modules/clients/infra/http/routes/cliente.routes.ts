import { Router } from "express";
import { CreateClientController } from "../controllers/CreateClientController";


const clientRouter = Router();

const createClientController = new CreateClientController();

clientRouter.post("/", createClientController.handle);

export { clientRouter }