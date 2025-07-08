'use client'

import React from "react";
import { UserIcon } from "lucide-react";

import { Button } from "@/components/ui/button";


export const AuthButton = () => {

   // TODO: Add different Auth States
	return (
		<>
			<Button 
            variant="customOutline"
            size="icon"
            className="md:w-fit md:h-9 md:px-4 [&svg]:size-4"
         >
				<UserIcon className="size-4" />
            <span className="hidden md:block text-sm font-light tracking-tight">Sign in</span>	
			</Button>
		</>
	)
}