import { Request, Response } from "express";
import { LoginUseCase } from "../../application/login/LoginUseCase";
import { UserRepositoryMemory } from "../repositories/UserRepositoryMemory";
import { TokenService } from "../services/TokenService";

export class AuthController {
  static async login(req: Request, res: Response) {
    const { username, password } = req.body;
    const useCase = new LoginUseCase(
      new UserRepositoryMemory(),
      new TokenService()
    );

    try {
      const result = await useCase.execute(username, password);
      res.json(result);
    } catch (err: any) {
      res.status(401).json({ error: err.message });
    }
  }
}
