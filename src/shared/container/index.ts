import { container } from "tsyringe";
import { IPlatesRepository } from "../../modules/plates/domain/repositories/IProductsRepository";
import { PlatesRepository } from "../../modules/plates/infra/typeorm/repositories/PlatesRepository";


container.registerSingleton<IPlatesRepository>(
  'PlatesRepository',
  PlatesRepository,
);