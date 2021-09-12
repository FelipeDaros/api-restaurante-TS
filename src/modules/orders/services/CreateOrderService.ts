import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/infra/errors/AppError";
import { IClientRepository } from "../../clients/interfaces/repositories/IClientRepository";
import { IPlatesRepository } from "../../plates/interfaces/repositories/IProductsRepository";
import { ICreateOrderDTO } from "../interfaces/DTOs/ICreateOrderDTO";
import { IOrdersDTO } from "../interfaces/DTOs/IOrdersDTO";
import { IOrdersRepository } from "../interfaces/repositories/IOrdersRepository";

@injectable()
class CreateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) { }

  async execute({ client_id, estimated_time, plate_id, price_total }: ICreateOrderDTO): Promise<IOrdersDTO | undefined> {
    
    const order = this.ordersRepository.create({
      plate_id,
      client_id,
      estimated_time,
      price_total
    })

    return order;
  }
}

export { CreateOrderService }