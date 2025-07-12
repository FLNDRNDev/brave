import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "next-themes";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";

import { TRPCReactProvider } from "@/trpc/client";

// font inter
const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// font poppins
const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
	title: "brave",
	description: "Open video platform championing free speech and unrestricted content sharing. A YouTube alternative prioritizing creator freedom with community-driven moderation. Freedom to speak. Power to change.",
	icons: {
		icon: "/favicon.svg",
	}
};

export default function RootLayout({
  	children,
}: {
  	children: React.ReactNode;
}) {
	return (
		<ClerkProvider afterSignOutUrl="/">
			<html lang="en" suppressHydrationWarning>
				<body className={`${inter.className} ${poppins.variable} antialiased`}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<TRPCReactProvider>
							{children}
						</TRPCReactProvider>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
