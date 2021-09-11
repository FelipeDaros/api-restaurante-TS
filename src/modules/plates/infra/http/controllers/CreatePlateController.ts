import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { CreatePlateService } from "../../../services/CreatePlateService";

@injectable()
class CreatePlateController {
  async create(request: Request, response: Response):Promise<Response> {
    const { name_plate, price } = request.body;
    const createPlate = container.resolve(CreatePlateService);

    const plate = await createPlate.execute({
      name_plate,
      price
    });
    
    return response.json(plate);
  }
}

export { CreatePlateController }