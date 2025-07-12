// src/app/(home)/client.tsx

'use client';

import { trpc } from "@/trpc/client";

export const PageClient = () => {
   const { data, error, isLoading } = trpc.hello.useQuery({ 
      text: "Doron" 
   });
   console.log('Query result:', { data, error, isLoading });

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
