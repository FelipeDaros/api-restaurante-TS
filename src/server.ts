import "reflect-metadata";
import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors";

import { routes } from "./shared/infra/routes";

import './shared/container/index';
import './shared/infra/typeorm/index';
import AppError from "./shared/infra/errors/AppError";
import upload from "./config/upload";

const app = express();

app.use(express.json());
app.use('/files', express.static(upload.directory));
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.log(error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log("SERVER IS RUNNING!");
})