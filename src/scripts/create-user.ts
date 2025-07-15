// src/scripts/create-user.ts

import 'dotenv/config';
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

async function main() {
   console.log("Creating user for current Clerk session...");

   try {
      // The user ID from your current session
      const clerkUserId = "user_2zu9hTrYqJ8YwXLzx5FL4BP3Nd8";
      const userName = "Flandrien Dev";
      const userEmail = "flandriendev@hotmail.com";

      // Check if user already exists
      const existingUser = await db
         .select()
         .from(users)
         .where(eq(users.clerkId, clerkUserId))
         .limit(1);

      if (existingUser.length > 0) {
         console.log("User already exists:", existingUser[0]);
         process.exit(0);
      }

      // Create the user
      const newUser = await db.insert(users).values({
         clerkId: clerkUserId,
         name: userName,
         imageUrl: null, // You can add an image URL if you have one
      }).returning();

      console.log("User created successfully:", newUser[0]);
      process.exit(0);
   } catch (error) {
      console.error("Error creating user:", error);
      process.exit(1);
   }
}

main(); 