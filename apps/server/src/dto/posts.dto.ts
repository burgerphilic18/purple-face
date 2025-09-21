import {posts} from "@/db/schema/post.schema";
import { z } from "zod";

export type Post = typeof posts.$inferSelect;

export const postIdParamsSchema = z.object({
    id: z.string().uuid(),
});