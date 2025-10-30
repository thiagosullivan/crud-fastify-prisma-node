import type { FastifyInstance } from "fastify";
import { ContactUseCase } from "../usecases/contact.usecase.js";
import type { ContactCreate } from "../interfaces/contacts.interface.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

export async function contactsRoutes(fastify: FastifyInstance) {
  const contactUseCase = new ContactUseCase();
  fastify.addHook("preHandler", authMiddleware);
  fastify.post<{ Body: ContactCreate }>("/", async (req, reply) => {
    const { name, email, phone } = req.body;
    const emailUser = req.headers["email"];
    try {
      const data = await contactUseCase.create({
        email,
        name,
        phone,
        userEmail: emailUser,
      });
      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });
}
