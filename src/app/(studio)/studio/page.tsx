// src/app/(studio)/studio/page.tsx

/**
* Studio page
* 
* This is the creator page for the creator dashboard.
* It is a protected route and only accessible to authenticated users.
* It is a client component and uses the Clerk provider to authenticate the user.
* In the future, this page will be used to display the creator AI dashboard.
* For now, it is a placeholder for the creator dashboard.
* in the tutorial this is called studio page === needs to be removed later this line
*/

import { auth } from '@clerk/nextjs/server';
import { HydrateClient } from '@/trpc/server';
import { StudioView } from '@/modules/studio/ui/view/studio-view';


const Page = async () => {
   const { userId } = await auth();

   return (
      // TODO: add later the studio AI functionality here
      <>
         <HydrateClient>
            <StudioView />
         </HydrateClient>
      </>
   );
}

export default Page;