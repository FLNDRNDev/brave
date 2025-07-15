// src/modules/studio/ui/components/studio-sidebar/index.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bolt, ChartPie, CircleFadingPlus, CreditCard, Euro, LayoutDashboard, LogOut, MessageSquare, Video } from 'lucide-react';

import { 
   Sidebar, 
   SidebarContent, 
   SidebarMenu,
   SidebarMenuButton, 
   SidebarMenuItem,
   SidebarGroup,
   useSidebar } from '@/components/ui/sidebar';

import { StudioSidebarHeader } from '@/modules/studio/ui/components/studio-sidebar/studio-sidebar-header';


export const StudioSidebar = () => {
   const pathname = usePathname();
   const { state } = useSidebar();
   
   return (
      <>
         <Sidebar className="z-40 pt-20 border-r border-gray-400/30 !dark:border-gray-800" collapsible="icon">
            
            <SidebarContent className="bg-dark flex flex-col h-full">   

               {/* Top Group - Main Navigation */}
               <SidebarGroup>
                  {/*  Dashboard Button  */}
                  <SidebarMenu>
                     {/* Studio Sidebar Header */}
                     <StudioSidebarHeader />

                     {/* Dashboard Button */}
                     <SidebarMenuItem className={`${state === 'collapsed' ? '!mt-2' : '!mt-1.5'}`}>
                        <SidebarMenuButton isActive={pathname === '/studio'} asChild tooltip="Dashboard">
                           <Link href="/studio" className="">
                              <LayoutDashboard className={`${state === 'collapsed' ? '!size-6 mx-auto' : '!size-5'} `} />
                              <span className="text-sm font-light tracking-tight">Dashboard</span>
                           </Link>
                        </SidebarMenuButton>
                     </SidebarMenuItem>
                  </SidebarMenu>

                  <hr className="w-[90%] mx-auto my-3 border-gray-400/30 !dark:border-gray-800" />

                  {/*  Content Button  */}
                  <SidebarMenu>
                     <SidebarMenuItem>
                        <SidebarMenuButton isActive={pathname === '/studio/content'} asChild tooltip="Content">
                           <Link href="/studio/content" className="">
                              <CircleFadingPlus className={`${state === 'collapsed' ? '!size-6 !mx-auto !z-50' : '!size-5'} `} />
                              <span className="text-sm font-light tracking-tight">Content</span>
                           </Link>
                        </SidebarMenuButton>
                     </SidebarMenuItem>
                  </SidebarMenu>

                  {/*  Live Stream Button  */}
                  {/* TODO: Add live stream page model: Rumble Live Streams, to get from the start Live Streams option you need to be verified for a year price and have to purchase streaming credits */}
                  <SidebarMenu className={`${state === 'collapsed' ? '!my-2' : '!my-1.5'}`}>
                     <SidebarMenuItem>
                        <SidebarMenuButton isActive={pathname === '/studio/live-streams'} asChild tooltip="Live Streams">
                           <Link href="/studio/live-streams" className="">
                              <Video className={`${state === 'collapsed' ? '!size-6 !mx-auto text-red-500' : '!size-5 text-red-500'} `} />
                              <span className="text-sm font-light tracking-tight">Live Streams</span>
                           </Link>
                        </SidebarMenuButton>
                     </SidebarMenuItem>
                  </SidebarMenu>

                  {/*  Chat Settings Button  */}
                  {/* TODO: Add chat settings page Like SuperChat + SuperChat Settings + SuperChat Payments */}
                  <SidebarMenu>
                     <SidebarMenuItem>
                        <SidebarMenuButton isActive={pathname === '/studio/chat-settings'} asChild tooltip="Chat Settings">
                           <Link href="/studio/chat-settings" className="">
                              <MessageSquare className={`${state === 'collapsed' ? '!size-6 !mx-auto !z-50' : '!size-5'} `} />
                              <span className="text-sm font-light tracking-tight">Chat Settings</span>
                           </Link>
                        </SidebarMenuButton>
                     </SidebarMenuItem>
                  </SidebarMenu>

                  <hr className="w-[90%] mx-auto my-3 border-gray-400/30 !dark:border-gray-800" />

                  {/*  Analytics Button  */}
                  <SidebarMenu>
                     <SidebarMenuItem>
                        <SidebarMenuButton isActive={pathname === '/studio/analytics'} asChild tooltip="Analytics">
                           <Link href="/studio/analytics" className="">
                              <ChartPie className={`${state === 'collapsed' ? '!size-6 mx-auto !z-50' : '!size-5'} `} />
                              <span className="text-sm font-light tracking-tight">Analytics</span>
                           </Link>
                        </SidebarMenuButton>
                     </SidebarMenuItem>
                  </SidebarMenu>

                  {/*  Earn Button  */}
                  <SidebarMenu className={`${state === 'collapsed' ? '!my-2' : '!my-1.5'}`}>
                     <SidebarMenuItem>
                        <SidebarMenuButton isActive={pathname === '/studio/earn'} asChild tooltip="Earn">
                           <Link href="/studio/earn" className="">
                              <Euro className={`${state === 'collapsed' ? '!size-6 mx-auto !z-50' : '!size-5'} `} />
                              <span className="text-sm font-light tracking-tight">Earn</span>
                           </Link>
                        </SidebarMenuButton>
                     </SidebarMenuItem>
                  </SidebarMenu>
               </SidebarGroup>




               {/* Bottom Group - Settings and Exit */}
               <SidebarGroup className="mt-auto mb-5">
                  {/*  Settings Button  */}
                  {/* TODO: This has to be a dropdown where I have the Settings are:
                     - General
                     - Channel -> Basic Info, Advanced Settings and Feature eligibility
                     - Payments -> SuperChat, SuperChat Settings, SuperChat Payments
                     - Uploads defaults -> Basic Info and Advanced Settings
                     - AI -> Basic Info and Advanced Settings
                     - Agreements -> Basic Info and Advanced Settings
                     - Theme Switch
                     - Language Selector

                  */}
                  <SidebarMenu>
                     <SidebarMenuItem>
                        <SidebarMenuButton isActive={pathname === '/studio/settings'} asChild tooltip="Settings">
                           <Link href="/studio/settings" className="">
                              <Bolt className={`${state === 'collapsed' ? '!size-6 mx-auto text-cta !z-50' : '!size-5 text-cta'}`} />
                              <span className="text-sm text-cta font-light tracking-tight">Settings</span>
                           </Link>
                        </SidebarMenuButton>
                     </SidebarMenuItem>
                  </SidebarMenu>

                  {/*  Billing Button  */}
                  {/* TODO: This section is where the user will pay his credits for the extra AI feauters in the Studio. */}
                  <SidebarMenu className={`${state === 'collapsed' ? '!my-2' : '!my-1.5'}`}>
                     <SidebarMenuItem>
                        <SidebarMenuButton isActive={pathname === '/studio/billing'} asChild tooltip="Billing">
                           <Link href="/studio/billing" className="">
                              <CreditCard className={`${state === 'collapsed' ? '!size-6 mx-auto' : '!size-5'}`} />
                              <span className="text-sm font-light tracking-tight">Billing</span>
                           </Link>
                        </SidebarMenuButton>
                     </SidebarMenuItem>
                  </SidebarMenu>

                  {/*  Exit Studio Button  */}
                  <SidebarMenu>
                     <SidebarMenuItem>
                        <SidebarMenuButton asChild tooltip="Exit Studio">
                           <Link href="/" className="">
                              <LogOut className={`${state === 'collapsed' ? '!size-6 mx-auto !z-50' : '!size-5'} `} />
                              <span className="text-sm font-light tracking-tight">Exit Studio</span>
                           </Link>
                        </SidebarMenuButton>
                     </SidebarMenuItem>
                  </SidebarMenu>
               </SidebarGroup>

            </SidebarContent>

         </Sidebar>
      </>
   );
}