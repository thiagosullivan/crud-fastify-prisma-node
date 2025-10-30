import fastify, { type FastifyInstance } from "fastify";
import { userRoutes } from "./routes/user.routes.js";
import { contactsRoutes } from "./routes/contact.routes.js";

const app: FastifyInstance = fastify();

app.register(userRoutes, {
  prefix: "/users",
});
app.register(contactsRoutes, {
  prefix: "/contacts",
});

app.listen(
  {
    port: 3100,
  },
  () => console.log("Server is running on port 3100")
);
