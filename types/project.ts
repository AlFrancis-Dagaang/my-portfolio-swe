export interface Project {
	slug: string;
	title: string;
	description: string;
	tags: string[];
	techStack: string[];
	githubUrl: string;
	liveDemoUrl?: string;
	featured: boolean;
	category: "Web" | "Cloud" | "Data" | "REST API" | "Mobile";
}
