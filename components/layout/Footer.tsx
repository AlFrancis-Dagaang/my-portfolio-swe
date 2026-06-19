import { Container } from "./Container";

export function Footer() {
	return (
		<footer className="w-full border-t border-[#e5e7eb] py-8 bg-white/50 backdrop-blur-sm mt-auto">
			<Container>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-[#6b7280]">
					<a
						href="https://github.com"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#8B0000] transition-colors"
					>
						GitHub
					</a>
					<span className="hidden sm:inline text-[#e5e7eb]">•</span>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#8B0000] transition-colors"
					>
						LinkedIn
					</a>
				</div>
			</Container>
		</footer>
	);
}
