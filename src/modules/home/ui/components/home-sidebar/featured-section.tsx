'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth, useClerk } from '@clerk/nextjs';

import { 
   HistoryIcon, 
   Heart, 
   List, 
   ClockFading} from 'lucide-react';
import { 
   SidebarGroup, 
   SidebarGroupContent, 
   SidebarMenu, 
   SidebarMenuItem, 
   SidebarMenuButton,
   SidebarGroupLabel } from '@/components/ui/sidebar';


const items = [
   {
      title: 'History',
      url: '/playlists/history',
      icon: <HistoryIcon className="size-4" />,
      auth: true,
   },
   {
      title: 'Watch Later',
      url: '/playlists/watch-later',
      icon: <ClockFading />,
      auth: true,
   },
   {
      title: 'Liked',
      url: '/playlists/liked',
      icon: <Heart className="text-red-500" />,
      auth: true,
   },
   {  
      title: 'Playlists',
      url: '/playlists',
      icon: <List />,
      auth: true,
   }, 
];

export const FeaturedChannels = () => {
   const clerk = useClerk();
   const { isSignedIn } = useAuth();

   return (
      <>
         <SidebarGroup>
            <SidebarGroupLabel className="text-md font-regular tracking-tight">Featured Channels</SidebarGroupLabel>
            <SidebarGroupContent>
               <SidebarMenu>
                  {items.map((item) => (
                     <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton 
                           asChild
                           tooltip={item.title}
                           isActive={false}        // TODO: Change to look at current pathname
                           onClick={(e) => {
                              if (!isSignedIn && item.auth) {
                                 e.preventDefault();
                                 
                                 return clerk.openSignIn();
                              }
                           }}
                           disabled={!isSignedIn && item.auth}
                        >
                           <Link href={item.url} className="flex items-center gap-4">
                              {item.icon}
                              <span className="text-sm font-light tracking-tight">{item.title}</span>
                           </Link>
                        </SidebarMenuButton>
                     </SidebarMenuItem>
                  ))}
               </SidebarMenu>
            </SidebarGroupContent>
         </SidebarGroup>
      </>
   );
}