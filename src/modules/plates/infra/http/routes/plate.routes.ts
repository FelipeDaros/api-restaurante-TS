import { Router } from "express";
import { CreatePlateController } from "../controllers/CreatePlateController";
import { FilterPlateNameController } from "../controllers/FilterPlateNameController";

const plateRouter = Router();

const createPlateController = new CreatePlateController();
const filterPlateNameController = new FilterPlateNameController();

plateRouter.post("/", createPlateController.create);
plateRouter.get("/", filterPlateNameController.handle);

export { plateRouter }