import { compare } from "bcrypt";
import { sign } from 'jsonwebtoken';
import { inject, injectable } from "tsyringe";
import auth from "../../../config/auth";
import AppError from "../../../shared/infra/errors/AppError";
import { IAdministrador } from "../domain/DTOs/IAdministradorDTO";
import { IAdministradorRepository } from "../domain/repositories/IAdministradorRepository";


interface IResponse { administrador: IAdministrador; token: string; }

@injectable()
class CreateAdministradorSessionService {
  constructor(
    @inject('AdministradorRepository')
    private administradorRepository: IAdministradorRepository
  ) { }

  async execute({ name, password }: IAdministrador): Promise<IResponse> {
    const administrador = await this.administradorRepository.findByName(name);

    if (!administrador) {
      throw new AppError("Incorrect name/password combination", 401);
    }

    const passwordConfirmation = await compare(password, administrador.password);

    if (!passwordConfirmation) {
      throw new AppError("Incorrect name/password combination", 401);
    }

    const token = sign({}, auth.jwt.secret, {
      subject: administrador.id,
      expiresIn: auth.jwt.expiresIn
    });

    return {
      administrador,
      token,
    }

  }
}

export { CreateAdministradorSessionService }