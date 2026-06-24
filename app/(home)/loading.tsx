import { Container } from "@/components/layout/Container";

export default function HomeLoading() {
	return (
		<div className="w-full bg-transparent">
			{/* ── HERO ─────────────────────────────────────────────────────────── */}
			<section className="relative pt-12 pb-16 md:pt-24 md:pb-28 overflow-hidden bg-transparent">
				<div className="absolute inset-0 -z-10 overflow-hidden">
					<div className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-125 rounded-full bg-brand/10 blur-[120px]" />
				</div>
				<Container className="relative">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
						{/* Left: text */}
						<div className="flex flex-col space-y-6 lg:col-span-8">
							{/* "AL FRANCIS DAGA-ANG" — two lines */}
							<div className="space-y-3">
								<div className="h-20 md:h-24 w-3/4 bg-skeleton rounded animate-pulse" />
								<div className="h-20 md:h-24 w-1/2 bg-skeleton rounded animate-pulse" />
							</div>

							{/* Subtitle */}
							<div className="h-7 w-96 bg-skeleton rounded animate-pulse pt-2" />

							{/* Body paragraph */}
							<div className="space-y-2 max-w-md">
								<div className="h-4 bg-skeleton rounded w-full animate-pulse" />
								<div className="h-4 bg-skeleton rounded w-[92%] animate-pulse" />
								<div className="h-4 bg-skeleton rounded w-[78%] animate-pulse" />
							</div>

							{/* "Learn more" link */}
							<div className="h-5 w-28 bg-skeleton rounded animate-pulse pt-2" />
						</div>

						{/* Right: profile image */}
						<div className="lg:col-span-4 flex justify-center lg:justify-end mt-4 lg:mt-0">
							<div className="w-full max-w-90 sm:max-w-105 lg:max-w-120 aspect-square bg-skeleton rounded-2xl animate-pulse" />
						</div>
					</div>
				</Container>
			</section>

			{/* ── TECH STACK ───────────────────────────────────────────────────── */}
			<section className="py-12 border-t border-border-light bg-white/40 backdrop-blur-md overflow-hidden">
				<Container>
					{/* "Tech Stack" label */}
					<div className="h-3.5 w-24 bg-skeleton rounded mb-6 animate-pulse" />

					{/* Marquee — 8 icon placeholders in a row */}
					<div className="flex gap-8">
						{Array.from({ length: 8 }).map((_, i) => (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: <>
								key={i}
								className="w-7 h-7 bg-skeleton rounded animate-pulse shrink-0"
							/>
						))}
					</div>
				</Container>
			</section>

			{/* ── FEATURED PROJECTS ────────────────────────────────────────────── */}
			<section className="py-16 border-t border-border-light bg-transparent">
				<Container>
					{/* Header row */}
					<div className="flex items-baseline justify-between mb-10">
						<div className="h-9 w-60 bg-skeleton rounded animate-pulse" />
						<div className="h-5 w-32 bg-skeleton rounded animate-pulse" />
					</div>

					{/* 2-col project card grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{[0, 1].map((i) => (
							<div
								key={i}
								className="bg-white border border-border-light p-6 flex flex-col justify-between shadow-sm animate-pulse"
							>
								{/* Image */}
								<div className="w-full h-40 bg-skeleton rounded mb-5" />
								{/* Category */}
								<div className="h-3 w-12 bg-skeleton rounded mb-2" />
								{/* Title */}
								<div className="space-y-2 mb-4">
									<div className="h-5 bg-skeleton rounded w-3/4" />
									<div className="h-5 bg-skeleton rounded w-2/3" />
								</div>
								{/* Description */}
								<div className="space-y-2 mb-6">
									<div className="h-3 bg-skeleton rounded" />
									<div className="h-3 bg-skeleton rounded" />
									<div className="h-3 bg-skeleton rounded w-4/5" />
								</div>
								{/* Link */}
								<div className="h-4 w-20 bg-skeleton rounded" />
							</div>
						))}
					</div>
				</Container>
			</section>

			{/* ── CONTACT CTA ──────────────────────────────────────────────────── */}
			<section className="py-20 border-t border-border-light bg-white/40 backdrop-blur-md">
				<Container>
					<div className="flex flex-col items-center justify-center text-center space-y-6 max-w-2xl mx-auto">
						{/* "Let's work together" */}
						<div className="space-y-3 w-full">
							<div className="h-12 md:h-14 bg-skeleton rounded w-3/4 mx-auto animate-pulse" />
							<div className="h-12 md:h-14 bg-skeleton rounded w-1/2 mx-auto animate-pulse" />
						</div>
						{/* Button */}
						<div className="h-12 w-36 bg-skeleton rounded-none animate-pulse" />
					</div>
				</Container>
			</section>
		</div>
	);
}
