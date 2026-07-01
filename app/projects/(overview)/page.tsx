import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Dash } from "@/components/ui/Dash"; // Add your Dash import!
import { getProjects } from "@/lib/projects";
import { ProjectsGrid } from "../../../components/project/ProjectsGrid";

export const metadata: Metadata = {
	title: "Projects | Al Francis Daga-ang",
	description:
		"Explore my portfolio of projects including cloud infrastructure, web applications, and REST APIs built with Next.js, React, and AWS.",
	openGraph: {
		title: "Projects — Al Francis Daga-ang",
		description:
			"Full-stack projects showcasing expertise in cloud, web, and API development.",
	},
};

export default async function ProjectsPage() {
	const allProjects = await getProjects();

	return (
		<section className="py-12 md:py-20  bg-transparent relative overflow-hidden">
			<Container>
				{/* Header */}
				<div className="flex flex-col items-center justify-center text-center mb-16 space-y-4">
					<div className="flex items-center justify-center gap-4 md:gap-6">
						<Dash width="w-16 md:w-24" />
						<h1 className="text-4xl md:text-5xl font-black text-primary-text leading-none">
							My <span className="text-brand">Projects</span>
						</h1>
						<Dash width="w-16 md:w-24" />
					</div>

					<p className="text-lg font-medium text-primary-text/80 max-w-2xl mt-4">
						A collection of full-stack projects showcasing expertise in cloud
						infrastructure, modern web development, and scalable APIs.
					</p>
				</div>

				{/* Projects Grid with Filter */}
				<ProjectsGrid projects={allProjects} />
			</Container>
		</section>
	);
}
