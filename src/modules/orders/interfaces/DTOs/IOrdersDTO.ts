import { Client } from "../../../clients/infra/typeorm/entities/Client";
import { Plate } from "../../../plates/infra/typeorm/entities/Plate";


interface IOrdersDTO {
  id?: string;
  client_id: Client;
  plate_id: Plate[];
  price_total: number;
  estimated_time: number;
  created_at?: Date;
}

export { IOrdersDTO }

