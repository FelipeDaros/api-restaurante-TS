import { IAdministrador } from "../DTOs/IAdministradorDTO";

interface IAdministradorRepository {
  create({ name, password }: IAdministrador): Promise<IAdministrador>;
  save(administrador: IAdministrador): Promise<IAdministrador>;
  findByName(name: string): Promise<IAdministrador | undefined>;
  findById(id: string): Promise<IAdministrador | undefined>;
}

export { IAdministradorRepository }