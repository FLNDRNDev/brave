// src/modules/studio/ui/components/studio-upload-model.tsx

'use client';

import { Loader, Plus } from 'lucide-react';

import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { trpc } from '@/trpc/client';


export const StudioUploadModel = () => {
	const utils = trpc.useUtils();
	const create = trpc.videos.create.useMutation({
		onSuccess: () => {
			utils.studio.getMany.invalidate();
			toast.success('Video created successfully');
		},
		onError: () => {
			toast.error('Something went wrong!');
		},
	});

	return (
		<>
			<Button 
				onClick={() => create.mutate()}
				disabled={create.isPending}
				variant="custom"
				className="w-8 h-8 md:w-fit md:mx-5 md:h-8 md:px-4 [&svg]:size-4 border border-gray-200 dark:border-gray-800 hover:border-[#1da1f2] dark:hover:border-[#1da1f2] bg-[#1da1f2]/10 dark:hover:bg-[#1da1f2]/20 cursor-pointer"
			>
				{create.isPending ? <Loader className="size-5 animate-spin" /> : <Plus className="!size-6" />}
				<span className="hidden md:block text-[0.8125rem] font-light tracking-tight">Create</span>
			</Button>
		</>
	);
}
