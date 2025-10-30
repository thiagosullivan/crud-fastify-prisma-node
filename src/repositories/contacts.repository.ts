import { prisma } from "../database/prisma-client.js";
import type {
  Contact,
  ContactCreateData,
  ContactRepository,
} from "../interfaces/contacts.interface.js";

class ContactsRepositoryPrisma implements ContactRepository {
  async create(data: ContactCreateData): Promise<Contact> {
    const result = await prisma.contacts.create({
      data: {
        email: data.email,
        name: data.name,
        phone: data.phone,
        userId: data.userId,
      },
    });
    return result;
  }
  async findByEmailOrPhone(
    email: string,
    phone: string
  ): Promise<Contact | null> {
    const result = await prisma.contacts.findFirst({
      where: {
        OR: [
          {
            email: email,
          },
          {
            phone: phone,
          },
        ],
      },
    });
    return result;
  }
}
export { ContactsRepositoryPrisma };
