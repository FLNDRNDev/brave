// src/trpc/init.ts

/**
 * @see https://trpc.io/docs/client/tanstack-react-query/server-components
 */ 


import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { cache } from "react";
import superjson from "superjson";

import { auth } from "@clerk/nextjs/server";
import { initTRPC, TRPCError } from "@trpc/server";

import { ratelimit } from "@/lib/ratelimit";


// Create a cache function to store the user id
export const createTRPCContext = cache(async () => {
   /**
    * @see https://trpc.io/docs/server/context
    */
   const { userId } = await auth();

   return { ClerkUserId: userId};
});

// Avoid exporting the entire t object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;

const t = initTRPC.context<Context>().create({
   /**
    * @see https://trpc.io/docs/server/data-transformers
    */
   transformer: superjson,
});

// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCaller = t.createCallerFactory;
export const baseProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(async function isAuthed(opts) {
   const { ctx } = opts;

   if (!ctx.ClerkUserId) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
   }

   // If the user is not found, throw an error
   const [user] = await db
      .select()
      .from(users)
      .where(eq(users.clerkId, ctx.ClerkUserId))
      .limit(1);

   if (!user) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
   }

   // Check if the user has exceeded the rate limit (skip in development)
   if (process.env.NODE_ENV === 'production') {
      const { success } = await ratelimit.limit(user.id);

      // If the user has exceeded the rate limit, throw an error
      if (!success) {
         throw new TRPCError({ code: 'TOO_MANY_REQUESTS' });
      }
   }

   // If the user has not exceeded the rate limit, return the user
   return opts.next({ 
      ctx: { 
         ...ctx,
         user: user,
      },
   });
});