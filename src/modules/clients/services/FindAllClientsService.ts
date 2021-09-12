import { inject, injectable } from "tsyringe";
import { ClientRepository } from "../infra/typeorm/repositories/ClientRepository";
import { IClient } from "../interfaces/DTOs/IClient";

@injectable()
class FindAllClientsService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: ClientRepository
  ) { }
  
  async execute(): Promise<IClient[]> {
    const clients = await this.clientRepository.findAll();


    return clients;
  }
}

export { FindAllClientsService }
