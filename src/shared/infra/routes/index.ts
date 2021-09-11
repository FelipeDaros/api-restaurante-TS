import { Router } from "express";
import { administradorRouter } from "../../../modules/adminstrador/infra/http/routes/administrador.routes";
import { plateRouter } from "../../../modules/plates/infra/http/routes/plate.routes";


const routes = Router();

routes.use("/plates", plateRouter)
routes.use("/administrador", administradorRouter);


export { routes }