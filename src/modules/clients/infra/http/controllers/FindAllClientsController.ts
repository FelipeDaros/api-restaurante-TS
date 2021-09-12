import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllClientsService } from "../../../services/FindAllClientsService";


class FindAllClientsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllClientsService = container.resolve(FindAllClientsService);

    const clients = await findAllClientsService.execute();

    return response.json(clients);
  }
}

export { FindAllClientsController }