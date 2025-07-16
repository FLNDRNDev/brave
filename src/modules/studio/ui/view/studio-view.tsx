// src/modules/studio/ui/view/studio-view.tsx

'use client';

import React from 'react';

import { VideosSection } from '../sections/videos-section';


export const StudioView = () => {
	return (
		<>
			<div className="flex flex-col pt-2.5 gap-y-6">
				{/* Section Title */}
				<div className="px-5">
					<h1 className="text-2xl font-semibold">Channel content</h1>
					<p className="text-sm text-muted-foreground">
						Manage your channel content and videos
					</p>
				</div>


				<VideosSection />
			</div>
		</>
	);
}
