"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project/ProjectCard";
import type { Project } from "@/types/project";

interface ProjectsGridProps {
	projects: Project[];
}

type Category = "All" | "Web" | "Cloud" | "Data" | "REST API" | "Mobile";

const CATEGORIES: Category[] = [
	"All",
	"Web",
	"Cloud",
	"Data",
	"REST API",
	"Mobile",
];

export function ProjectsGrid({ projects }: ProjectsGridProps) {
	const [activeCategory, setActiveCategory] = useState<Category>("All");

	const filteredProjects =
		activeCategory === "All"
			? projects
			: projects.filter((p) => p.tags.includes(activeCategory));

	return (
		<div>
			{/* Filter Tabs */}
			<div className="mb-12 flex flex-wrap gap-2 sm:gap-3">
				{CATEGORIES.map((category) => (
					<button
						type="button"
						key={category}
						onClick={() => setActiveCategory(category)}
						className={`px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 border font-sans ${
							activeCategory === category
								? "bg-brand text-white border-brand"
								: "bg-transparent text-primary-text border-border-light hover:border-brand hover:text-brand"
						}`}
					>
						{category}
					</button>
				))}
			</div>

			{/* Projects Grid */}
			{filteredProjects.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredProjects.map((project) => (
						<ProjectCard key={project.slug} project={project} />
					))}
				</div>
			) : (
				<div className="text-center py-16">
					<p className="text-lg text-muted font-sans">
						No projects found in this category.
					</p>
				</div>
			)}

			{/* Stats */}
			<div className="mt-12 pt-8 border-t border-border-light">
				<p className="text-sm font-normal text-muted font-sans">
					Showing{" "}
					<span className="font-bold text-primary-text">
						{filteredProjects.length}
					</span>{" "}
					of{" "}
					<span className="font-bold text-primary-text">{projects.length}</span>{" "}
					projects
				</p>
			</div>
		</div>
	);
}
