import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { getProjectBySlug, getProjects } from "@/lib/projects";

interface ProjectPageProps {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata({
	params,
}: ProjectPageProps): Promise<Metadata> {
	const { slug } = await params;
	const project = await getProjectBySlug(slug);

	if (!project) {
		return {
			title: "Project Not Found",
		};
	}

	return {
		title: `${project.title} — Al Francis Dagaang`,
		description: project.description,
		openGraph: {
			title: project.title,
			description: project.description,
			images: project.imageUrl ? [project.imageUrl] : ["/og-image.png"],
		},
	};
}

export async function generateStaticParams() {
	const projects = await getProjects();
	return projects.map((project) => ({
		slug: project.slug,
	}));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { slug } = await params;
	const project = await getProjectBySlug(slug);

	if (!project) {
		notFound();
	}

	return (
		<section className="py-12 md:py-20 border-t border-border-light bg-transparent">
			<Container>
				{/* Back Link */}
				<Link
					href="/projects"
					className="text-brand hover:text-brand-dark font-bold text-sm transition-colors inline-flex items-center gap-1 group font-sans mb-8"
				>
					<span className="transform transition-transform duration-200 group-hover:-translate-x-1">
						←
					</span>
					Back to Projects
				</Link>

				{/* Project Header */}
				<div className="mb-12">
					<div className="flex flex-wrap gap-2 mb-4">
						{project.tags.map((tag) => (
							<span
								key={tag}
								className="text-xs font-mono font-medium uppercase text-gray-500 tracking-wider px-3 py-1 border border-border-light"
							>
								{tag}
							</span>
						))}
					</div>
					<h1 className="text-[52px] md:text-[64px] font-black uppercase tracking-tighter text-primary-text mb-4 font-sans leading-tight">
						{project.title}
					</h1>
					<p className="text-lg font-normal text-muted max-w-3xl font-sans">
						{project.description}
					</p>
				</div>

				{/* Project Image */}
				{project.imageUrl && (
					<div className="mb-12 border border-border-light rounded overflow-hidden bg-surface">
						<Image
							src={project.imageUrl}
							alt={project.title}
							width={800}
							height={450}
							className="w-full h-auto object-cover"
							priority
						/>
					</div>
				)}

				{/* Project Details Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
					{/* Main Content */}
					<div className="lg:col-span-2">
						{/* Tech Stack */}
						<div className="mb-12">
							<h2 className="text-xl font-bold uppercase text-primary-text mb-4 font-sans">
								Tech Stack
							</h2>
							<div className="flex flex-wrap gap-2">
								{project.techStack.map((tech) => (
									<span
										key={tech}
										className="px-3 py-2 bg-surface border border-border-light text-sm font-medium text-primary-text font-sans"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						{/* Tags */}
						<div className="mb-12">
							<h2 className="text-xl font-bold uppercase text-primary-text mb-4 font-sans">
								Tags
							</h2>
							<div className="flex flex-wrap gap-2">
								{project.tags.map((tag) => (
									<span
										key={tag}
										className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-brand/10 border border-brand text-brand font-sans"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					</div>

					{/* Sidebar */}
					<div className="lg:col-span-1">
						{/* Links Card */}
						<div className="bg-white border border-border-light p-6 shadow-sm sticky top-24">
							<h3 className="text-lg font-bold uppercase text-primary-text mb-4 font-sans">
								Links
							</h3>
							<div className="space-y-3">
								{/* GitHub Link */}
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-brand hover:text-brand-dark font-bold transition-colors font-sans group"
								>
									<svg
										className="w-5 h-5"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.545 2.914 1.209.1-.94.35-1.545.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.266.098-2.638 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.372.203 2.385.1 2.638.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.93.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.195 22 16.44 22 12.017 22 6.484 17.523 2 12 2z"
											clipRule="evenodd"
										/>
									</svg>
									View on GitHub
									<span className="transform transition-transform duration-200 group-hover:translate-x-1">
										→
									</span>
								</a>

								{/* Live Demo Link (if available) */}
								{project.liveDemoUrl && (
									<a
										href={project.liveDemoUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-brand hover:text-brand-dark font-bold transition-colors font-sans group"
									>
										<svg
											className="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
											/>
										</svg>
										Live Demo
										<span className="transform transition-transform duration-200 group-hover:translate-x-1">
											→
										</span>
									</a>
								)}
							</div>
						</div>
					</div>
				</div>

				{/* Related Projects */}
				<div className="pt-12 border-t border-border-light">
					<h2 className="text-2xl font-bold uppercase text-primary-text mb-6 font-sans">
						More Projects
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{project.tags.map(
							(tag, idx) =>
								idx < 2 && (
									<Link
										key={tag}
										href={`/projects?category=${tag}`}
										className="p-6 border border-border-light bg-white hover:border-brand transition-colors group"
									>
										<span className="text-xs font-mono font-medium uppercase text-gray-500 tracking-wider">
											{tag}
										</span>
										<p className="text-lg font-bold text-primary-text group-hover:text-brand transition-colors font-sans">
											Explore {tag} Projects
											<span className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1 inline-block">
												→
											</span>
										</p>
									</Link>
								),
						)}
					</div>
				</div>
			</Container>
		</section>
	);
}
