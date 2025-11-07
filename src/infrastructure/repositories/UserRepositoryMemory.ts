import { User } from "../../domain/User";
import bcrypt from "bcrypt";

export class UserRepositoryMemory {
  private users: User[] = [];

  constructor() {
    // usuario demo
    const hashedPassword = bcrypt.hashSync("123456", 10);
    this.users.push(new User("1", "admin", hashedPassword));
  }

  async findByUsername(username: string): Promise<User | null> {
    const user = this.users.find(u => u.username === username);
    return user || null;
  }
}
