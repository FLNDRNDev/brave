// src/trpc/routers/_app.ts

/**
 * @see https://trpc.io/docs/client/tanstack-react-query/server-components
 */

import { categoriesRouter } from "@/modules/categories/server/procedures";
import { studioRouter } from "@/modules/studio/server/procedures";
import { videosRouter } from "@/modules/videos/server/procedures";
import { createTRPCRouter } from "@/trpc/init";


export const appRouter = createTRPCRouter({
    studio: studioRouter,
    videos: videosRouter,
    categories: categoriesRouter,
});

// Export the type definition of API
export type AppRouter = typeof appRouter;
