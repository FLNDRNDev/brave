// src/modules/studio/ui/components/studio-navbar/index.tsx

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { SidebarTrigger } from '@/components/ui/sidebar';

import { ThemeSwitcher } from '@/modules/studio/ui/components/themeSwitcher';

import { AuthButton } from '@/modules/auth/ui/components/auth-button';
import { HelpButton } from '@/modules/studio/ui/components/help-button';
import { StudioUploadModel } from '@/modules/studio/ui/components/studio-upload-model';
import { NotificationButton } from '@/modules/studio/ui/components/notification-button';


export const StudioNavbar = () => {
	const [scrolled, setScrolled] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 0);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);


	// TODO: Studio / Navbar and Sidebar is only available in English for now
	return (
		<>
			{/* Studio Navbar */}
			<nav className="z-50 fixed top-0 left-0 right-0 flex items-center h-18 px-2 pr-4 bg-background shadow-md border-b border-gray-400/30 !dark:border-gray-800">
				<div className="w-full flex items-center gap-4">
					{/* Menu and Logo */}
					<div className="flex items-center flex-shrink-0">
						{/* Sidebar Trigger */}
						<SidebarTrigger className="[&svg]:size-6 mr-3 p-3 rounded-md hover:bg-gray-400/20 transition-all duration-300 cursor-pointer" />

						{/* Brand Logo + Name */}
						<Link href="/studio" className="cursor-pointer">
							<div className="flex items-center gap-1">
								<Image src="/Logo.svg" alt="brave brand logo" width={32} height={32} className="hidden md:flex" />
								<p className="text-xl font-semibold tracking-tight">Studio</p>
							</div>
						</Link>
					</div>

					{/* Spacer */}
					<div className="flex-1" />
					
					{/* CTA Buttons */}
					<div className="flex-shrink-0 flex items-center gap-3">
						{/* Help button */}
						<HelpButton />

						{/* Notifications Modal button */}
						<NotificationButton />

						{/* Create button */}
						<StudioUploadModel />

						{/* Theme Switch button */}
						<ThemeSwitcher />

						{/* Auth Button */}
						<AuthButton />

						{/* Language Selector */}
						{/* TODO: Add way later the language selector in the Studio Navbar */}
						{/* <LanguageSelector /> */}
					</div>
				</div>
			</nav>
		</>
	);
}