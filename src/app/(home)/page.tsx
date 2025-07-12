// src/app/(home)/page.tsx

/**
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
 */

'use server';

import React from "react";
import { ErrorBoundary } from "react-error-boundary";

import { HydrateClient } from "@/trpc/server";

import PageClient from "@/app/(home)/client";


export default async function Home() {
   return (
      <>
         <HydrateClient>
            {/* TODO: add different background for different themes styles */}
            <div className="min-h-screen bg-dark">
               <p>brave says to: </p>
               <ErrorBoundary fallback={<p>Error...</p>}>
                  <PageClient />
               </ErrorBoundary>
            </div>
         </HydrateClient>
      </>
   );
}