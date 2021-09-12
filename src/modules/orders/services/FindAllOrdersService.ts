import { inject, injectable } from "tsyringe";
import { IOrdersDTO } from "../interfaces/DTOs/IOrdersDTO";
import { IOrdersRepository } from "../interfaces/repositories/IOrdersRepository";

@injectable()
class FindAllOrdersService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) { }
  async execute(): Promise<IOrdersDTO[]> {
    const orders = this.ordersRepository.findAllOrders();

    return orders;
  }
}

export { FindAllOrdersService }