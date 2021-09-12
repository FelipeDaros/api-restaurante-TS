import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { UpdatePhotoClientService } from "../../../services/UpdatePhotoClientService";


@injectable()
class UpdatePhotoClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const photo_client = request.file?.filename;
    const updatePhotoService = container.resolve(UpdatePhotoClientService);

    const client = updatePhotoService.execute(id, photo_client as string);

    return response.send(client);
  }
}
export { UpdatePhotoClientController }