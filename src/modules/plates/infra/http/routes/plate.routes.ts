import { Router } from "express";
import multer from 'multer';
import uploadConfig from "../../../../../config/upload";
import { isAdmin } from "../../../../../shared/infra/middlewares/isAdmin";
import { CreatePhotoController } from "../controllers/CreatePhotoController";
import { CreatePlateController } from "../controllers/CreatePlateController";
import { DeletePlateController } from "../controllers/DeletePlateController";
import { FilterPlateNameController } from "../controllers/FilterPlateNameController";
import { FindAllPlatesController } from "../controllers/FindAllPlatesController";

const plateRouter = Router();
const upload = multer(uploadConfig);

const createPlateController = new CreatePlateController();
const filterPlateNameController = new FilterPlateNameController();
const createPhotoController = new CreatePhotoController();
const findAllPlatesController = new FindAllPlatesController();
const deletePlateController = new DeletePlateController();

plateRouter.post("/", isAdmin, createPlateController.create);
plateRouter.get("/name", filterPlateNameController.handle);
plateRouter.patch("/photo/:id", upload.single('photo_plate'), createPhotoController.update);
plateRouter.get("/", findAllPlatesController.handle);
plateRouter.delete("/:id", deletePlateController.handle);

export { plateRouter }