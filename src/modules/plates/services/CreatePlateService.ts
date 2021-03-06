import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/infra/errors/AppError";
import { IAdministradorRepository } from "../../adminstrador/interfaces/repositories/IAdministradorRepository";
import { IPlate } from "../interfaces/DTOs/IPlateDTO";
import { IPlatesRepository } from "../interfaces/repositories/IProductsRepository";

@injectable()
class CreatePlateService {
  constructor(
    @inject('PlatesRepository')
    private platesRepository: IPlatesRepository,
  ) { }

  async execute({ name_plate, price }: IPlate): Promise<IPlate> {
    const plateExists = await this.platesRepository.findByName(name_plate as string);
    
    if (plateExists) {
      throw new AppError("Plate i'ts create in database");
    }

    const plate = await this.platesRepository.create(name_plate as string, price as number);

    return plate;
  }
}

export { CreatePlateService }