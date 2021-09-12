import { inject, injectable } from "tsyringe";
import upload from "../../../config/upload";
import path from 'path';
import fs from "fs";
import AppError from "../../../shared/infra/errors/AppError";
import { IPlate } from "../interfaces/DTOs/IPlateDTO";
import { IPlatesRepository } from "../interfaces/repositories/IProductsRepository";

@injectable()
class CreatePhotoService {
  constructor(
    @inject('PlatesRepository')
    private platesRepository: IPlatesRepository,
  ) { }

  async execute({ id, photo_plate }: IPlate): Promise<IPlate> {
    const plate = await this.platesRepository.findById(id as string);
  
    if (!plate) {
      throw new AppError("Plate not found!");
    }

    if (plate.photo_plate) {
      const plateAvatarFilePath = path.join(upload.directory, plate.photo_plate);
      const plateAvatarFileExists = await fs.promises.stat(plateAvatarFilePath);

      if (plateAvatarFileExists) {
        await fs.promises.unlink(plateAvatarFilePath);
      }
    }

    plate.photo_plate = photo_plate;

    await this.platesRepository.save(plate);

    return plate;
  }
}

export { CreatePhotoService }