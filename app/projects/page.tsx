import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { getProjects } from "@/lib/projects";
import { ProjectsGrid } from "./_components/ProjectsGrid";

export const metadata: Metadata = {
	title: "Projects | Al Francis Daga-ang",
	description:
		"Explore my portfolio of projects including cloud infrastructure, web applications, and REST APIs built with Next.js, React, and AWS.",
	openGraph: {
		title: "Projects — Al Francis Daga-ang",
		description:
			"Full-stack projects showcasing expertise in cloud, web, and API development.",
		images: ["/og-image.png"],
	},
};

export default async function ProjectsPage() {
	const allProjects = await getProjects();

	return (
		<section className="py-12 md:py-20 border-t border-border-light bg-transparent">
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-125 rounded-full bg-brand/10 blur-[120px]" />
			</div>
			<Container>
				{/* Header */}
				<div className="mb-12">
					<h1 className="text-[52px] md:text-[64px] font-black uppercase tracking-tighter text-primary-text mb-3 font-sans">
						Projects
					</h1>
					<p className="text-lg font-normal text-muted max-w-2xl font-sans">
						A collection of full-stack projects showcasing expertise in cloud
						infrastructure, modern web development, and scalable APIs.
					</p>
				</div>

				{/* Projects Grid with Filter (Client Component) */}
				<ProjectsGrid projects={allProjects} />
			</Container>
		</section>
	);
}
