import { SidebarProvider } from "@/components/ui/sidebar";

import { StudioNavbar } from "@/modules/studio/ui/components/studio-navbar";
import { StudioSidebar } from "@/modules/studio/ui/components/studio-sidebar";


interface StudioLayoutProps { 
   children: React.ReactNode;
}

export const StudioLayout = ({ children }: StudioLayoutProps) => {
   return (
      <>
         <SidebarProvider>
            <div className="w-full">
               <StudioNavbar />
            
            <div className="flex min-h-screen pt-[4.5rem]">

               {/* Home Sidebar */}
               <StudioSidebar />

               {/* Main content */}
               <main className="flex-1 overflow-y-auto">
                  {children}
               </main>
            </div>

            </div>
         </SidebarProvider>
      </>
   );
}