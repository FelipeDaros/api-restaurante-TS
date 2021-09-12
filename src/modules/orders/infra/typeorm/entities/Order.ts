import { IOrdersDTO } from "../../../interfaces/DTOs/IOrdersDTO";
import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Client } from "../../../../clients/infra/typeorm/entities/Client";
import { Plate } from "../../../../plates/infra/typeorm/entities/Plate";


@Entity("orders")
class Order implements IOrdersDTO {
  @PrimaryColumn()
  id: string;

  @OneToOne(() => Client, clients => clients.id)
  @JoinColumn({name: "client_id"})
  client_id: Client;

  @OneToOne(() => Plate, plates => plates.id)
  @JoinColumn({name: "plate_id"})
  plate_id: Plate[];

  @Column('decimal')
  price_total: number;

  @Column()
  estimated_time: number;

  @CreateDateColumn()
  created_at: Date;
  
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Order }