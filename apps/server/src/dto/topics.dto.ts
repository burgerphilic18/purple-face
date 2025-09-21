import { topics } from "@/db/schema/topic.schema"
import { z } from "zod";

export type Topic = typeof topics.$inferSelect;

export const topicIdParamsSchema = z.object({
    id: z.string().uuid(),
});

export const createTopicSchema = z.object({
    name: z.string().min(1).max(100),
    description: z.string().min(1).max(500),
});

export type CreateTopicInput = z.infer<typeof createTopicSchema>;