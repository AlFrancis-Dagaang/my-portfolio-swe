import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // 1. Import the font
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

// 2. Configure Poppins with the weights you need for your design
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "700", "900"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Al Francis Dagaang | Software Engineer & Cloud Enthusiast",
	description:
		"Portfolio website of Al Francis Dagaang, specializing in full-stack engineering and cloud architectures.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		// 3. Add the font variable class to your html tag
		<html lang="en" className={poppins.variable}>
			<body className="min-h-screen flex flex-col antialiased">
				<div className="dot-grid-bg" aria-hidden="true" />
				<div className="relative z-10 flex flex-col min-h-screen">
					<Navbar />
					<main className="grow w-full">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
