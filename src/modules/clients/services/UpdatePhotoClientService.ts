import { inject, injectable } from "tsyringe";
import uploadClient from "../../../config/uploadClient";
import path from 'path';
import fs from "fs";
import AppError from "../../../shared/infra/errors/AppError";
import { ClientRepository } from "../infra/typeorm/repositories/ClientRepository";
import { IClient } from "../interfaces/DTOs/IClient";
import { IUpdatePhotoClient } from "../interfaces/DTOs/IUpdatePhotoClient";


@injectable()
class UpdatePhotoClientService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: ClientRepository
  ) { }

  async execute({ id, photo_client }: IUpdatePhotoClient): Promise<IClient> {
    const client = await this.clientRepository.findById(id);

    if (!client) {
      throw new AppError("Client not exists!");
    }

    if (client.photo_client) {
      const avatarFilePath = path.join(uploadClient.directory, client.photo_client);
      const avatarFileExists = await fs.promises.stat(avatarFilePath);

      if (avatarFileExists) {
        await fs.promises.unlink(avatarFilePath);
      }
    }

    client.photo_client = photo_client;

    await this.clientRepository.save(client);

    return client;
  }
}

export { UpdatePhotoClientService }