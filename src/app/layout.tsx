import './globals.css';
import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';

const leauge_spartan = League_Spartan({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Aron Hawkins - Software Engineer and Web Developer',
	description: 'Software engineer and web developer specializing in Next.js, TypeScript, Webflow, and Shopify. ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={` ${leauge_spartan.className}`}>{children}</body>
		</html>
	);
}
