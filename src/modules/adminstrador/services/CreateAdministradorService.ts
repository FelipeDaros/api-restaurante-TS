import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/infra/errors/AppError";
import { hashSync } from 'bcrypt';
import { IAdministrador } from "../interfaces/DTOs/IAdministradorDTO";
import { IAdministradorRepository } from "../interfaces/repositories/IAdministradorRepository";


@injectable()
class CreateAdministradorService {
  constructor(
    @inject('AdministradorRepository')
    private administradorRepository: IAdministradorRepository
  ) { }

  async execute({ name, password }: IAdministrador): Promise<IAdministrador> {
    const administradorExists = await this.administradorRepository.findByName(name);

    if (administradorExists) {
      throw new AppError("This admin name is already in use.")
    }

    const hashPassword = hashSync(password, 8);

    const administrador = await this.administradorRepository.create({name, password: hashPassword});

    return administrador;
  }
}

export { CreateAdministradorService }