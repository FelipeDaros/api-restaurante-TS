import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAdministradorSessionService } from "../../../services/CreateAdministradorSessionService";


class CreateAdministradorSessionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, password } = request.body;
    const createSessionAdminstrador = container.resolve(CreateAdministradorSessionService);

    const administrador = await createSessionAdminstrador.execute({
      name, password
    })

    return response.json(administrador);
  }
}

export { CreateAdministradorSessionController }
