// src/app/(home)/client.tsx

'use client';

import { trpc } from "@/trpc/client";

export const PageClient = () => {
   const [data] = trpc.hello.useSuspenseQuery({ 
      text: "Doron" 
   });
   console.log(data);

   return (
      <>
         <div>
            says: {data?.greeting}
         </div>
      </>
   );
};

export default PageClient;
