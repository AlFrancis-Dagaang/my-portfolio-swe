import Link from "next/link";
import React from "react";

type ButtonProps = {
	href: string;
	children: React.ReactNode;
	variant?: "primary" | "outline";
	className?: string;
};

export function Button({
	href,
	children,
	variant = "primary",
	className = "",
}: ButtonProps) {
	const baseStyles =
		"inline-flex items-center justify-center px-6 py-3 text-base md:text-lg font-medium transition-colors duration-200";

	const variants = {
		primary:
			"bg-brand text-white hover:bg-brand-dark border-2 border-transparent",
		outline:
			"bg-transparent text-primary-text border-2 border-brand hover:bg-brand/10",
	};

	return (
		<Link
			href={href}
			className={`${baseStyles} ${variants[variant]} ${className}`}
		>
			{children}
		</Link>
	);
}
