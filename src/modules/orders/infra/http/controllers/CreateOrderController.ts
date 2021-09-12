import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { CreateOrderService } from "../../../services/CreateOrderService";

@injectable()
class CreateOrderController {
  async handle(request: Request, response: Response): Promise<Response>{
    const createOrder = container.resolve(CreateOrderService);
    const { client_id, estimated_time, plate_id, price_total } = request.body

  
    const order = createOrder.execute({
      client_id,
      estimated_time,
      plate_id,
      price_total
    })

    return response.json(order);
  }
}

export { CreateOrderController }