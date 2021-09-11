import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import auth from "../../../config/auth";
import { AdministradorRepository } from "../../../modules/adminstrador/infra/typeorm/repositories/AdministradorRepository";
import AppError from "../errors/AppError";


export async function isAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  /*const { id } = request.administrador;

  const administradorRepository = new AdministradorRepository();
  const admin = await administradorRepository.findById(id);

  if (!admin?.id) {
    throw new AppError("Is not administrador!");
  }*/

  if (!authHeader) {
    throw new AppError("NOT JWT TOKEN!")
  }

  const [, token] = authHeader.split(' ');

  try {
    const decodeToken = verify(token, auth.jwt.secret);
    next();
  } catch (error) {
    throw new AppError("Invalid token!!")
  }

}