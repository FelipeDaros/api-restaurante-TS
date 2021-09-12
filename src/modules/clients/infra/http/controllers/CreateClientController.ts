import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClientService } from "../../../services/CreateClientService";


class CreateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createClientService = container.resolve(CreateClientService);

    const client = await createClientService.execute({
      name,
      email,
      password
    })

    return response.status(201).json(client);
  }
}

export { CreateClientController }