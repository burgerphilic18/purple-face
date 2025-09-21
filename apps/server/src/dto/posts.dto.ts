import { z } from "zod";
import type { posts } from "@/db/schema/post.schema";

export type Post = typeof posts.$inferSelect;

export const postIdParamsSchema = z.object({
	id: z.string().uuid(),
});
