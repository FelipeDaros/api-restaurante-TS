import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/infra/errors/AppError";
import { IPlatesRepository } from "../interfaces/repositories/IProductsRepository";

@injectable()
class DeletePlateService {
  constructor(
    @inject('PlatesRepository')
    private platesRepository: IPlatesRepository,
  ) { }

  async execute(id: string): Promise<void> {
    const plateExists = await this.platesRepository.findById(id);

    if (!plateExists) {
      throw new AppError("Plate not exists!");
    }

    await this.platesRepository.deletePlate(id);
  }
}

export { DeletePlateService }