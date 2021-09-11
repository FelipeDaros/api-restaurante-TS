import { Router } from "express";
import { plateRouter } from "../../../modules/plates/infra/http/routes/plate.routes";


const routes = Router();

routes.use("/plates", plateRouter)


export { routes }