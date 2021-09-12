import { IClient } from "../DTOs/IClient";

interface IClientRepository {
  create({ name, email, password }: IClient): Promise<IClient>;
  save(client: IClient): Promise<IClient>;
  findById(id: string): Promise<IClient | undefined>;
  findByEmail(email: string): Promise<IClient | undefined>;
  findAll(): Promise<IClient[]>;
  deleteClient(id: string): Promise<void>;
}

export { IClientRepository }