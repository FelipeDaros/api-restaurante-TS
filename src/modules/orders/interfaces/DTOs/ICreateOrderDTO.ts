import { Client } from "../../../clients/infra/typeorm/entities/Client";
import { Plate } from "../../../plates/infra/typeorm/entities/Plate";
import { Order } from "../../infra/typeorm/entities/Order";


interface ICreateOrderDTO {
  client_id?: Client;
  plate_id?: Plate[];
  price_total?: number;
  estimated_time?: number;
}

export { ICreateOrderDTO }