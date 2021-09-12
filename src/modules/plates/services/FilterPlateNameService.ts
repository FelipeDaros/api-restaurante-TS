import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/infra/errors/AppError";
import { IPlate } from "../interfaces/DTOs/IPlateDTO";
import { IPlatesRepository } from "../interfaces/repositories/IProductsRepository";


@injectable()
class FilterPlateNameService {
  constructor(
    @inject('PlatesRepository')
    private platesRepository: IPlatesRepository
  ) { }
  
  async execute({ name_plate }: IPlate):Promise<IPlate | undefined | IPlate[]> {
    const plate = await this.platesRepository.findByName(name_plate as string);

    if (!plate) {
      throw new AppError("Plate not exists!");
    }

    return plate;
  }
}

export { FilterPlateNameService }