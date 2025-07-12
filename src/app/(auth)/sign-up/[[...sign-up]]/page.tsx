// src/app/(auth)/sign-up/[[...sign-up]]/page.tsx

/**
 * @see https://clerk.com/docs/references/nextjs/sign-up
 */


import { SignUp } from '@clerk/nextjs'


export default function Page() {
  return <SignUp />
}