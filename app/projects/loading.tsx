import { Container } from "@/components/layout/Container";

function SkeletonCard() {
	return (
		<div className="bg-white border border-border-light p-6 flex flex-col justify-between h-full shadow-sm animate-pulse">
			{/* Image placeholder */}
			<div className="w-full h-40 bg-surface border border-border-light mb-5 rounded" />

			{/* Category placeholder */}
			<div className="h-3 w-12 bg-skeleton rounded mb-2" />

			{/* Title placeholder */}
			<div className="space-y-2 mb-4">
				<div className="h-5 bg-skeleton rounded w-3/4" />
				<div className="h-5 bg-skeleton rounded w-2/3" />
			</div>

			{/* Description placeholder */}
			<div className="space-y-2 mb-6">
				<div className="h-3 bg-skeleton rounded" />
				<div className="h-3 bg-skeleton rounded" />
				<div className="h-3 bg-skeleton rounded w-4/5" />
			</div>

			{/* Link placeholder */}
			<div className="h-4 w-20 bg-skeleton rounded" />
		</div>
	);
}

export default function ProjectsLoading() {
	return (
		<section className="py-12 md:py-20 border-t border-border-light bg-transparent">
			<Container>
				{/* Header Skeleton */}
				<div className="mb-12">
					<div className="h-16 md:h-20 bg-skeleton rounded w-2/3 mb-3 animate-pulse" />
					<div className="space-y-2">
						<div className="h-4 bg-skeleton rounded w-full animate-pulse" />
						<div className="h-4 bg-skeleton rounded w-4/5 animate-pulse" />
					</div>
				</div>

				{/* Filter Tabs Skeleton */}
				<div className="mb-12 flex flex-wrap gap-2 sm:gap-3">
					{[...Array(6)].map((_, i) => (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: static skeleton array, no reordering
							key={i}
							className="h-10 w-20 bg-skeleton rounded border border-border-light animate-pulse"
						/>
					))}
				</div>

				{/* Projects Grid Skeleton */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{[...Array(6)].map((_, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: static skeleton array, no reordering
						<SkeletonCard key={i} />
					))}
				</div>

				{/* Stats Skeleton */}
				<div className="mt-12 pt-8 border-t border-border-light">
					<div className="h-4 w-40 bg-skeleton rounded animate-pulse" />
				</div>
			</Container>
		</section>
	);
}
