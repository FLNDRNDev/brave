'use client'

import React from "react";
import { ClapperboardIcon, CircleUserRoundIcon, UserIcon } from "lucide-react";

import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";


export const AuthButton = () => {

  
	return (
		<>
			<SignedIn>
				<UserButton>
					<UserButton.MenuItems>
						<UserButton.Link 
						 	href="/studio" 
							label="Studio" 
							labelIcon={<ClapperboardIcon className="size-4" />}
						/>
						<UserButton.Link 
						 	href="/profile" 
							label="User Profile" 
							labelIcon={<CircleUserRoundIcon className="size-4" />}
						/>
					</UserButton.MenuItems>
				</UserButton>
			</SignedIn>

			<SignedOut>
				<SignInButton mode="modal">
					<Button 
						variant="customOutline"
						size="icon"
						className="md:w-fit md:h-9 md:px-4 [&svg]:size-4"
					>
						<UserIcon className="size-4" />
						<span className="hidden md:block text-[0.8125rem] font-light tracking-tight">Sign in</span>	
					</Button>
				</SignInButton>
			</SignedOut>
		</>
	)
}