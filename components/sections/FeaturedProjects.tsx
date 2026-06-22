import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/project/ProjectCard";
import type { Project } from "@/types/project";

interface FeaturedProjectsProps {
	projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
	return (
		<section className="py-16 border-t border-border-light bg-transparent">
			<Container>
				<div className="flex items-baseline justify-between mb-10">
					<h2 className="text-[32px] font-bold uppercase text-primary-text font-sans">
						Featured Projects
					</h2>

					<Link
						href="/projects"
						className="text-brand hover:text-brand-dark font-bold text-base transition-colors inline-flex items-center gap-1 group font-sans"
					>
						View all projects
						<span className="transform transition-transform duration-200 group-hover:translate-x-1">
							→
						</span>
					</Link>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{projects.map((project) => (
						<ProjectCard key={project.slug} project={project} />
					))}
				</div>
			</Container>
		</section>
	);
}
