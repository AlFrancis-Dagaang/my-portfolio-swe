import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

interface ProjectCardProps {
	project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div className="bg-white border border-border-light p-6 flex flex-col justify-between h-full shadow-sm">
			<div>
				{project.imageUrl ? (
					<Image
						src={project.imageUrl}
						alt={project.title}
						width={400}
						height={160}
						className="w-full h-40 object-cover border border-border-light mb-5"
					/>
				) : (
					<div className="w-full h-40 bg-surface border border-border-light mb-5 flex items-center justify-center text-gray-400">
						<svg
							className="w-8 h-8 opacity-40"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1.5}
								d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 002-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
					</div>
				)}
				<span className="text-xs font-mono font-medium uppercase text-gray-500 tracking-wider block mb-1">
					{project.category}
				</span>
				<h3 className="text-xl font-bold uppercase text-primary-text mb-2 font-sans">
					{project.title}
				</h3>
				<p className="text-sm font-normal text-gray-500 leading-relaxed mb-6 font-sans">
					{project.description}
				</p>
			</div>
			<Link
				href={`/projects/${project.slug}`}
				className="text-brand hover:text-brand-dark font-bold text-sm transition-colors inline-flex items-center gap-1 group font-sans self-start"
			>
				View Details
				<span className="transform transition-transform duration-200 group-hover:translate-x-1">
					→
				</span>
			</Link>
		</div>
	);
}
