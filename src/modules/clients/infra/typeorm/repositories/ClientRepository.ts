import { getRepository, Repository } from "typeorm";
import { IClient } from "../../../interfaces/DTOs/IClient";
import { IClientRepository } from "../../../interfaces/repositories/IClientRepository";
import { Client } from "../entities/Client";


class ClientRepository implements IClientRepository {
  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }
   
  findAll(): Promise<IClient[]> {
    const clients = this.ormRepository.find();

    return clients;
  }

  async create({ name, email, password }: IClient): Promise<IClient> {
    const client = this.ormRepository.create({ name, password, email });

    await this.ormRepository.save(client);

    return client;
  }

  async save(client: IClient): Promise<IClient> {
    await this.ormRepository.save(client);

    return client;
  }

  async findById(id: string): Promise<IClient | undefined> {
    const client = await this.ormRepository.findOne({
      where: {
        id
      }
    })

    return client;
  }

  async findByEmail(email: string): Promise<Client | undefined> {
    const client = await this.ormRepository.findOne({email})

    return client;
  }

  async deleteClient(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
  
}

export { ClientRepository }