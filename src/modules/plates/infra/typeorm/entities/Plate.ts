import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { IPlate } from "../../../interfaces/DTOs/IPlateDTO";
import { v4 as uuidV4 } from 'uuid';
import { Order } from "../../../../orders/infra/typeorm/entities/Order";

@Entity("plates")
class Plate implements IPlate {
  @PrimaryColumn()
  id: string;

  @Column()
  name_plate: string;
  
  @Column()
  price: number;
  
  @Column()
  photo_plate: string;
  
  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
  
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Plate }