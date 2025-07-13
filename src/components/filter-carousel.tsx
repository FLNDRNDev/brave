// src/components/filter-carousel.tsx

'use client';

import { useEffect, useState } from 'react';
import { Video } from 'lucide-react';

import { 
   Carousel,
   CarouselApi,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';


interface FilterCarouselProps {
   values?: string | null;
   isLoading?: boolean;
   onSelect?: (value: string | null) => void;
   data?: {
      value: string;
      label: string;
   }[];
};

export const FilterCarousel = ({ 
   values, 
   isLoading, 
   onSelect, 
   data }: FilterCarouselProps) => {

      const [api, setApi] = useState<CarouselApi | null>(null);
      const [current, setCurrent] = useState(0);
      const [count, setCount] = useState(0);

      useEffect(() => {
         if (!api) return; // <-- Only run the effect if api is set

         setCount(api.scrollSnapList().length);
         setCurrent(api.selectedScrollSnap() + 1);

         api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
         })

      }, [api]);

   return (
      <>
         <div className="relative w-full">
            {/* Left Fade */}  
            <div className={cn(
               "absolute z-30 left-6 top-0 bottom-0 w-14 bg-gradient-to-r from-background to-transparent pointer-events-none", 
               current === 1 && "hidden"
            )} />
            
            {/* Right Fade */}
            <div className={cn(
               "absolute z-30 right-6 top-0 bottom-0 w-14 bg-gradient-to-l from-background to-transparent pointer-events-none", 
               current === count && "hidden"
            )} 
         />
            <Carousel
               setApi={setApi}
               opts={{
                  align: 'start',
                  dragFree: true,
               }}
               className="w-full px-10"
            >  
               {/* TODO: Keep 'All', 'Picks', and 'LIVE' as hardcoded badges here. Do NOT include them in the database or seed-categories to avoid duplicate display in the carousel. */}
               <CarouselContent className="-ml-3 !bg-none">
                  {!isLoading && (
                     <>
                        {/* Hardcoded ALL Badge */}
                        <CarouselItem
                           onClick={() => onSelect?.(null)} 
                           className="pl-3 basis-auto"
                        >
                           <Badge 
                              variant={!values ? 'default' : 'secondary'}
                              onClick={() => onSelect?.(null)}
                              className="px-3 py-1 whitespace-nowrap rounded-lg text-[0.8125rem] cursor-pointer"
                           >
                              All
                           </Badge>
                        </CarouselItem>

                        {/* Hardcoded Picks Badge */}
                        <CarouselItem
                           onClick={() => onSelect?.(null)} 
                           className="pl-3 basis-auto"
                        >
                           <Badge 
                              variant={!values ? 'secondary' : 'default'}
                              onClick={() => onSelect?.(null)}
                              className="rounded-lg px-3 py-1 whitespace-nowrap text-[0.8125rem] cursor-pointer"
                           >
                              Picks
                           </Badge>
                        </CarouselItem>

                        {/* Hardcoded LIVE Badge */}
                        <CarouselItem
                           onClick={() => onSelect?.(null)} 
                           className="pl-3 basis-auto"
                        >
                           <Badge 
                              variant={!values ? 'live' : 'live'}
                              onClick={() => onSelect?.(null)}
                              className="rounded-lg px-3 py-1 whitespace-nowrap text-[0.8125rem] cursor-pointer"
                           >
                              <Video className="size-4" /> LIVE
                           </Badge>
                        </CarouselItem>
                     </>
                  )}

                  {isLoading && Array.from({ length: 28 }).map((_, index) => (
                     <CarouselItem className="pl-3 basis-auto whitespace-nowrap text-[0.8125rem] cursor-pointer" key={index}>
                        <Skeleton className="rounded-lg px-3 py-0.5 h-full w-[100px] text-[0.8125rem] font-semibold">
                           &nbsp;
                        </Skeleton>
                     </CarouselItem>
                  ))}

                  {!isLoading && data?.map((item) => (
                     <CarouselItem 
                        key={item.value}
                        onClick={() => onSelect?.(item.value)}
                        className="pl-3 basis-auto"
                     >
                        
                        {/* TODO: make only the LIVE badge red with following styles [!border-red-500 !bg-red-500 !hover:bg-red-500/90 !transition-colors !duration-300 !text-white !font-medium] */}
                        <Badge
                           variant={item.value === 'LIVE' ? 'live' : (values === item.value ? 'outline' : 'outline')}
                           onClick={() => onSelect?.(item.value)}
                           className="rounded-lg px-3 py-1 whitespace-nowrap text-[0.8125rem] cursor-pointer"
                        >
                           {item.label}
                        </Badge>
                     </CarouselItem>
                  ))}
               </CarouselContent>

               <CarouselPrevious className="z-20 left-0 top-1/2 -translate-y-1/2" />
               <CarouselNext className="z-20 right-0 top-1/2 -translate-y-1/2" />
            </Carousel>
         </div>
      </>
   )
}