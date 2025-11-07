import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "mi_clave_secreta";

export class TokenService {
  generateToken(payload: object) {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  }

  verifyToken(token: string) {
    try {
      return jwt.verify(token, SECRET_KEY);
    } catch {
      throw new Error("Token inválido o expirado");
    }
  }
}
