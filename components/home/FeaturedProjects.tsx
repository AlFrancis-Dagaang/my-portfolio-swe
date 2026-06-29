import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import type { Project } from "@/types/project";
import { Button } from "../ui/Button";
import { Dash } from "../ui/Dash";

interface FeaturedProjectsProps {
	projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
	const project = projects[0];
	if (!project) return null;

	return (
		<section className="py-20 bg-white/50">
			<Container>
				{/* Header Section */}
				<div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-12">
					<Dash width="w-20" className="order-2 md:order-1 mt-1 md:mt-0" />

					<h2 className="text-4xl font-bold text-primary-text order-1 md:order-2">
						Featured Projects
					</h2>

					{/* Desktop Link: Hidden on mobile, pushed to the right on desktop */}
					<Link
						href="/projects"
						className="hidden md:inline-flex ml-auto text-brand font-bold hover:opacity-80 transition-opacity order-3"
					>
						View all projects{" "}
						<span aria-hidden="true" className="ml-1">
							→
						</span>
					</Link>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left: Project Details */}
					<div className="space-y-6">
						<h3 className="text-3xl font-bold text-primary-text">
							{project.title}
						</h3>

						{/* Mapped from techStack */}
						<div className="flex gap-2 flex-wrap">
							{project.techStack.map((tech) => (
								<span
									key={tech}
									className="px-3 py-1 bg-gray-200 rounded-md text-sm font-medium"
								>
									{tech}
								</span>
							))}
						</div>

						<p className="text-muted leading-relaxed">{project.description}</p>

						<div className="flex gap-4 pt-2">
							<Button href={project.githubUrl} variant="primary">
								View Github
							</Button>
							<Button href={`/projects/${project.slug}`} variant="outline">
								View project
							</Button>
						</div>
					</div>

					{/* Right: Image with Border Layer */}
					<div className="relative">
						{/* The Border Layer */}
						<div className="absolute -top-4 -right-4 w-full h-full border-2 border-brand z-0" />
						<div className="relative z-10 bg-white p-2">
							<Image
								src={project.imageUrl}
								alt={project.title}
								width={800}
								height={500}
								className="w-full h-auto object-cover"
							/>
						</div>
					</div>
				</div>

				{/* Mobile Link: Shown only on mobile, placed below the project grid */}
				<div className="mt-12 flex md:hidden">
					<Link
						href="/projects"
						className="text-brand font-bold hover:text-brand-dark transition-colors"
					>
						View all projects →
					</Link>
				</div>
			</Container>
		</section>
	);
}
