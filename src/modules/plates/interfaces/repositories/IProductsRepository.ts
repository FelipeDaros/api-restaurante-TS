import { Client } from "../../../clients/infra/typeorm/entities/Client";
import { Plate } from "../../infra/typeorm/entities/Plate";
import { IPlate } from "../DTOs/IPlateDTO";

interface IPlatesRepository {
  findByName(name_plate: string): Promise<IPlate | undefined | IPlate[]>;
  findById(id: string | Plate[] | undefined): Promise<IPlate | undefined>;
  create(name_plate: string, price: number): Promise<IPlate>;
  save(plate: IPlate): Promise<IPlate>;
  findAllPlates(): Promise<IPlate[]>;
  deletePlate(id: string): Promise<void>;
}
  

export { IPlatesRepository }