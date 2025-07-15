// src/modules/studio/ui/components/studio-upload-model.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';


export const StudioUploadModel = () => {
  return (
    <>
      <Button 
         asChild
         variant="custom"
         className="w-8 h-8 md:w-fit md:mx-5 md:h-8 md:px-4 [&svg]:size-4 cursor-pointer"
      >
        <Link href="/create">
          <Plus className="size-5 text-cta" />
          <span className="hidden md:block text-[0.8125rem] text-cta font-light tracking-tight">Create</span>
        </Link>
      </Button>
    </>
  );
}