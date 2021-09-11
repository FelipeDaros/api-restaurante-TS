import { getRepository, Repository } from "typeorm";
import { IAdministrador } from "../../../domain/DTOs/IAdministradorDTO";
import { IAdministradorRepository } from "../../../domain/repositories/IAdministradorRepository";
import { Administrador } from "../entities/Administrador";


class AdministradorRepository implements IAdministradorRepository {
  private ormRepository: Repository<Administrador>

  constructor() {
    this.ormRepository = getRepository(Administrador)
  }
  async findById(id: string): Promise<IAdministrador | undefined> {
    const isAdministrador = await this.ormRepository.findOne({
      where: {
        id
      }
    })
    return isAdministrador;
  }
  

  
  async findByName(name: string): Promise<IAdministrador | undefined> {
    const administrador = this.ormRepository.findOne({
      where: {
        name
      }
    })

    return administrador;
  }
  
  async create({ name, password }: IAdministrador): Promise<IAdministrador> {
    const administrador = this.ormRepository.create({name, password});

    await this.ormRepository.save(administrador);
    
    return administrador;
  }

  async save(administrador: IAdministrador): Promise<IAdministrador> {
    await this.ormRepository.save(administrador);

    return administrador;
  }
 
}

export { AdministradorRepository }