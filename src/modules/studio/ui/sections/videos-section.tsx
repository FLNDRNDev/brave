// src/modules/studio/ui/sections/videos-section.tsx

'use client';

import { Suspense } from "react";
import Link from "next/link";
import { ErrorBoundary } from "react-error-boundary";

import { 
	Table, 
	TableBody, 
	TableCell, 
	TableHead, 
	TableHeader, 
	TableRow } from "@/components/ui/table";

import { InfiniteScroll } from "@/components/infinite-scroll";
import { DEFAULT_LIMIT } from "@/constants";
import { trpc } from "@/trpc/client";

// ADDED: Dynamic import for UserButton to prevent hydration errors
// REASON: Clerk UserButton component causes server/client mismatch during hydration
import dynamic from 'next/dynamic';

// ADDED: Client-side only UserButton component
// REASON: Prevents hydration errors by ensuring component only renders on client side
const UserButton = dynamic(() => import('@clerk/nextjs').then(mod => mod.UserButton), {
  ssr: false
});


export const VideosSection = () => {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<ErrorBoundary fallback={<p>Error...</p>}>
				<VideosSectionSuspense />
			</ErrorBoundary>
		</Suspense>
	);
}

export const VideosSectionSuspense = () => {
	// ORIGINAL: const { data, query, error, isLoading } = trpc.studio.getMany.useInfiniteQuery(
	// FIXED: Removed non-existent 'query' property and destructured infinite query methods directly
	// REASON: useInfiniteQuery doesn't return a 'query' object - the methods are available directly on the returned object
	// ORIGINAL: const { videos, error, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } = trpc.studio.getMany.useInfiniteQuery(
	// FIXED: Changed 'videos' back to 'data' as that's the correct property name from useInfiniteQuery
	// REASON: useInfiniteQuery returns 'data' not 'videos' - the data contains the pages with items
	const { data, error, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } = trpc.studio.getMany.useInfiniteQuery(
		{
			limit: DEFAULT_LIMIT,
		},
		{
			getNextPageParam: (lastPage) => lastPage.nextCursor,
		}
	);
	
	if (isLoading) {
		return <div>Loading...</div>;
	}
	
	if (error) {
		return <div>Error: {error.message}</div>;
	}
	
	return (
		<>
			<div>
				<div className="border-y">
					<Table>
						{/* Table Header */}
						<TableHeader>
							<TableRow>
								<TableHead className="w-[31.875rem] pl-6">Video</TableHead>
								<TableHead className="">Visibility</TableHead>
								<TableHead className="">Status</TableHead>
								<TableHead className="">Date</TableHead>
								<TableHead className="text-right">Views</TableHead>
								<TableHead className="text-right">Comments</TableHead>
								<TableHead className="text-right pr-6">Likes</TableHead>
							</TableRow>
						</TableHeader>

						{/* Table Body */}
						<TableBody>
							{/* ORIGINAL: {videos.pages.flatMap((page) => page.items).map((video) => ( */}
							{/* FIXED: Changed 'videos' to 'data' and added type annotations */}
							{/* REASON: useInfiniteQuery returns 'data' property, and TypeScript needs explicit types */}
							{data?.pages.flatMap((page: any) => page.items).map((video: any) => (
								<Link href={`/studio/videos/${video.id}`} key={video.id} legacyBehavior>
									<TableRow className="cursor-pointer">
										<TableCell className="pl-6">
											{video.title}
										</TableCell>
										<TableCell>
											visibility
										</TableCell>
										<TableCell>
											status
										</TableCell>
										<TableCell>
											date
										</TableCell>
										<TableCell>
											views
										</TableCell>
										<TableCell>
											comments
										</TableCell>
										<TableCell>
											likes
										</TableCell>
									</TableRow>
								</Link>
							))}
						</TableBody>
					</Table>
				</div>
			</div>

			{/* Infinite Scroll */}
			<InfiniteScroll
				// ORIGINAL: isManual
				// FIXED: Removed isManual prop
				// REASON: isManual prop was causing infinite scroll to not work as expected
				// isManual={false} // TODO: This is the real idea behind the infinite scroll, infinited scrolling true the list of videos
				isManual={true}
				// ORIGINAL: hasNextpage={query.hasNextPage}
				// FIXED: Use destructured hasNextPage directly instead of query.hasNextPage
				hasNextpage={hasNextPage}
				// ORIGINAL: isFetchingNextPage={query.isFetchingNextPage}
				// FIXED: Use destructured isFetchingNextPage directly
				isFetchingNextPage={isFetchingNextPage}
				// ORIGINAL: fetchNextpage={query.fetchNextPage}
				// FIXED: Use destructured fetchNextPage directly
				fetchNextpage={fetchNextPage}
			/>
		</>
	);
}
