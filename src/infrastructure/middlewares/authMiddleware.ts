import { Request, Response, NextFunction } from "express";
import { TokenService } from "../services/TokenService";

const tokenService = new TokenService();

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = tokenService.verifyToken(token);
    (req as any).user = payload; // adjunta el usuario al request
    next();
  } catch (err: any) {
    return res.status(401).json({ error: "Token inválido o expirado" });
  }
};
