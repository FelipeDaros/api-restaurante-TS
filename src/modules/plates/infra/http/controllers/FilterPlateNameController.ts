import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { FilterPlateNameService } from "../../../services/FilterPlateNameService";

@injectable()
class FilterPlateNameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name_plate } = request.body;

    const plate = container.resolve(FilterPlateNameService);

    const findPlate = await plate.execute({
      name_plate
    });

    return response.json(findPlate);
  }
}

export { FilterPlateNameController }