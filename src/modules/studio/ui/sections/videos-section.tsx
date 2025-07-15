// src/modules/studio/ui/sections/videos-section.tsx

'use client';

import { trpc } from "@/trpc/client";
import { DEFAULT_LIMIT } from "@/constants";


export const VideosSection = () => {
	const { data, error, isLoading } = trpc.studio.getMany.useInfiniteQuery(
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
		<div>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
}
