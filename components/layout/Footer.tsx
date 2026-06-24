import { Container } from "./Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
	return (
		<footer className="w-full border-t border-border-light py-8 bg-white/50 backdrop-blur-sm mt-auto">
			<Container>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-muted">
					<a
						href="https://github.com/AlFrancis-Dagaang"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 hover:text-brand transition-colors"
					>
						<FaGithub className="h-4 w-4" />
						<span>GitHub</span>
					</a>
					<span className="hidden sm:inline text-border-light">•</span>
					<a
						href="https://www.linkedin.com/in/al-francis-daga-ang-734043348/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 hover:text-brand transition-colors"
					>
						<FaLinkedin className="h-4 w-4" />
						<span>LinkedIn</span>
					</a>
				</div>
			</Container>
		</footer>
	);
}
