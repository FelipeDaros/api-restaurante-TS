import { getRepository, Repository } from "typeorm";
import { IPlate } from "../../../domain/DTOs/IPlateDTO";
import { IPlatesRepository } from "../../../domain/repositories/IProductsRepository";
import { Plate } from "../entities/Plate";

class PlatesRepository implements IPlatesRepository {
  private ormRepository: Repository<Plate>;

  constructor() {
    this.ormRepository = getRepository(Plate)
  }
  
  async findByName(name_plate: string): Promise<IPlate | undefined> {
    const plate = this.ormRepository.findOne({
      where: {
        name_plate
      }
    });

    return plate;
  }
  async findById(id: string): Promise<IPlate | undefined> {
    const plate = this.ormRepository.findOne(id);

    return plate;
  }
  async showAllPlates(): Promise<IPlate[]> {
    const plates = this.ormRepository.find();

    return plates;
  }

  async create(name_plate: string, price: number): Promise<IPlate> {
    const plate = this.ormRepository.create({ name_plate, price });

    await this.ormRepository.save(plate);

    return plate;
  }
  async save(plate: IPlate): Promise<IPlate> {
    await this.ormRepository.save(plate);

    return plate;
  }
  
}

export { PlatesRepository }