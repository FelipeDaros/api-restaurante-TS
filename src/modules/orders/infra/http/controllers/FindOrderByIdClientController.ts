import { Request, Response } from "express";
import { container } from "tsyringe";
import { findOrderByIdClientService } from "../../../services/findOrderByIdClientService";


class FindOrderByIdClientController{
  async handle(request: Request, response: Response): Promise<Response> {
    const findOrderByIdClient = container.resolve(findOrderByIdClientService);
    const { client_id } = request.body;
    const order = await findOrderByIdClient.execute(client_id);

    return response.json(order);
  }
}

export { FindOrderByIdClientController }