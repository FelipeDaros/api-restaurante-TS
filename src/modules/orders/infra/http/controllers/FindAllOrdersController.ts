import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllOrdersService } from "../../../services/FindAllOrdersService";


class FindAllOrdersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllOrders = container.resolve(FindAllOrdersService);

    const orders = await findAllOrders.execute();

    return response.json(orders);
  }
}

export { FindAllOrdersController }