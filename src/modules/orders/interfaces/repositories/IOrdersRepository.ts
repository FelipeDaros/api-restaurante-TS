import { ICreateOrderDTO } from "../DTOs/ICreateOrderDTO";
import { IOrdersDTO } from "../DTOs/IOrdersDTO";


interface IOrdersRepository {
  save(order: IOrdersDTO): Promise<IOrdersDTO>;
  create({ client_id, estimated_time, plate_id, price_total }: ICreateOrderDTO): Promise<IOrdersDTO>;
  findById(id: string): Promise<IOrdersDTO | undefined>;
  findAllOrders(): Promise<IOrdersDTO[]>
}

export { IOrdersRepository }