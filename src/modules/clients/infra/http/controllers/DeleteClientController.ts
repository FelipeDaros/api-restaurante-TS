import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteClientService } from "../../../services/DeleteClientService";


class DeleteClientController{
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteClienteService = container.resolve(DeleteClientService);

    await deleteClienteService.execute(id);

    return response.status(200).json("DELETED!");
  }
}

export { DeleteClientController }