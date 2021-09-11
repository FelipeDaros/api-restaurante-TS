import { container } from "tsyringe";
import { IAdministradorRepository } from "../../modules/adminstrador/domain/repositories/IAdministradorRepository";
import { AdministradorRepository } from "../../modules/adminstrador/infra/typeorm/repositories/AdministradorRepository";
import { IPlatesRepository } from "../../modules/plates/domain/repositories/IProductsRepository";
import { PlatesRepository } from "../../modules/plates/infra/typeorm/repositories/PlatesRepository";


container.registerSingleton<IPlatesRepository>(
  'PlatesRepository',
  PlatesRepository,
);

container.registerSingleton<IAdministradorRepository>(
  'AdministradorRepository',
  AdministradorRepository
)