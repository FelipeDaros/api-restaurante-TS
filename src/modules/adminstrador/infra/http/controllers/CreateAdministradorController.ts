import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { CreateAdministradorService } from "../../../services/CreateAdministradorService";

@injectable()
class CreateAdministradorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, password } = request.body;
    const createAdministrador = container.resolve(CreateAdministradorService);

    const administrador = await createAdministrador.execute({
      name,
      password
    });

    return response.json(administrador);
  }
}

export { CreateAdministradorController }