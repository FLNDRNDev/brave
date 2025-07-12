// src/app/api/trpc/[trpc]/route.ts

/**
 * @see https://trpc.io/docs/server/adapters/fetch
 */


import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createTRPCContext } from "@/trpc/init";
import { appRouter } from "@/trpc/routers/_app";


// Create a handler for the Next.js API route
const handler = (req: Request) => fetchRequestHandler({
   endpoint: "/api/trpc",
   req,
   router: appRouter,
   createContext: createTRPCContext,
});

// Export handler for Next.js API route
export { handler as GET, handler as POST };