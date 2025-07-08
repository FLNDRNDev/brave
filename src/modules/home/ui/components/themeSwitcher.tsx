'use client'

import React from 'react'
import { SunIcon, MoonIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = React.useState(false)

	// Avoid hydration mismatch
	React.useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return (
			<Button variant="customRounded" size="icon">
				<SunIcon />
			</Button>
		)
	}

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<Button 
			variant="customRounded" 
			size="icon" 
			onClick={toggleTheme}
			aria-label="Toggle theme"
		>
			{theme === 'dark' ? (
				<SunIcon className="text-sun" />
			) : (
				<MoonIcon className="text-moon" />
			)}
		</Button>
	)
}