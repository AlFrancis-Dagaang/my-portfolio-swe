import { Container } from "@/components/layout/Container";

export default function ProjectLoading() {
	return (
		<section className="py-12 md:py-20 border-t border-border-light bg-transparent">
			<Container>
				{/* Back Link Skeleton */}
				<div className="h-4 w-32 bg-gray-200 rounded mb-8 animate-pulse" />

				{/* Header Skeleton */}
				<div className="mb-12">
					<div className="h-8 w-24 bg-gray-200 rounded mb-4 animate-pulse" />
					<div className="space-y-3 mb-4">
						<div className="h-16 bg-gray-200 rounded w-3/4 animate-pulse" />
						<div className="h-16 bg-gray-200 rounded w-2/3 animate-pulse" />
					</div>
					<div className="space-y-2">
						<div className="h-4 bg-gray-200 rounded animate-pulse" />
						<div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse" />
					</div>
				</div>

				{/* Image Skeleton */}
				<div className="mb-12 h-96 bg-gray-200 border border-border-light rounded animate-pulse" />

				{/* Details Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
					{/* Main Content */}
					<div className="lg:col-span-2 space-y-12">
						{/* Tech Stack Section */}
						<div>
							<div className="h-6 w-32 bg-gray-200 rounded mb-4 animate-pulse" />
							<div className="flex flex-wrap gap-2">
								{[...Array(5)].map((_, i) => (
									<div
										// biome-ignore lint/suspicious/noArrayIndexKey: static skeleton array, no reordering
										key={i}
										className="h-10 w-24 bg-gray-200 rounded animate-pulse"
									/>
								))}
							</div>
						</div>

						{/* Tags Section */}
						<div>
							<div className="h-6 w-16 bg-gray-200 rounded mb-4 animate-pulse" />
							<div className="flex flex-wrap gap-2">
								{[...Array(3)].map((_, i) => (
									<div
										// biome-ignore lint/suspicious/noArrayIndexKey: static skeleton array, no reordering
										key={i}
										className="h-8 w-16 bg-gray-200 rounded animate-pulse"
									/>
								))}
							</div>
						</div>
					</div>

					{/* Sidebar */}
					<div className="lg:col-span-1">
						<div className="bg-white border border-border-light p-6 shadow-sm space-y-4">
							<div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
							{[...Array(2)].map((_, i) => (
								<div
									// biome-ignore lint/suspicious/noArrayIndexKey: static skeleton array, no reordering
									key={i}
									className="h-4 w-32 bg-gray-200 rounded animate-pulse"
								/>
							))}
						</div>
					</div>
				</div>

				{/* Related Projects Skeleton */}
				<div className="pt-12 border-t border-border-light">
					<div className="h-8 w-48 bg-gray-200 rounded mb-6 animate-pulse" />
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{[...Array(2)].map((_, i) => (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: static skeleton array, no reordering
								key={i}
								className="p-6 border border-border-light bg-white animate-pulse space-y-3"
							>
								<div className="h-3 w-20 bg-gray-200 rounded" />
								<div className="h-6 w-32 bg-gray-200 rounded" />
							</div>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}
