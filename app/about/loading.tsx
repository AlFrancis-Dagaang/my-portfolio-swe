import { Container } from "@/components/layout/Container";

export default function AboutLoading() {
	return (
		<div className="w-full bg-transparent animate-pulse">
			{/* 1. BIO SKELETON */}
			<section className="py-20 bg-transparent">
				<Container>
					{/* Header */}
					<div className="flex items-center justify-center gap-4 mb-16">
						<div className="h-1 w-16 md:w-24 bg-gray-300 dark:bg-gray-700 rounded" />
						<div className="h-10 md:h-12 w-48 bg-gray-300 dark:bg-gray-700 rounded-lg" />
						<div className="h-1 w-16 md:w-24 bg-gray-300 dark:bg-gray-700 rounded" />
					</div>

					{/* Grid Layout */}
					<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start max-w-5xl mx-auto">
						{/* Left: Polaroid Image */}
						<div className="md:col-span-5 flex justify-center md:justify-end">
							<div className="relative rotate-[-4deg] bg-white dark:bg-gray-800 p-3 shadow-xl border border-gray-200 dark:border-gray-700">
								<div className="w-70 h-70 md:w-[320px] md:h-80 bg-gray-300 dark:bg-gray-700" />
							</div>
						</div>

						{/* Right: Text Content */}
						<div className="md:col-span-7 space-y-6 pt-4 md:pl-6 w-full flex flex-col items-center md:items-start">
							<div className="space-y-3 w-full">
								<div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded-md" />
								<div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded-md" />
								<div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded-md" />
							</div>
							<div className="space-y-3 w-full pt-2">
								<div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded-md" />
								<div className="h-4 w-11/12 bg-gray-300 dark:bg-gray-700 rounded-md" />
								<div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded-md" />
							</div>
						</div>
					</div>
				</Container>
			</section>

			{/* 2. TECH STACK SKELETON */}
			<section className="py-20 bg-white/70 dark:bg-gray-800/50 overflow-hidden">
				<Container>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						{/* Left Side: Text Content */}
						<div className="space-y-6">
							<div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-4">
								<div className="h-1 w-8 md:w-12 bg-gray-300 dark:bg-gray-700 rounded order-2 md:order-1 mt-1 md:mt-0" />
								<div className="h-6 w-40 bg-gray-300 dark:bg-gray-700 rounded-md order-1 md:order-2" />
							</div>
							<div className="h-20 md:h-24 w-full md:w-3/4 bg-gray-300 dark:bg-gray-700 rounded-xl" />
							<div className="space-y-3 w-full max-w-md">
								<div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded-md" />
								<div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded-md" />
							</div>
						</div>

						{/* Right Side: Marquee Container */}
						<div className="relative bg-[#f1f5f9] dark:bg-gray-800/80 rounded-4xl p-8 md:p-12 overflow-hidden flex flex-col gap-6 border border-gray-200 dark:border-gray-700">
							<div className="flex gap-6 overflow-hidden">
								{[1, 2, 3, 4].map((i) => (
									<div
										key={`top-${i}`}
										className="w-20 h-20 md:w-24 md:h-24 shrink-0 bg-gray-300 dark:bg-gray-700 rounded-2xl"
									/>
								))}
							</div>
							<div className="flex gap-6 overflow-hidden">
								{[1, 2, 3, 4].map((i) => (
									<div
										key={`bottom-${i}`}
										className="w-20 h-20 md:w-24 md:h-24 shrink-0 bg-gray-300 dark:bg-gray-700 rounded-2xl"
									/>
								))}
							</div>
						</div>
					</div>
				</Container>
			</section>

			{/* 3. EXPERIENCE TIMELINE SKELETON */}
			<section className="py-20">
				<Container>
					{/* Centered Header */}
					<div className="flex flex-col items-center justify-center text-center mb-16 space-y-4">
						<div className="flex items-center justify-center gap-4">
							<div className="h-1 w-8 bg-gray-300 dark:bg-gray-700 rounded" />
							<div className="h-10 md:h-12 w-48 bg-gray-300 dark:bg-gray-700 rounded-lg" />
							<div className="h-1 w-8 bg-gray-300 dark:bg-gray-700 rounded" />
						</div>
						<div className="h-12 w-full max-w-2xl mx-auto bg-gray-300 dark:bg-gray-700 rounded-lg" />
					</div>

					{/* Timeline */}
					<div className="relative z-10 max-w-4xl mx-auto">
						<div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700" />
						<div className="block md:hidden absolute left-1.75 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700" />

						<div className="space-y-8 md:space-y-12">
							{[1, 2].map((i) => (
								<div
									key={i}
									className="relative flex md:grid md:grid-cols-2 gap-12 items-center pl-8 md:pl-0"
								>
									<span className="md:hidden absolute left-0 top-6 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 z-10" />
									<span className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 z-10" />

									{/* Alternating logic simulation */}
									{i % 2 !== 0 ? (
										<>
											<div className="w-full p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
												<div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded mb-3 md:hidden" />
												<div className="h-6 w-48 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
												<div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded mb-4" />
												<div className="space-y-2">
													<div className="h-3 w-full bg-gray-300 dark:bg-gray-700 rounded" />
													<div className="h-3 w-5/6 bg-gray-300 dark:bg-gray-700 rounded" />
												</div>
											</div>
											<div className="hidden md:flex justify-start">
												<div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded ml-6" />
											</div>
										</>
									) : (
										<>
											<div className="hidden md:flex justify-end">
												<div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded mr-6" />
											</div>
											<div className="w-full p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
												<div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded mb-3 md:hidden" />
												<div className="h-6 w-48 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
												<div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded mb-4" />
												<div className="space-y-2">
													<div className="h-3 w-full bg-gray-300 dark:bg-gray-700 rounded" />
													<div className="h-3 w-5/6 bg-gray-300 dark:bg-gray-700 rounded" />
												</div>
											</div>
										</>
									)}
								</div>
							))}
						</div>
					</div>
				</Container>
			</section>

			{/* 4. EDUCATION SKELETON */}
			<section className="py-20 bg-white/70 dark:bg-gray-800/50 overflow-hidden">
				<Container>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						{/* Left Side */}
						<div className="space-y-6">
							<div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
								<div className="h-1 w-16 md:w-24 bg-gray-300 dark:bg-gray-700 rounded order-2 md:order-1 mt-1 md:mt-0" />
								<div className="h-10 md:h-12 w-48 bg-gray-300 dark:bg-gray-700 rounded-lg order-1 md:order-2" />
							</div>
							<div className="space-y-3 pt-4">
								<div className="h-8 w-64 md:w-80 bg-gray-300 dark:bg-gray-700 rounded-md" />
								<div className="h-6 w-48 bg-gray-300 dark:bg-gray-700 rounded-md" />
							</div>
							<div className="h-4 w-full max-w-md bg-gray-300 dark:bg-gray-700 rounded-md" />
						</div>

						{/* Right Side: Images */}
						<div className="flex overflow-hidden h-50 md:h-62.5 gap-4 md:gap-6">
							{[1, 2].map((i) => (
								<div
									key={i}
									className="w-70 h-45 md:w-[320px] md:h-50 shrink-0 bg-gray-300 dark:bg-gray-700 rounded-xl"
								/>
							))}
						</div>
					</div>
				</Container>
			</section>

			{/* 5. CERTIFICATIONS SKELETON */}
			<section className="py-20 bg-transparent">
				<Container>
					<div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-16">
						<div className="h-1 w-16 md:w-24 bg-gray-300 dark:bg-gray-700 rounded order-2 md:order-1 mt-1 md:mt-0" />
						<div className="h-10 md:h-12 w-64 bg-gray-300 dark:bg-gray-700 rounded-lg order-1 md:order-2" />
					</div>

					<div className="flex flex-col gap-12 md:gap-16">
						{[1, 2, 3].map((i) => (
							<div
								key={i}
								className="flex flex-col md:flex-row gap-6 md:gap-12 items-center w-full"
							>
								{/* Badge and Info */}
								<div className="flex flex-col md:flex-row items-center gap-6 md:w-1/2 shrink-0">
									<div className="shrink-0 w-24 h-24 md:w-32 md:h-32 bg-gray-300 dark:bg-gray-700 rounded-xl" />
									<div className="flex flex-col gap-3 text-center md:text-left items-center md:items-start w-full">
										<div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded" />
										<div className="h-8 w-48 md:w-64 bg-gray-300 dark:bg-gray-700 rounded-md" />
										<div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded" />
									</div>
								</div>

								{/* Description */}
								<div className="flex flex-col gap-4 md:w-1/2 items-center md:items-start text-center md:text-left w-full">
									<div className="space-y-2 w-full flex flex-col items-center md:items-start">
										<div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded" />
										<div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded" />
										<div className="h-4 w-4/5 bg-gray-300 dark:bg-gray-700 rounded" />
									</div>
									<div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded mt-2" />
								</div>
							</div>
						))}
					</div>
				</Container>
			</section>
		</div>
	);
}
