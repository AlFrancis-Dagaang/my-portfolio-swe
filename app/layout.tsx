import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

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
		<html lang="en">
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
