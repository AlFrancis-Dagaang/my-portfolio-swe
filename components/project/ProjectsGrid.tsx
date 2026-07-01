"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { ProjectCard } from "@/components/project/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Dash } from "@/components/ui/Dash";
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
	const router = useRouter();
	const searchParams = useSearchParams();
	const [isOpen, setIsOpen] = useState(false);

	const categoryParam = searchParams.get("category") as Category | null;
	const activeCategory: Category =
		categoryParam && CATEGORIES.includes(categoryParam) ? categoryParam : "All";

	const filteredProjects =
		activeCategory === "All"
			? projects
			: projects.filter((p) => p.tags.includes(activeCategory));

	return (
		<div>
			{/* MOBILE VIEW: Custom Dropdown */}
			<div className="mb-12 block sm:hidden relative w-full">
				<button
					type="button"
					onClick={() => setIsOpen(!isOpen)}
					className="w-full flex justify-between items-center bg-white/70 dark:bg-[#052e3e]/70 border-2 border-border-light text-primary-text py-3.5 pl-5 pr-5 rounded-2xl font-bold uppercase tracking-wider focus:outline-none focus:border-brand transition-all shadow-sm"
				>
					{activeCategory}
					<svg
						aria-hidden="true"
						className={`w-6 h-6 text-brand transition-transform ${isOpen ? "rotate-180" : ""}`}
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2.5"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</button>

				{isOpen && (
					<div className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-[#052e3e] border-2 border-border-light rounded-2xl shadow-xl z-50 overflow-hidden">
						{CATEGORIES.map((category) => (
							<button
								type="button"
								key={category}
								onClick={() => {
									setIsOpen(false);
									if (category === "All") router.push("/projects");
									else router.push(`/projects?category=${category}`);
								}}
								className={`w-full text-left px-5 py-3.5 font-bold uppercase tracking-wider hover:bg-brand/10 transition-colors ${
									activeCategory === category
										? "text-brand bg-brand/5"
										: "text-primary-text"
								}`}
							>
								{category}
							</button>
						))}
					</div>
				)}
			</div>

			{/* DESKTOP VIEW: Button Tabs */}
			<div className="mb-16 hidden sm:flex flex-wrap justify-center gap-3 sm:gap-4">
				{CATEGORIES.map((category) => {
					const href =
						category === "All" ? "/projects" : `/projects?category=${category}`;
					const isActive = activeCategory === category;
					return (
						<Button
							key={category}
							href={href}
							variant={isActive ? "primary" : "outline"}
							className={`px-5! py-2! text-sm! sm:text-base! rounded-full uppercase tracking-wider ${
								!isActive
									? "bg-white/80 dark:bg-[#052e3e]/70 !border-border-light"
									: ""
							}`}
						>
							{category}
						</Button>
					);
				})}
			</div>

			{/* Projects Grid */}
			{filteredProjects.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredProjects.map((project) => (
						<ProjectCard key={project.slug} project={project} />
					))}
				</div>
			) : (
				<div className="text-center py-20">
					<p className="text-lg text-primary-text/60 font-medium">
						No projects found in this category.
					</p>
				</div>
			)}

			{/* Stats Counter */}
			<div className="mt-16 pt-8 border-t border-border-light flex items-center justify-center gap-4">
				<Dash width="w-6 md:w-8" />
				<p className="text-base font-medium text-primary-text font-sans shrink-0">
					Showing{" "}
					<span className="font-bold text-brand">
						{filteredProjects.length}
					</span>{" "}
					of <span className="font-bold text-brand">{projects.length}</span>{" "}
					projects
				</p>
				<Dash width="w-6 md:w-8" />
			</div>
		</div>
	);
}
