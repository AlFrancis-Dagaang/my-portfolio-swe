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
		<nav className="sticky top-0 z-50 w-full border-b border-border-light bg-white/80 backdrop-blur-md">
			<Container>
				<div className="flex h-16 items-center justify-between">
					{/* Updated Text Logo */}
					<Link href="/" aria-label="Home" className="flex items-center group">
						<span className=" font-bold text-lg md:text-xl tracking-tight text-primary-text transition-colors">
							Al Francis <span className="text-brand">Daga-ang</span>
						</span>
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
											? "text-brand"
											: "text-primary-text hover:text-brand"
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
						className="flex h-9 w-9 items-center justify-center rounded-md md:hidden text-primary-text"
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
				<div className="border-b border-border-light bg-white md:hidden">
					<div className="space-y-1 px-4 py-3">
						{navLinks.map((link) => {
							const isActive = pathname === link.href;
							return (
								<Link
									key={link.href}
									href={link.href}
									onClick={() => setIsOpen(false)}
									// Notice: I also updated the active mobile background to use Tailwind arbitrary values to match your new #ff7354 brand color opacity if needed, or you can use bg-brand/5
									className={`block px-3 py-2 text-base font-medium rounded-md ${
										isActive ? "text-brand bg-brand/10" : "text-primary-text"
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
