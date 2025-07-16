// src/components/infinite-scroll.tsx

import { useEffect, useRef } from "react";
import { Loader } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";


interface InfiniteScrollProps {
   isManual?: boolean;
    hasNextpage: boolean;
    isFetchingNextPage: boolean;
    fetchNextpage: () => void;
};

export const InfiniteScroll = ({
   isManual = false,
   hasNextpage,
   isFetchingNextPage,
   fetchNextpage,
}: InfiniteScrollProps) => {
   const { targetRef, isIntersecting } = useIntersectionObserver({
      threshold: 0.5,
      rootMargin: "100px",
   });

   useEffect(() => {
      if (isIntersecting && hasNextpage && !isFetchingNextPage && !isManual) {
         fetchNextpage();
      }
   }, [isIntersecting, hasNextpage, isFetchingNextPage, isManual, fetchNextpage]);

   return (
      <>
         <div className="flex flex-col items-center p-4 gap-4">
            <div 
               ref={targetRef} 
               className="h-1" 
            />

            {hasNextpage ? (
               <Button
                  variant="customOutline"
                  onClick={() => fetchNextpage()}
                  // ORIGINAL: disabled={hasNextpage || isFetchingNextPage}
                  // FIXED: Changed logic to disable only when fetching or no more pages
                  // REASON: Button was disabled when hasNextpage was true, preventing clicks
                  disabled={!hasNextpage || isFetchingNextPage}
                  className="!h-9 !text-[0.8125rem] cursor-pointer"
               >
                  {isFetchingNextPage ? (
                     <>
                        <Loader className="size-4 animate-spin mr-2" />
                        Loading...
                     </>
                  ) : (
                     "Load more Videos"
                  )}
               </Button>
               ) : (
               <p className="text-xs text-muted-foreground">
                  No more videos to load
               </p>
            )}
         </div>
      </>
   )
}
