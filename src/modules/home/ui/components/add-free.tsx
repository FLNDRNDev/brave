'use client';

import React from 'react';
import { Component } from 'lucide-react';

import { Button } from '@/components/ui/button';


export const AddFree = () => {
  return (
    <>
      <Button 
         variant="custom"
         className="w-9 h-9 md:w-fit md:h-9 md:px-4 [&svg]:size-4 border !border-cta !dark:border-cta"
      >
         <Component className="size-4 text-cta" />
         <span  className="hidden md:block text-[0.8125rem] font-light tracking-tight">Go Add Free</span>
      </Button>
    </>
  );
}