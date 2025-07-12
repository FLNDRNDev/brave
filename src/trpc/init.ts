// src/trpc/init.ts

/**
 * @see https://trpc.io/docs/client/tanstack-react-query/server-components
 */ 


import { initTRPC } from "@trpc/server";
import { cache } from "react";

// Create a cache function to store the user id
export const createTRPCContext = cache(() => {
   /**
    * @see https://trpc.io/docs/server/context
    */
    return { userId: '123'};
});

// Avoid exporting the entire t object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.create({
   /**
    * @see https://trpc.io/docs/server/data-transformers
    */
   // transformer: superjson,
});

// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCaller = t.createCallerFactory;
export const baseProcedure = t.procedure;