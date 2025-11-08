import { Request, Response } from "express";
import { RegisterInscriptionUseCase } from "../../application/inscripciones/RegisterInscriptionUseCase";
import { InscripcionRepositoryMemory } from "../repositories/InscripcionRepositoryMemory";
import { ApiResponse } from "../../shared/ApiResponse";

export class InscripcionController {
  static async registrar(req: Request, res: Response) {
    const useCase = new RegisterInscriptionUseCase(new InscripcionRepositoryMemory());
    const user = (req as any).user; // viene del token middleware

    try {
      const data = req.body;
      data.userId = user?.id;
      const result = await useCase.execute(data);
      res.status(201).json(ApiResponse.success("01"));
    } catch (error: any) {
      res.status(500).json(ApiResponse.error());
    }
  }
}
