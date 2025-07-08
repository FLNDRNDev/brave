'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { SearchInput } from './searchInput'
import { ThemeSwitcher } from '../themeSwitcher'

import { SidebarTrigger } from '@/components/ui/sidebar'

import { AuthButton } from '@/modules/auth/ui/components/auth-button'


export const HomeNavbar = () => {
	const [scrolled, setScrolled] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 0);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<nav
				className={`z-50 fixed top-0 left-0 right-0 flex items-center h-16 pl-2 pr-4 border-b border-gray-400/30 !dark:border-gray-800 transition-all duration-300
					${scrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-background'}
				`}
			>
				<div className="w-full flex items-center gap-4">
					{/* Menu and Logo */}
					<div className="flex items-center flex-shrink-0">
						{/* Sidebar Trigger */}
						<SidebarTrigger className="[&svg]:size-6 mr-3 p-3 rounded-md hover:bg-gray-400/20 transition-all duration-300 cursor-pointer" />

						{/* Brand Logo + Name */}
						<Link href="/" className="cursor-pointer">
							<div className="flex items-center gap-1">
								<Image src="/Logo.svg" alt="brave brand logo" width={32} height={32} />
								<p className="hidden md:flex text-xl font-regular tracking-tight">brave</p>
							</div>
						</Link>
					</div>

					{/* Search Bar */}
					<div className="flex-1 flex items-center justify-center w-full max-w-[45rem] mx-auto">
						<div className="w-full max-w-md">
							<SearchInput />
						</div>
					</div>
					
					{/* CTA Buttons */}
					<div className="flex-shrink-0 flex items-center gap-3">
						{/* TODO: Go add Free button */}	

						{/* Theme Switch button */}
						<ThemeSwitcher />

						{/* Auth Button */}
						<AuthButton />

						{/* Language Selector */}
						{/* <LanguageSelector /> */}
					</div>
				</div>
			</nav>
		</>
	);
}