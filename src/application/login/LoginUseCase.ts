import bcrypt from "bcrypt";
import { UserRepositoryMemory } from "../../infrastructure/repositories/UserRepositoryMemory";
import { TokenService } from "../../infrastructure/services/TokenService";

export class LoginUseCase {
  constructor(
    private userRepo: UserRepositoryMemory,
    private tokenService: TokenService
  ) {}

  async execute(username: string, password: string) {
    const user = await this.userRepo.findByUsername(username);
    if (!user) throw new Error("Usuario no encontrado");

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error("Contraseña incorrecta");

    const token = this.tokenService.generateToken({ id: user.id, username: user.username });
    return { token };
  }
}
