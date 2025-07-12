// src/trpc/routers/_app.ts

/**
 * @see https://trpc.io/docs/client/tanstack-react-query/server-components
 */


import { z } from "zod";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "@/trpc/init";


export const appRouter = createTRPCRouter({
   hello: protectedProcedure
      .input(
         z.object({ 
            text: z.string(),
         })
      )
      .query((opts) => {
         console.log({ dbUser: opts.ctx.user });

         return { greeting: `hello, ${opts.input.text}!` };
      }),
});

// Export the type definition of API
export type AppRouter = typeof appRouter;
