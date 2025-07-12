// src/app/(home)/page.tsx

/**
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
 */

'use server';

import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { HydrateClient, trpc } from "@/trpc/server";

import PageClient from "@/app/(home)/client";


export default async function Home() {
   void trpc.hello.prefetch({ text: "Doron" });
   
   return (
      <>
         <HydrateClient>
            {/* TODO: add different background for different themes styles */}
            <div className="min-h-screen bg-dark">
               I will load videos here in the future and Client component
               
               <Suspense fallback={<p>Loading...</p>}>
                  <ErrorBoundary fallback={<p>Error...</p>}>
                     <PageClient />
                  </ErrorBoundary>
               </Suspense>
            </div>
         </HydrateClient>
      </>
   );
}