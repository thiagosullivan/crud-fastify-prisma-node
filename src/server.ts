import fastify, { type FastifyInstance } from "fastify";
import { userRoutes } from "./routes/user.routes.js";

const app: FastifyInstance = fastify();

app.register(userRoutes, {
  prefix: "/users",
});

app.listen(
  {
    port: 3100,
  },
  () => console.log("Server is running on port 3100")
);
