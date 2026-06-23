import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function ProjectNotFound() {
	return (
		<section className="py-12 md:py-20 border-t border-border-light bg-transparent min-h-screen flex items-center">
			<Container>
				<div className="text-center max-w-2xl mx-auto">
					{/* 404 Label */}
					<span className="text-xs font-mono font-medium uppercase text-gray-500 tracking-wider block mb-4">
						404 — Not Found
					</span>

					<h1 className="text-[52px] md:text-[64px] font-black uppercase tracking-tighter text-primary-text mb-3 font-sans">
						Project Not Found
					</h1>
					<p className="text-lg font-normal text-muted mb-8 font-sans">
						The project you're looking for doesn't exist or may have been
						removed.
					</p>

					<div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
						<Link
							href="/projects"
							className="px-6 py-3 bg-brand text-white font-bold uppercase tracking-wider transition-colors hover:bg-brand-dark font-sans border border-brand"
						>
							View All Projects
						</Link>
						<Link
							href="/"
							className="px-6 py-3 bg-transparent text-primary-text font-bold uppercase tracking-wider transition-colors border border-border-light hover:border-brand hover:text-brand font-sans"
						>
							Go Home
						</Link>
					</div>
				</div>
			</Container>
		</section>
	);
}
