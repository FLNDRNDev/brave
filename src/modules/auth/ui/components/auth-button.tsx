'use client'

import React from "react";
import { UserIcon } from "lucide-react";

import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";


export const AuthButton = () => {

  
	return (
		<>
			<SignedIn>
				<UserButton />
				{/* // TODO: Add Menu items for Studio and User Profile */}
			</SignedIn>

			<SignedOut>
				<SignInButton mode="modal">
					<Button 
						variant="customOutline"
						size="icon"
						className="md:w-fit md:h-9 md:px-4 [&svg]:size-4 !text-[#1da1f2]"
					>
						<UserIcon className="size-4 text-[#1da1f2] !dark:text-[#1da1f2]" />
						<span className="hidden md:block text-[0.8125rem] font-light tracking-tight">Sign in</span>	
					</Button>
				</SignInButton>
			</SignedOut>
		</>
	)
}