export interface Project {
	slug: string;
	title: string;
	description: string;
	overview?: string;
	problem?: string;
	solution?: string;
	highlights?: string[];
	tags: string[];
	techStack: string[];
	githubUrl: string;
	imageUrl: string;
	liveDemoUrl: string;
	featured: boolean;
	category: string;
}
