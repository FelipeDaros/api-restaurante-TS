import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllPlatesService } from "../../../services/FindAllPlatesService";


class FindAllPlatesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllPlatesService = container.resolve(FindAllPlatesService);

    const plates = await findAllPlatesService.execute();

    return response.json(plates);
  }
}

export { FindAllPlatesController }