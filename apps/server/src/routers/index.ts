import type { FastifyInstance } from "fastify";
import { authRoutes } from "./auth";
import { userRoutes } from "./user";

export async function appRouter(fastify: FastifyInstance) {
	// Ensure the request object has a userId property at runtime
	// Middleware will assign the real ID when authenticated
	fastify.decorateRequest("userId", undefined);
	fastify.register(authRoutes, { prefix: "/auth" });
	fastify.register(userRoutes, { prefix: "/user" });
}
