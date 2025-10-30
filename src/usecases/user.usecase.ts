import type {
  User,
  UserCreate,
  UserRepository,
} from "../interfaces/user.interface.js";
import { UserRepositoryPrisma } from "../repositories/user.repository.js";

class UserUseCase {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepositoryPrisma();
  }

  async create({ name, email }: UserCreate): Promise<User> {}
}

export { UserUseCase };
