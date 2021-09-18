import { inject, injectable } from "tsyringe";
import { IOrdersDTO } from "../interfaces/DTOs/IOrdersDTO";
import { IOrdersRepository } from "../interfaces/repositories/IOrdersRepository";

@injectable()
class findOrderByIdClientService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) { }

  async execute(client_id: string): Promise<IOrdersDTO | undefined> {
    const order = await this.ordersRepository.findOrderByIdClient(client_id);

    return order;
  }
}

export { findOrderByIdClientService }