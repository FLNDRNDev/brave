// src/modules/studio/ui/components/help-button.tsx

'use client'

import React from 'react';
import Link from 'next/link';
import { HelpCircle } from 'lucide-react';


import { Button } from '@/components/ui/button';


export const HelpButton = () => {
	return (
		<>
         <Button 
            asChild
            variant="outline" 
            size="icon"
            className="size-8 rounded-full bg-background hover:bg-primary/10 text-brave-blue transition-all duration-300 cursor-pointer"
         >
            {/* TODO: Create a help page with on the bottom a AI Chatbot */}
            <Link href="/studio/help">
               <HelpCircle className="!size-4 text-primary" />
            </Link>
         </Button>
      </>
	)
}
