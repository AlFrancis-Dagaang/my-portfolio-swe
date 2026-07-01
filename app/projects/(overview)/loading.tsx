import { Container } from "@/components/layout/Container";

export default function ProjectsLoading() {
	return (
		<section className="py-12 md:py-20 border-t border-gray-100 dark:border-gray-800 bg-transparent relative overflow-hidden animate-pulse">
			<Container>
				{/* 1. HEADER SKELETON */}
				<div className="flex flex-col items-center justify-center text-center mb-16 space-y-4">
					<div className="flex items-center justify-center gap-4 md:gap-6">
						<div className="h-1 w-16 md:w-24 bg-gray-300 dark:bg-gray-700 rounded" />
						<div className="h-10 md:h-12 w-48 bg-gray-300 dark:bg-gray-700 rounded-lg" />
						<div className="h-1 w-16 md:w-24 bg-gray-300 dark:bg-gray-700 rounded" />
					</div>

					{/* Subtitle skeleton lines */}
					<div className="space-y-3 pt-4 w-full flex flex-col items-center">
						<div className="h-5 w-full max-w-2xl bg-gray-300 dark:bg-gray-700 rounded-md" />
						<div className="h-5 w-3/4 max-w-lg bg-gray-300 dark:bg-gray-700 rounded-md" />
					</div>
				</div>

				{/* 2. FILTER MENU SKELETON */}
				<div>
					{/* Mobile Dropdown Skeleton */}
					<div className="mb-12 block sm:hidden relative w-full">
						<div className="h-13 w-full bg-gray-300 dark:bg-gray-700 rounded-2xl" />
					</div>

					{/* Desktop Button Tabs Skeleton */}
					<div className="mb-16 hidden sm:flex flex-wrap justify-center gap-3 sm:gap-4">
						{[1, 2, 3, 4, 5, 6].map((i) => (
							<div
								key={i}
								className="h-9 md:h-10 w-20 md:w-24 bg-gray-300 dark:bg-gray-700 rounded-full"
							/>
						))}
					</div>

					{/* 3. PROJECTS GRID SKELETON */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Rendering 6 blank project cards to fill the typical screen */}
						{[1, 2, 3, 4, 5, 6].map((i) => (
							<div
								key={i}
								className="bg-white/70 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 p-6 flex flex-col justify-between h-full shadow-sm"
							>
								<div>
									{/* Card Image */}
									<div className="w-full h-40 bg-gray-300 dark:bg-gray-700 border border-gray-100 dark:border-gray-700 mb-5" />

									{/* Card Tags */}
									<div className="flex gap-2 mb-3">
										<div className="h-3 w-12 bg-gray-300 dark:bg-gray-700 rounded" />
										<div className="h-3 w-16 bg-gray-300 dark:bg-gray-700 rounded" />
									</div>

									{/* Card Title */}
									<div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-4" />

									{/* Card Description */}
									<div className="space-y-2 mb-6">
										<div className="h-3 w-full bg-gray-300 dark:bg-gray-700 rounded" />
										<div className="h-3 w-5/6 bg-gray-300 dark:bg-gray-700 rounded" />
										<div className="h-3 w-4/5 bg-gray-300 dark:bg-gray-700 rounded" />
									</div>
								</div>

								{/* View Details Link */}
								<div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded self-start" />
							</div>
						))}
					</div>

					{/* 4. STATS COUNTER SKELETON */}
					<div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800 flex items-center justify-center gap-4">
						<div className="h-1 w-6 md:w-8 bg-gray-300 dark:bg-gray-700 rounded" />
						<div className="h-5 w-48 bg-gray-300 dark:bg-gray-700 rounded-md" />
						<div className="h-1 w-6 md:w-8 bg-gray-300 dark:bg-gray-700 rounded" />
					</div>
				</div>
			</Container>
		</section>
	);
}
