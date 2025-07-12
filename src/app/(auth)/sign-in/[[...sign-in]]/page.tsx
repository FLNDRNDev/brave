// src/app/(auth)/sign-in/[[...sign-in]]/page.tsx

/**
 * @see https://clerk.com/docs/references/nextjs/sign-in
 */


import { SignIn } from '@clerk/nextjs'


export default function Page() {
  return <SignIn />
}