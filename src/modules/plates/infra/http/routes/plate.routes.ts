import { Router } from "express";
import multer from 'multer';
import uploadConfig from "../../../../../config/upload";
import { isAdmin } from "../../../../../shared/infra/middlewares/isAdmin";
import { CreatePhotoController } from "../controllers/CreatePhotoController";
import { CreatePlateController } from "../controllers/CreatePlateController";
import { FilterPlateNameController } from "../controllers/FilterPlateNameController";

const plateRouter = Router();
const upload = multer(uploadConfig);

const createPlateController = new CreatePlateController();
const filterPlateNameController = new FilterPlateNameController();
const createPhotoController = new CreatePhotoController();

plateRouter.post("/", isAdmin, createPlateController.create);
plateRouter.get("/", filterPlateNameController.handle);
plateRouter.patch("/photo/:id",  upload.single('photo_plate'), createPhotoController.update);

export { plateRouter }