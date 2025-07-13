// src/modules/home/ui/sections/category-section.tsx

'use client';

import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useRouter } from 'next/navigation';

import { FilterCarousel } from '@/components/filter-carousel';
import { trpc } from '@/trpc/client';


interface CategoriesSectionProps {
   categoryId?: string;
};


export const CategoriesSection = ({ categoryId }: CategoriesSectionProps) => {
   return (
      // TODO: make the fallback a loading component so it can be Professional styled
      <Suspense fallback={<FilterCarousel isLoading data={[]} onSelect={() => {}} />}>
         <ErrorBoundary fallback={<p>Error...</p>}>
            <CategoriesSectionSuspense categoryId={categoryId} />
         </ErrorBoundary>
      </Suspense>
   )
}

const CategoriesSectionSuspense = ({ categoryId }: CategoriesSectionProps) => {
   const router = useRouter();
   const [categories] = trpc.categories.getMany.useSuspenseQuery();

   const data = categories.map(({ id, name }) => ({
      value: id,
      label: name,
   }));


   const onSelect = (value: string | null) => {
      const url = new URL(window.location.href);

      if (value) {
         url.searchParams.set('categoryId', value);
      } 
      else {
         url.searchParams.delete('categoryId');
      }

      router.push(url.toString());
   }

   return (
      <FilterCarousel
         data={data}
         values={categoryId}
         onSelect={onSelect}
      />
   );
};
