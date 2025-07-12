// src/trpc/routers/_app.ts

/**
 * @see https://trpc.io/docs/client/tanstack-react-query/server-components
 */


import { z } from "zod";

import { cache } from "react";

import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { TRPCError } from "@trpc/server";


export const createTRPCContext = cache(() => {
   return { userId: '123'};
});

export const appRouter = createTRPCRouter({
   hello: baseProcedure
      .input(
         z.object({ 
            text: z.string(),
         })
      )
      .query((opts) => {
         return { greeting: `hello, ${opts.input.text}!` };
      }),
});

// Export the type definition of API
export type AppRouter = typeof appRouter;
