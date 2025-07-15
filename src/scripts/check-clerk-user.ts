// src/scripts/check-clerk-user.ts

import 'dotenv/config';
import { auth } from '@clerk/nextjs/server';

async function main() {
   console.log("Checking current Clerk user...");

   try {
      const { userId } = await auth();
      
      console.log("Current Clerk userId:", userId);
      
      if (!userId) {
         console.log("No user ID found - not signed in");
      } else {
         console.log("User is signed in with ID:", userId);
      }

      process.exit(0);
   } catch (error) {
      console.error("Error checking Clerk user:", error);
      process.exit(1);
   }
}

main(); 