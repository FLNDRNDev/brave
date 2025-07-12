// src/trpc/server.tsx

/**
 * @see https://trpc.io/docs/client/tanstack-react-query/server-components
 */


import 'server-only'; // <-- ensure this file cannot be imported from the client
import { createHydrationHelpers } from '@trpc/react-query/rsc';
import { cache } from 'react';
import { createTRPCContext } from './init';
import { makeQueryClient } from './query-client';
import { appRouter } from './routers/_app';

// IMPORTANT: Create a stable getter for the query client that
//            will return the same client during the same request.
export const getQueryClient = cache(makeQueryClient);

// Create a stable caller that will return the same caller during the same request
const caller = cache(() => appRouter.createCaller(createTRPCContext()));
export const { trpc, HydrateClient } = createHydrationHelpers<typeof appRouter>(
  caller(),
  getQueryClient,
);