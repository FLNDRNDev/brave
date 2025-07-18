// src/modules/home/ui/views/home-view.tsx

import { trpc } from "@/trpc/server";
import { CategoriesSection } from "../sections/categories-section";


interface HomeViewProps {
   categoryId?: string;
};

const HomeView = ({ categoryId }: HomeViewProps) => {
   return (
      <>
         <div className="max-w-[150rem] mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6">
            <CategoriesSection categoryId={categoryId} />
         </div>
      </>
   );
}

export default HomeView;