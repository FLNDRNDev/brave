// src/modules/studio/ui/components/studio-sidebar/studio-sidebar-header.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';

import { SidebarHeader, SidebarMenuItem, SidebarMenuButton, useSidebar } from '@/components/ui/sidebar';
import { Skeleton } from '@/components/ui/skeleton';
import { UserAvatar } from '@/components/user-avatar';


export const StudioSidebarHeader = () => {
   const { user } = useUser();
   const { state } = useSidebar();

   if (!user) {
      return (
         <SidebarHeader className="flex items-center justify-center pb-5">
            <Skeleton className="size-[7rem] rounded-full" />
   
            <div className="flex flex-col items-center mt-2 gap-y-0.5">
               <Skeleton className="w-[5rem] h-4" />
               <Skeleton className="w-[6.25rem] h-4" />
            </div>
         </SidebarHeader>
      );
   }

       if (state === 'collapsed') {
       return (
          <SidebarMenuItem>
             <SidebarMenuButton asChild tooltip="Your channel">
                <Link href="/users/current">
                  <UserAvatar 
                     imageUrl={user?.imageUrl}
                     name={user?.fullName ?? 'User'}
                     className="!size-6 !z-50 hover:opacity-80 transition-opacity cursor-pointer"
                  />
                  <span className="text-sm font-light tracking-tight">Your channel</span>
                </Link>
             </SidebarMenuButton>
          </SidebarMenuItem>
       );
    }

   return (
      <SidebarHeader className="flex items-center justify-center pb-5">
         <Link href="/users/current">
            <UserAvatar 
               imageUrl={user?.imageUrl}
               name={user?.fullName ?? 'User'}
               className="size-[7rem] hover:opacity-80 transition-opacity cursor-pointer"
            />
         </Link>

         <div className="flex flex-col items-center mt-2 gap-y-0.5">
            <p className="text-sm font-medium tracking-tight">
               Your channel
            </p>
            <p className="text-xs text-muted-foreground font-light tracking-tight">
               {user?.fullName}
            </p>
         </div>
      </SidebarHeader>
   );
}