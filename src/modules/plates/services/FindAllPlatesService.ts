import { inject, injectable } from "tsyringe";
import { IPlate } from "../interfaces/DTOs/IPlateDTO";
import { IPlatesRepository } from "../interfaces/repositories/IProductsRepository";

@injectable()
class FindAllPlatesService {
  constructor(
    @inject('PlatesRepository')
    private platesRepository: IPlatesRepository
  ) { }

  async execute(): Promise<IPlate[]> {
    const plates = await this.platesRepository.findAllPlates();

    return plates;
  }

}

export { FindAllPlatesService }