// src/modules/studio/ui/components/notification-button.tsx

'use client'

import React from 'react';
import Link from 'next/link';
import { Bell } from 'lucide-react';


import { Button } from '@/components/ui/button';


export const NotificationButton = () => {
	return (
		<>
         {/* TODO: Add notification functionality with a notification Modal */}
         <Button 
            asChild
            variant="outline" 
            size="icon"
            className="size-8 rounded-full bg-background hover:bg-red-500/20 transition-all duration-300 cursor-pointer"
         >
            <Link href="#">
               <Bell className="!size-4" />
            </Link>
         </Button>
      </>
	)
}
