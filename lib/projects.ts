import projectsData from "@/data/projects.json";
import type { Project } from "@/types/project";

const projects = projectsData as Project[];

export async function getProjects(): Promise<Project[]> {
	return projects;
}

export async function getFeaturedProjects(): Promise<Project[]> {
	return projects.filter((p) => p.featured).slice(0, 2);
}

export async function getProjectBySlug(
	slug: string,
): Promise<Project | undefined> {
	return projects.find((p) => p.slug === slug);
}

export async function getProjectsByCategory(
	category: string,
): Promise<Project[]> {
	if (category === "All") return projects;
	return projects.filter((p) => p.category === category);
}
