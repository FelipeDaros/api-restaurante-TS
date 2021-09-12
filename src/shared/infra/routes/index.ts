import { Router } from "express";
import { administradorRouter } from "../../../modules/adminstrador/infra/http/routes/administrador.routes";
import { clientRouter } from "../../../modules/clients/infra/http/routes/cliente.routes";
import { orderRouter } from "../../../modules/orders/infra/http/routes/order.routes";
import { plateRouter } from "../../../modules/plates/infra/http/routes/plate.routes";


const routes = Router();

routes.use("/plates", plateRouter)
routes.use("/administrador", administradorRouter);
routes.use("/clients", clientRouter);
routes.use("/orders", orderRouter);


export { routes }