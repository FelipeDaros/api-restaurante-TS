import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/infra/errors/AppError";
import { IPlate } from "../domain/models/IPlate";
import { IPlatesRepository } from "../domain/repositories/IProductsRepository";


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