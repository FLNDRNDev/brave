// src/app/(home)/page.tsx

/**
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
 */

import { HydrateClient, trpc } from "@/trpc/server";

import HomeView from "@/modules/home/ui/views/home-view";


export const dynamic = "force-dynamic";

interface PageProps {
   searchParams: Promise<{
      categoryId?: string;
   }>;
};

const Page = async ({ searchParams }: PageProps) => {
   const { categoryId } = await searchParams;

   void trpc.categories.getMany.prefetch();

   return (
      <> 
         {/* TODO: add different background for different themes styles */}

         <HydrateClient>
           <HomeView categoryId={categoryId} />
         </HydrateClient>
      </>
   );
}

export default Page;
