// src/db/schema.ts

/**
 * @see https://orm.drizzle.team/docs/introduction
 */


import { pgTable, uuid, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";

// ONLY FOR SIGN UP & IN WITH OAuth credentials
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  clerkId: text("clerk_id").unique().notNull(),
  name: text("name").notNull(),
  
  // TODO: Add banner field


  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (t) => [uniqueIndex("clerk_id_idx").on(t.clerkId)]);
