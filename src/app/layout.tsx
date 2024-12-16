import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PopupWidget } from '@/components/PopupWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: "Peraza's Cleaning Services",
	description: 'Your go-to commercial cleaning service in the DMV area'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider attribute='class'>
					<Navbar />
					<div>{children}</div>
					<Footer />
					{/* <PopupWidget /> */}
				</ThemeProvider>
			</body>
		</html>
	);
}
