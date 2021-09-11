import { Router } from "express";
import { CreateAdministradorController } from "../controllers/CreateAdministradorController";
import { CreateAdministradorSessionController } from "../controllers/CreateAdministradorSessionController";


const administradorRouter = Router();

const createAdministradorController = new CreateAdministradorController();
const createAdministradorSessionController = new CreateAdministradorSessionController();

administradorRouter.post("/", createAdministradorController.handle);
administradorRouter.post("/session", createAdministradorSessionController.handle);

export { administradorRouter }