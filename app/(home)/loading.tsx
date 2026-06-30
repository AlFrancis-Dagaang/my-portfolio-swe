import { Container } from "@/components/layout/Container";

export default function HomeLoading() {
	return (
		<div className="w-full bg-transparent animate-pulse">
			{/* 1. HERO SKELETON */}
			<section className="relative pt-12 md:pt-16 lg:pt-0 pb-0 overflow-hidden min-h-[80vh] flex items-center">
				<Container className="relative w-full">
					<div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-0">
						{/* Left Column (Text & Buttons) */}
						<div className="flex flex-col items-center lg:items-start space-y-4 lg:col-span-7 xl:col-span-7 w-full mt-12 lg:mt-0">
							{/* Greeting */}
							<div className="h-10 w-32 bg-gray-300 rounded-md" />
							{/* Name */}
							<div className="h-12 w-64 bg-gray-300 rounded-md" />
							{/* Headline */}
							<div className="h-16 w-3/4 sm:w-2/3 bg-gray-300 rounded-lg mt-2" />
							{/* Action Buttons */}
							<div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 md:pt-6 w-full">
								<div className="h-12 w-36 bg-gray-300  rounded-lg" />
								<div className="h-12 w-36 bg-gray-300  rounded-lg" />
							</div>
						</div>

						{/* Right Column (Profile Image) */}
						<div className="relative w-full flex justify-center lg:justify-end lg:col-span-5 xl:col-span-5">
							<div className="w-full max-w-[320px] aspect-4/5 bg-gray-300  rounded-2xl" />
						</div>
					</div>
				</Container>
			</section>

			{/* 2. TECH STACK SKELETON */}
			<section className="py-8 border-t border-gray-100  overflow-hidden">
				<Container>
					<div className="flex gap-8 overflow-hidden opacity-50">
						{[...Array(8)].map((_, i) => (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: <>
								key={i}
								className="h-7 w-7 bg-gray-300  rounded-md shrink-0"
							/>
						))}
					</div>
				</Container>
			</section>

			{/* 3. ABOUT SKELETON */}
			<section className="py-20">
				<Container>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
						{/* Left Side (Expertise List) */}
						<div className="hidden lg:flex gap-8">
							<div className="w-px h-64 bg-gray-300" /> {/* Timeline line */}
							<div className="flex flex-col gap-16 py-4 w-full">
								{[1, 2, 3].map((i) => (
									<div key={i} className="flex items-center gap-6">
										<div className="w-8 h-8 bg-gray-300  rounded-md" />
										<div className="h-6 w-48 bg-gray-300  rounded-md" />
									</div>
								))}
							</div>
						</div>

						{/* Right Side (Description) */}
						<div className="flex flex-col items-center lg:items-start space-y-6">
							<div className="h-12 w-48 bg-gray-300  rounded-lg" />
							<div className="w-full space-y-3">
								<div className="h-4 w-full bg-gray-300  rounded-md" />
								<div className="h-4 w-11/12 bg-gray-300  rounded-md" />
								<div className="h-4 w-full bg-gray-300  rounded-md" />
								<div className="h-4 w-4/5 bg-gray-300  rounded-md" />
							</div>
							<div className="h-6 w-32 bg-gray-300  rounded-md mt-2" />
						</div>
					</div>
				</Container>
			</section>

			{/* 4. FEATURED PROJECTS SKELETON */}
			<section className="py-20 bg-gray-50/50 ">
				<Container>
					{/* Header */}
					<div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-12">
						<div className="h-1 w-20 bg-gray-300  order-2 md:order-1" />
						<div className="h-10 w-64 bg-gray-300  rounded-lg order-1 md:order-2" />
						<div className="hidden md:block h-6 w-32 bg-gray-300  rounded-md ml-auto order-3" />
					</div>

					{/* Content Grid */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						{/* Left: Project Details */}
						<div className="space-y-6 w-full">
							<div className="h-8 w-3/4 bg-gray-300  rounded-md" />
							{/* Tech stack pills */}
							<div className="flex gap-2">
								<div className="h-6 w-16 bg-gray-300  rounded-md" />
								<div className="h-6 w-20 bg-gray-300  rounded-md" />
								<div className="h-6 w-24 bg-gray-300  rounded-md" />
							</div>
							{/* Description lines */}
							<div className="space-y-2">
								<div className="h-4 w-full bg-gray-300  rounded-md" />
								<div className="h-4 w-5/6 bg-gray-300  rounded-md" />
							</div>
							{/* Buttons */}
							<div className="flex gap-4 pt-2">
								<div className="h-10 w-32 bg-gray-300  rounded-lg" />
								<div className="h-10 w-32 bg-gray-300  rounded-lg" />
							</div>
						</div>

						{/* Right: Offset Image */}
						<div className="relative w-full aspect-video">
							<div className="absolute -top-4 -right-4 w-full h-full border-2 border-gray-200  z-0" />
							<div className="relative z-10 w-full h-full bg-gray-300  p-2" />
						</div>
					</div>
				</Container>
			</section>

			{/* 5. CONTACT CTA SKELETON */}
			<section className="py-20">
				<Container>
					{/* Header */}
					<div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-12">
						<div className="h-1 w-8 md:w-12 bg-gray-300  order-2 md:order-1 mt-2 md:mt-0" />
						<div className="h-8 w-24 bg-gray-300  rounded-md order-1 md:order-2" />
					</div>

					{/* Centered CTA */}
					<div className="flex flex-col items-center justify-center space-y-6 max-w-2xl mx-auto">
						<div className="h-12 w-64 bg-gray-300  rounded-lg" />
						<div className="h-12 w-56 bg-gray-300  rounded-lg" />
						<div className="h-12 w-36 bg-gray-300  rounded-lg mt-2" />
					</div>
				</Container>
			</section>
		</div>
	);
}
