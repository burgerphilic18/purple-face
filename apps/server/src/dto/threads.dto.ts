import {threads} from "@/db/schema/thread.schema";
import { z } from "zod";

export type Thread = typeof threads.$inferSelect;

export const threadIdParamsSchema = z.object({
    id: z.string().uuid(),
});

export const createThreadSchema = z.object({
    title: z.string().min(1).max(255),
    topicId: z.string().uuid(),
    content: z.string().min(1).max(5000),
});

export type CreateThreadInput = z.infer<typeof createThreadSchema>;