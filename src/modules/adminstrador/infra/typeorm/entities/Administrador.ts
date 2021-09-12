import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { IAdministrador } from '../../../interfaces/DTOs/IAdministradorDTO';

@Entity("administrador")
class Administrador implements IAdministrador {
  @PrimaryColumn()
  id: string;
  
  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  permission: boolean;
  
  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
  
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.permission = true;
    }
  }
}

export { Administrador }