import { hashSync } from "bcrypt";
import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/infra/errors/AppError";
import { ClientRepository } from "../infra/typeorm/repositories/ClientRepository";
import { IClient } from "../interfaces/DTOs/IClient";
import { ICreateClient } from "../interfaces/DTOs/ICreateClient";

@injectable()
class CreateClientService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: ClientRepository
  ) { }

  async execute({ name, password, email }: ICreateClient): Promise<IClient> {
    const clientExist = await this.clientRepository.findByEmail(email);

    if (clientExist) {
      throw new AppError("Email exists!");
    }

    const hashPassword = hashSync(password, 8);

    const client = await this.clientRepository.create({
      name,
      password: hashPassword,
      email
    });

    return client;
  }
}

export { CreateClientService }