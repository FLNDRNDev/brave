'use client';

import React from 'react';

import { Sidebar, SidebarContent } from '@/components/ui/sidebar';

import { ExplorerSection } from './explorer-section';
import { FeaturedChannels } from './featured-section';
import { MainSection } from './main-section';


export const HomeSidebar = () => {
   return (
      <>
         <Sidebar className="z-40 pt-16 border-none" collapsible="icon">
            <SidebarContent className="bg-dark">
               <MainSection />

                  <hr className="my-2 border-t border-gray-400/50 !dark:border-gray-800 w-[90%] mx-auto collapse:w-[90%] collapse:mx-auto" />

               <ExplorerSection />

                  <hr className="my-2 border-t border-gray-400/50 !dark:border-gray-800 w-[90%] mx-auto collapse:w-[90%] collapse:mx-auto" />

               <FeaturedChannels />

                  <hr className="my-2 border-t border-gray-400/50 !dark:border-gray-800 w-[90%] mx-auto collapse:w-[90%] collapse:mx-auto" />

               {/* <CommunitySection /> */}

               {/* <SettingsSection /> */}
            </SidebarContent>
         </Sidebar>
      </>
   );
}