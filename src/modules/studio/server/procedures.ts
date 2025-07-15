// src/modules/studio/server/procedures.ts

import { z } from "zod";
import { and, desc, eq, lt, or } from "drizzle-orm";

import { db } from "@/db";
import { videos } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";

import 'dotenv/config';


export const studioRouter = createTRPCRouter({
	getCurrentUser: protectedProcedure
	.query(async ({ ctx }) => {
		return ctx.user;
	}),
	
	getMany: protectedProcedure
	.input(
		z.object({
			cursor: z.object({
				id: z.string().uuid(),
				updatedAt: z.date(),
			}).nullish(),
			
			limit: z.number().min(1).max(100).default(5),
		})
	)
	.query(async ({ ctx, input }) => {
		const { limit, cursor } = input;
		const { id: userId } = ctx.user;

		const data = await db
		.select()
		.from(videos)
		.where(
			cursor 
				? and(
					eq(videos.userId, userId),
					or(
						lt(videos.updatedAt, cursor.updatedAt),
						and(
							eq(videos.updatedAt, cursor.updatedAt),
							lt(videos.id, cursor.id),
						),
					)
				)
				: eq(videos.userId, userId)
		)
		.orderBy(desc(videos.updatedAt), desc(videos.id))
		.limit(limit + 1);

		// Check if there is more data
		const hasMore = data.length > limit;
		// Remove the last item if there is more data
		const items = hasMore ? data.slice(0, -1) : data;
		// Set the next cursor to the last item if there is more data
		const lastItem = items[items.length - 1];
		const nextCursor = hasMore ? {
			id: lastItem.id,
			updatedAt: lastItem.updatedAt,
		} : null;
		
		return {
			items,
			nextCursor,
		};
	}),
})