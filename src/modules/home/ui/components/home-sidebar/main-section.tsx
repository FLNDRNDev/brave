'use client';

import React from 'react';
import Link from 'next/link';
import { HomeIcon, Gem, TrendingUp, ShoppingBag, Clock } from 'lucide-react';
import { 
   SidebarGroup, 
   SidebarGroupContent, 
   SidebarMenu, 
   SidebarMenuItem, 
   SidebarMenuButton } from '@/components/ui/sidebar';


const shopUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://shop.brave.com';

const items = [
   {
      title: 'Home',
      url: '/',
      icon: <HomeIcon />,
   },
   {
      title: 'Subscriptions',
      url: '/feed/subscriptions',
      icon: <Gem />,
      auth: true,
   },
   {  
      title: 'Trending',
      url: '/feed/trending',
      icon: <TrendingUp />,
   }, 
   {  
      title: 'Shop',
      url: shopUrl,
      icon: <ShoppingBag />,
      external: true,
   },
   {  
      title: 'latest',
      url: '/feed/latest',
      icon: <Clock />,
   },
];

export const MainSection = () => {
   return (
      <>
         <SidebarGroup>
            <SidebarGroupContent>
               <SidebarMenu>
                  {items.map((item) => (
                     <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton 
                           asChild
                           tooltip={item.title}
                           isActive={false}        // TODO: Change to look at current pathname
                           onClick={() => {}}      // TODO: Do something onClick handler
                        >
                           {item.external ? (
                              <a
                                 href={item.url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="flex items-center gap-4"
                              >
                                 {item.icon}
                                 <span className="text-sm font-light tracking-tight">{item.title}</span>
                              </a>
                           ) : (
                              <Link href={item.url} className="flex items-center gap-3">
                                 {item.icon}
                                 <span className="text-sm font-light tracking-tight">{item.title}</span>
                              </Link>
                           )}
                        </SidebarMenuButton>
                     </SidebarMenuItem>
                  ))}
               </SidebarMenu>
            </SidebarGroupContent>
         </SidebarGroup>
      </>
   );
}