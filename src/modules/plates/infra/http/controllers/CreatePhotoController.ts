import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { CreatePhotoService } from "../../../services/CreatePhotoService";

@injectable()
class CreatePhotoController {
  async update(request: Request, response: Response): Promise<Response> {
    const updateAvatar = container.resolve(CreatePhotoService);
    const { id } = request.params;
    const photo_plate = request.file?.filename

    const plate = updateAvatar.execute({
      id,
      photo_plate
    })

    return response.json(plate);
  }
}

export { CreatePhotoController }