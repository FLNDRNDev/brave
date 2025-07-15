// src/components/user-avatar.tsx

'use client';

import React from 'react';
import { useUser } from '@clerk/nextjs';

import { cva, type VariantProps } from 'class-variance-authority';
import { Avatar,AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';


const avatarVariants = cva(
   'relative flex shrink-0 overflow-hidden rounded-full',
   {
      variants: {
         size: {
            default: 'size-9',
            xs: '!size-5',
            sm: 'size-6',
            lg: 'size-10',
            xl: 'h-[16rem] w-[16rem]',
         },
      },

      defaultVariants: {
         size: 'default',
      },
   }
);

interface UserAvatarProps extends VariantProps<typeof avatarVariants> {
   imageUrl: string;
   name: string;
   className?: string;
   onClick?: () => void;
}

export const UserAvatar = ({
   className,
   size,
   imageUrl,
   name,
   onClick,
}: UserAvatarProps) => {
   
   return (
      <Avatar className={cn(avatarVariants({ size, className }))} onClick={onClick}>
         <AvatarImage src={imageUrl} alt={name} />
      </Avatar>
   );
}