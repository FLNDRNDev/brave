// src/app/(home)/client.tsx

'use client';

import { trpc } from "@/trpc/client";

interface PageClientProps {
  text?: string;
}

export const PageClient = ({ text = "Doron" }: PageClientProps) => {
   const { data, error, isLoading } = trpc.hello.useQuery({ 
      text 
   });

   if (isLoading) {
      return <div>Loading...</div>;
   }

   if (error) {
      return <div>Error: {error.message}</div>;
   }

   return (
      <>
         <div>
            {data?.greeting}
         </div>
      </>
   );
};

export default PageClient;
