"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Container } from "@/components/layout/Container";

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
					{/* Error Icon */}
					<div className="mb-6 flex justify-center">
						<div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full">
							<svg
								className="w-8 h-8 text-brand"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
					</div>

					{/* Error Message */}
					<h1 className="text-[52px] md:text-[64px] font-black uppercase tracking-tighter text-primary-text mb-3 font-sans">
						Oops!
					</h1>
					<p className="text-lg font-normal text-muted mb-6 font-sans">
						Something went wrong while loading this project. Please try again or
						go back to the projects list.
					</p>

					{/* Error Details (Optional - can be hidden in production) */}
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
