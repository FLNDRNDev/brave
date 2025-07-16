// src/hooks/use-intersection-observer.ts

import { useEffect, useRef, useState } from "react";


export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	// ORIGINAL: const ref = targetRef<HTMLDivElement>(null);
	// FIXED: Changed 'targetRef' to 'useRef' and variable name from 'ref' to 'targetRef' to match usage throughout the code
	const targetRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// ORIGINAL: const observer = new IntersectionObserver(([entry]) => {
		// 	setIsIntersecting(entry.isIntersecting);
		// }, options);
		
		// ADDED: Validation for rootMargin format to prevent IntersectionObserver constructor errors
		// REASON: The error "rootMargin must be specified in pixels or percent" occurs when invalid format is passed
		const validatedOptions = { ...options };
		if (validatedOptions.rootMargin && typeof validatedOptions.rootMargin === 'string') {
			// Ensure rootMargin has proper CSS margin format (e.g., "10px", "10px 20px")
			const marginRegex = /^-?\d+(\.\d+)?(px|%|em|rem|vh|vw)$/;
			const margins = validatedOptions.rootMargin.split(' ');
			const isValid = margins.every(margin => marginRegex.test(margin));
			
			if (!isValid) {
				console.warn('Invalid rootMargin format. Using default "0px"');
				validatedOptions.rootMargin = "0px";
			}
		}

		const observer = new IntersectionObserver(([entry]) => {
			setIsIntersecting(entry.isIntersecting);
		}, validatedOptions);

		if (targetRef.current) {
			observer.observe(targetRef.current);
		}

		return () => observer.disconnect();
	}, [options]);

	return { targetRef, isIntersecting };
}