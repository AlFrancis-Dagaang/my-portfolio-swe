import { Container } from "@/components/layout/Container";

export default function ProjectDetailsLoading() {
	return (
		<section className="py-12 md:py-20 border-t border-gray-200 bg-transparent animate-pulse">
			<Container>
				{/* 1. BACK LINK SKELETON */}
				<div className="h-4 w-32 bg-gray-300 rounded mb-8" />

				{/* 2. PROJECT HEADER SKELETON */}
				<div className="mb-12">
					{/* Title Flex Container */}
					<div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 mb-4">
						<div className="h-1 w-16 md:w-24 bg-gray-300 rounded order-2 md:order-1 mt-1 md:mt-0" />
						<div className="h-12 md:h-16 w-3/4 max-w-2xl bg-gray-300 rounded-lg order-1 md:order-2" />
					</div>

					{/* Description Paragraph */}
					<div className="space-y-3 max-w-3xl mt-4">
						<div className="h-4 w-full bg-gray-300 rounded-md" />
						<div className="h-4 w-5/6 bg-gray-300 rounded-md" />
						<div className="h-4 w-2/3 bg-gray-300 rounded-md" />
					</div>
				</div>

				{/* 3. PROJECT IMAGE SKELETON */}
				<div className="mb-12 w-full aspect-video md:h-112.5 bg-gray-300 rounded border border-gray-200" />

				{/* 4. DETAILS GRID SKELETON */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
					{/* Main Content (Left, span 2) */}
					<div className="lg:col-span-2 space-y-12">
						{/* Repeated Blocks (Overview, Problem, Solution) */}
						{[1, 2, 3].map((i) => (
							<div key={`section-${i}`}>
								<div className="flex items-center gap-3 mb-4">
									<div className="h-1 w-8 bg-gray-300 rounded" />
									<div className="h-6 w-32 bg-gray-300 rounded-md" />
								</div>
								<div className="pl-11 space-y-3 max-w-2xl">
									<div className="h-4 w-full bg-gray-300 rounded" />
									<div className="h-4 w-11/12 bg-gray-300 rounded" />
									<div className="h-4 w-4/5 bg-gray-300 rounded" />
								</div>
							</div>
						))}

						{/* Highlights Skeleton */}
						<div>
							<div className="flex items-center gap-3 mb-4">
								<div className="h-1 w-8 bg-gray-300 rounded" />
								<div className="h-6 w-40 bg-gray-300 rounded-md" />
							</div>
							<div className="pl-11 space-y-4">
								<div className="flex items-center gap-3">
									<div className="h-3 w-4 bg-gray-300 rounded-sm" />
									<div className="h-4 w-3/4 bg-gray-300 rounded" />
								</div>
								<div className="flex items-center gap-3">
									<div className="h-3 w-4 bg-gray-300 rounded-sm" />
									<div className="h-4 w-5/6 bg-gray-300 rounded" />
								</div>
								<div className="flex items-center gap-3">
									<div className="h-3 w-4 bg-gray-300 rounded-sm" />
									<div className="h-4 w-2/3 bg-gray-300 rounded" />
								</div>
							</div>
						</div>

						{/* Tech Stack & Tags Skeletons */}
						{[1, 2].map((i) => (
							<div key={`pills-${i}`}>
								<div className="flex items-center gap-3 mb-4">
									<div className="h-1 w-8 bg-gray-300 rounded" />
									<div className="h-6 w-24 bg-gray-300 rounded-md" />
								</div>
								<div className="pl-11 flex flex-wrap gap-2">
									<div className="h-8 w-20 bg-gray-300 rounded" />
									<div className="h-8 w-24 bg-gray-300 rounded" />
									<div className="h-8 w-16 bg-gray-300 rounded" />
									<div className="h-8 w-32 bg-gray-300 rounded" />
								</div>
							</div>
						))}
					</div>

					{/* Sidebar Links Card (Right, span 1) */}
					<div className="lg:col-span-1">
						<div className="bg-white border border-gray-200 p-6 shadow-sm sticky top-24">
							<div className="h-6 w-24 bg-gray-300 rounded mb-5" />
							<div className="space-y-4">
								<div className="flex items-center gap-2">
									<div className="h-5 w-5 bg-gray-300 rounded-full shrink-0" />
									<div className="h-4 w-32 bg-gray-300 rounded" />
								</div>
								<div className="flex items-center gap-2">
									<div className="h-5 w-5 bg-gray-300 rounded-full shrink-0" />
									<div className="h-4 w-28 bg-gray-300 rounded" />
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* 5. RELATED PROJECTS SKELETON */}
				<div className="pt-12 border-t border-gray-200">
					<div className="h-8 w-48 bg-gray-300 rounded-md mb-6" />
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{[1, 2].map((i) => (
							<div key={i} className="p-6 border border-gray-200 bg-white">
								<div className="h-3 w-16 bg-gray-300 rounded mb-3" />
								<div className="h-6 w-48 bg-gray-300 rounded" />
							</div>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}
