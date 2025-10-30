import type {
  User,
  UserCreate,
  UserRepository,
} from "../interfaces/user.interface.js";

class UserRepositoryPrisma implements UserRepository {
  async create(data: UserCreate): Promise<User> {}
}

export { UserRepositoryPrisma };
