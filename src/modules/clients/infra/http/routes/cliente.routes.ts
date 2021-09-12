import { Router } from "express";
import { CreateClientController } from "../controllers/CreateClientController";
import { UpdatePhotoClientController } from "../controllers/UpdatePhotoClientController";
import multer from "multer";
import uploadClient from "../../../../../config/uploadClient";
import { FindAllClientsController } from "../controllers/FindAllClientsController";
import { DeleteClientController } from "../controllers/DeleteClientController";

const clientRouter = Router();
const upload = multer(uploadClient);

const createClientController = new CreateClientController();
const updateClientController = new UpdatePhotoClientController()
const findAllClientsController = new FindAllClientsController();
const deleteClientController = new DeleteClientController();

clientRouter.post("/", createClientController.handle);
clientRouter.patch("/photo/:id", upload.single('photo_client'), updateClientController.handle);
clientRouter.get("/", findAllClientsController.handle);
clientRouter.delete("/:id", deleteClientController.handle);

export { clientRouter }