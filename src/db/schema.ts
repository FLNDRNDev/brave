// src/db/schema.ts

/**
 * @see https://orm.drizzle.team/docs/introduction
 */

import { relations } from "drizzle-orm";
import { pgTable, uuid, text, timestamp, uniqueIndex, integer } from "drizzle-orm/pg-core";

// ONLY FOR SIGN UP & IN WITH OAuth credentials
export const users = pgTable("users", {
	id: uuid("id").primaryKey().defaultRandom(),
	clerkId: text("clerk_id").unique().notNull(),
	name: text("name").notNull(),	
	// TODO: Add banner field

	imageUrl: text("image_url"),
	
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
}, (t) => [uniqueIndex("clerk_id_idx").on(t.clerkId)]);

export const userRelations = relations(users, ({ many }) => ({
	videos: many(videos),
}));

// TODO: Create a table for both types of sign up & in for the users:


// Create a table for the categories:
export const categories = pgTable("categories", {
	id: uuid("id").primaryKey().defaultRandom(),
	name: text("name").notNull().unique(),
	description: text("description"),
	imageUrl: text("image_url"),
	order: integer("order").notNull().default(0),

	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
}, (t) => [uniqueIndex("name_idx").on(t.name)]);

export const categoryRelations = relations(categories, ({ many }) => ({
	videos: many(videos),
}));


// Create a table for the videos:
export const videos = pgTable("videos", {
	id: uuid("id").primaryKey().defaultRandom(),
	title: text("title").notNull(),
	description: text("description"),
	userId: uuid("user_id").references(() => users.id, { 
		onDelete: "cascade",
	}).notNull(),
	categoryId: uuid("category_id").references(() => categories.id, {
		onDelete: "set null",
	}),
	// videoUrl: text("video_url").notNull(),
	// thumbnailUrl: text("thumbnail_url"),
	// duration: integer("duration").notNull(),
	// views: integer("views").notNull().default(0),

	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
});

// Relations for the videos table:
export const videoRelations = relations(videos, ({ one }) => ({
	user: one(users, {	
		fields: [videos.userId],
		references: [users.id],
	}),
	category: one(categories, {
		fields: [videos.categoryId],
		references: [categories.id],
	}),
}));