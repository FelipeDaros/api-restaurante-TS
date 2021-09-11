import { IPlate } from "../DTOs/IPlateDTO";

interface IPlatesRepository {
  findByName(name_plate: string): Promise<IPlate | undefined | IPlate[]>;
  findById(id: string): Promise<IPlate | undefined>;
  showAllPlates(): Promise<IPlate[]>;
  create(name_plate: string, price: number): Promise<IPlate>;
  save(plate: IPlate): Promise<IPlate>;}

export { IPlatesRepository }