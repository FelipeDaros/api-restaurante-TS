import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/infra/errors/AppError";
import { ClientRepository } from "../infra/typeorm/repositories/ClientRepository";

@injectable()
class DeleteClientService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: ClientRepository
  ) { }

  async execute(id: string): Promise<void> {
    const clientExist = await this.clientRepository.findById(id);
    
    if (!clientExist) {
      throw new AppError("Client not exists!");
     }
    
    await this.clientRepository.deleteClient(id);
  }
}

export { DeleteClientService }