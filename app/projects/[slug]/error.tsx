"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { Dash } from "@/components/ui/Dash";

interface ErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export default function ProjectError({ error, reset }: ErrorProps) {
	useEffect(() => {
		console.error("Project page error:", error);
	}, [error]);

	return (
		<section className="py-12 md:py-20 border-t border-border-light bg-transparent min-h-screen flex items-center">
			<Container>
				<div className="text-center max-w-2xl mx-auto">
					{/* Formal Error Header with Dashes */}
					<div className="flex items-center justify-center gap-3 md:gap-6 mb-6 w-full">
						<Dash width="w-8 sm:w-16 md:w-24" className="shrink-0" />
						<h1 className="text-4xl sm:text-[52px] md:text-[64px] font-black text-primary-text font-sans leading-none md:whitespace-nowrap text-center">
							Unexpected Error
						</h1>
						<Dash width="w-8 sm:w-16 md:w-24" className="shrink-0" />
					</div>

					<p className="text-lg font-normal text-muted mb-8 font-sans">
						An unexpected error occurred while loading this project. Please try
						again or go back to the projects list.
					</p>

					{/* Error Details */}
					{process.env.NODE_ENV === "development" && error.message && (
						<div className="bg-red-50 border border-red-200 rounded p-4 mb-8 text-left">
							<p className="text-sm font-mono text-red-800 wrap-break-word">
								{error.message}
							</p>
						</div>
					)}

					{/* Action Buttons */}
					<div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
						<button
							type="button"
							onClick={reset}
							className="px-6 py-3 bg-brand text-white font-bold uppercase tracking-wider transition-colors hover:bg-brand-dark font-sans border border-brand"
						>
							Try Again
						</button>
						<Link
							href="/projects"
							className="px-6 py-3 bg-transparent text-primary-text font-bold uppercase tracking-wider transition-colors border border-border-light hover:border-brand hover:text-brand font-sans"
						>
							Back to Projects
						</Link>
					</div>
				</div>
			</Container>
		</section>
	);
}
