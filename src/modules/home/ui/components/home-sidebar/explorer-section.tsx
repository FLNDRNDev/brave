'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth, useClerk } from '@clerk/nextjs';

import { 
   HistoryIcon, 
   Heart, 
   List } from 'lucide-react';
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
      icon: <HistoryIcon />,
      auth: true,
   },
   {
      title: 'Liked',
      url: '/playlists/liked',
      icon: <Heart className="text-cta" />,
      auth: true,
   },
   {  
      title: 'Playlists',
      url: '/playlists',
      icon: <List />,
      auth: true,
   }, 
];

export const ExplorerSection = () => {
   const clerk = useClerk();
   const { isSignedIn } = useAuth();

   return (
      <>
         <SidebarGroup>
            <SidebarGroupLabel className="text-md font-regular tracking-tight">You</SidebarGroupLabel>
            <SidebarGroupContent>
               <SidebarMenu>
                  {items.map((item) => (
                     <SidebarMenuItem key={item.title}>
                        {!isSignedIn && item.auth ? (
                           <SidebarMenuButton 
                              tooltip={item.title}
                              isActive={false}
                              onClick={() => clerk.openSignIn()}
                           >
                              <div className="flex items-center gap-4">
                                 {item.icon}
                                 <span className="text-sm font-light tracking-tight">{item.title}</span>
                              </div>
                           </SidebarMenuButton>
                        ) : (
                           <SidebarMenuButton 
                              asChild
                              tooltip={item.title}
                              isActive={false}
                           >
                              <Link href={item.url} className="flex items-center gap-4">
                                 {item.icon}
                                 <span className="text-sm font-light tracking-tight">{item.title}</span>
                              </Link>
                           </SidebarMenuButton>
                        )}
                     </SidebarMenuItem>
                  ))}
               </SidebarMenu>
            </SidebarGroupContent>
         </SidebarGroup>
      </>
   );
}