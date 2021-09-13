import { getRepository, Repository } from "typeorm";
import { Client } from "../../../../clients/infra/typeorm/entities/Client";
import { ICreateOrderDTO } from "../../../interfaces/DTOs/ICreateOrderDTO";
import { IOrdersDTO } from "../../../interfaces/DTOs/IOrdersDTO";
import { IOrdersRepository } from "../../../interfaces/repositories/IOrdersRepository";
import { Order } from "../entities/Order";


class OrdersRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>
  private ormRepositoryClient: Repository<Client>

  constructor() {
    this.ormRepository = getRepository(Order)
    this.ormRepositoryClient = getRepository(Client)
  }
  async findAllOrders(): Promise<IOrdersDTO[]> {
    const orders = await this.ormRepository.find({
      relations: ['client_id', 'plate_id']
    });

    const clientsName = orders.map(order => order.client_id.name);
    const clientsEmail = orders.map(order => order.client_id.email);
    console.log(clientsEmail, clientsName);

    return orders;
  }

  async findByNameClient(client_id: string): Promise<IOrdersDTO | undefined> {
    const order = this.ormRepository.findOne(client_id, {
      relations: ['clients']
    })

    return order;
  }

  async create({ client_id, estimated_time, plate_id, price_total }: ICreateOrderDTO): Promise<IOrdersDTO> {
    const order = this.ormRepository.create({plate_id, client_id, price_total, estimated_time});

    await this.ormRepository.save(order);

    return order;
  }

  async save(order: IOrdersDTO): Promise<IOrdersDTO> {
    await this.ormRepository.save(order);

    return order;
  }

  async findById(id: string): Promise<IOrdersDTO | undefined> {
    const order = await this.ormRepository.findOne({
      where: {
        id
      }
    })

    return order;
  }

  

  async findByNamePlate(plate_id: string): Promise<IOrdersDTO | undefined> {
    throw new Error("Method not implemented.");
  }
  
}

export { OrdersRepository }