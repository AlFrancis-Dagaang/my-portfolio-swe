import { Container } from "@/components/layout/Container";
import skills from "@/data/skills.json";

export function TechStack() {
	return (
		<section className="py-12 border-t border-[#e5e7eb] bg-white/40 backdrop-blur-md">
			<Container>
				<div className="max-w-3xl">
					<h2 className="text-sm font-bold tracking-widest uppercase text-[#0a0a0a] mb-6 font-sans">
						Tech Stack
					</h2>
					<div className="flex flex-wrap gap-2.5">
						{skills.map((tech) => (
							<span
								key={tech}
								className="px-4 py-1.5 border border-brand text-brand text-sm font-medium bg-white rounded-full font-sans"
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}
