import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeletePlateService } from "../../../services/DeletePlateService";


class DeletePlateController {
  async handle(request: Request, response: Response):Promise<Response> {
    const deletePlateService = container.resolve(DeletePlateService);
    const { id } = request.params;

    await deletePlateService.execute(id)

    return response.status(200).send("Deleted!")
  }
}

export { DeletePlateController }