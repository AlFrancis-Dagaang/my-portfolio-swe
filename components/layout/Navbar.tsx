"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./Container";

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	const navLinks = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Projects", href: "/projects" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<nav className="sticky top-0 z-50 w-full border-b border-[#e5e7eb] bg-white/80 backdrop-blur-md">
			<Container>
				<div className="flex h-16 items-center justify-between">
					{/* Coded SVG/CSS "AF" Logo */}
					<Link href="/" aria-label="Home" className="flex items-center gap-2 group">
						<div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#8B0000] bg-white transition-colors group-hover:bg-[#8B0000]/5">
							<span className="font-sans font-black text-xs tracking-tighter text-[#8B0000]">
								AF
							</span>
						</div>
					</Link>

					{/* Desktop Navigation Link Menu */}
					<div className="hidden md:flex items-center gap-8">
						{navLinks.map((link) => {
							const isActive = pathname === link.href;
							return (
								<Link
									key={link.href}
									href={link.href}
									className={`text-sm font-medium transition-colors ${
										isActive
											? "text-[color:var(--color-brand)]"
											: "text-[color:var(--color-primary-text)] hover:text-[color:var(--color-brand)]"
									}`}
								>
									{link.name}
								</Link>
							);
						})}
					</div>

					{/* Hamburger Mobile Menu Toggle Button */}
					<button
						type="button"
						onClick={() => setIsOpen(!isOpen)}
						className="flex h-9 w-9 items-center justify-center rounded-md md:hidden text-[#0a0a0a]"
						aria-label="Toggle Navigation Menu"
						aria-expanded={isOpen}
					>
						<svg
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							{isOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>
			</Container>

			{/* Mobile Menu Panel Dropdown */}
			{isOpen && (
				<div className="border-b border-[#e5e7eb] bg-white md:hidden">
					<div className="space-y-1 px-4 py-3">
						{navLinks.map((link) => {
							const isActive = pathname === link.href;
							return (
								<Link
									key={link.href}
									href={link.href}
									onClick={() => setIsOpen(false)}
									className={`block px-3 py-2 text-base font-medium rounded-md ${
										isActive
											? "text-[#8B0000] bg-[#8B0000]/5"
											: "text-[#0a0a0a]"
									}`}
								>
									{link.name}
								</Link>
							);
						})}
					</div>
				</div>
			)}
		</nav>
	);
}
