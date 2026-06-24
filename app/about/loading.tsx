import { Container } from "@/components/layout/Container";

export default function AboutLoading() {
	return (
		<section className="py-12 md:py-20 border-t border-border-light bg-transparent relative">
			<div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
				<div className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-125 rounded-full bg-brand/10 blur-[120px]" />
			</div>

			<Container>
				{/* ── 1. BIO ───────────────────────────────────────────────────────── */}
				<div className="mb-20">
					{/* Large "About" heading */}
					<div className="h-14 md:h-[72px] w-52 bg-skeleton rounded mb-6 animate-pulse" />

					<div className="max-w-3xl space-y-4">
						{/* Paragraph 1 */}
						<div className="space-y-2.5">
							<div className="h-5 bg-skeleton rounded w-full animate-pulse" />
							<div className="h-5 bg-skeleton rounded w-[96%] animate-pulse" />
							<div className="h-5 bg-skeleton rounded w-[88%] animate-pulse" />
						</div>
						{/* Paragraph 2 */}
						<div className="space-y-2.5">
							<div className="h-5 bg-skeleton rounded w-full animate-pulse" />
							<div className="h-5 bg-skeleton rounded w-[82%] animate-pulse" />
						</div>
					</div>
				</div>

				{/* ── 2. SKILLS (hexagon pills, two centered rows) ─────────────────── */}
				<div className="mb-20">
					<div className="flex flex-col items-center gap-3">
						{/* Top row — 4 pills */}
						<div className="flex flex-wrap justify-center gap-2 md:gap-3">
							{["w-20", "w-28", "w-24", "w-16"].map((w, i) => (
								<div
									// biome-ignore lint/suspicious/noArrayIndexKey: static skeleton
									key={i}
									style={{
										clipPath:
											"polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%)",
									}}
									className={`h-9 md:h-10 bg-skeleton animate-pulse ${w}`}
								/>
							))}
						</div>
						{/* Bottom row — 4 pills */}
						<div className="flex flex-wrap justify-center gap-2 md:gap-3">
							{["w-24", "w-28", "w-20", "w-16"].map((w, i) => (
								<div
									// biome-ignore lint/suspicious/noArrayIndexKey: static skeleton
									key={i}
									style={{
										clipPath:
											"polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%)",
									}}
									className={`h-9 md:h-10 bg-skeleton animate-pulse ${w}`}
								/>
							))}
						</div>
					</div>
				</div>

				{/* ── 3. EXPERIENCE ────────────────────────────────────────────────── */}
				<div className="mb-20">
					{/* Eyebrow */}
					<div className="h-2.5 w-12 bg-skeleton rounded mb-2 animate-pulse" />
					{/* Heading */}
					<div className="h-9 w-44 bg-skeleton rounded mb-10 animate-pulse" />
					<TimelineSkeleton rows={2} />
				</div>

				{/* ── 4. EDUCATION ─────────────────────────────────────────────────── */}
				<div className="mb-20">
					<div className="h-2.5 w-20 bg-skeleton rounded mb-2 animate-pulse" />
					<div className="h-9 w-40 bg-skeleton rounded mb-10 animate-pulse" />
					<TimelineSkeleton rows={1} />
				</div>

				{/* ── 5. CERTIFICATIONS ────────────────────────────────────────────── */}
				<div className="mb-4">
					<div className="h-2.5 w-20 bg-skeleton rounded mb-2 animate-pulse" />
					<div className="h-9 w-52 bg-skeleton rounded mb-8 animate-pulse" />

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{[0, 1, 2].map((i) => (
							<div
								key={i}
								className="flex gap-4 p-5 rounded-2xl border border-border-light bg-white/80"
							>
								{/* Badge */}
								<div className="shrink-0 w-14 h-14 bg-skeleton rounded-xl animate-pulse" />
								{/* Text */}
								<div className="flex-1 flex flex-col gap-0.5 pt-1 min-w-0">
									{/* Issuer eyebrow */}
									<div className="h-2.5 w-14 bg-skeleton rounded animate-pulse" />
									{/* Title line 1 */}
									<div className="h-4 bg-skeleton rounded w-full animate-pulse mt-1" />
									{/* Title line 2 */}
									<div className="h-4 bg-skeleton rounded w-4/5 animate-pulse" />
									{/* Date */}
									<div className="h-3 w-16 bg-skeleton rounded animate-pulse mt-0.5" />
								</div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}

function TimelineSkeleton({ rows }: { rows: number }) {
	return (
		<div className="relative z-10">
			{/* ── Mobile: left rail ── */}
			<div className="block md:hidden absolute left-1.5 top-0 bottom-0 w-0.5 bg-gray-300/80" />

			{/* ── Desktop: center rail ── */}
			<div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300/80" />

			<div className="space-y-8 md:space-y-12">
				{Array.from({ length: rows }).map((_, i) => {
					const isLeft = i % 2 === 0;
					return (
						// biome-ignore lint/suspicious/noArrayIndexKey: static skeleton array
						<div key={i}>
							{/* ── Mobile ── */}
							<div className="relative flex md:hidden pl-8">
								<span className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-border-light bg-skeleton animate-pulse" />
								<TimelineCardSkeleton showLabel />
							</div>

							{/* ── Desktop: alternating two-column ── */}
							<div className="relative hidden md:grid grid-cols-2 gap-8 items-start">
								{/* Left side */}
								<div className={isLeft ? "block" : "flex justify-end"}>
									{isLeft ? (
										<TimelineCardSkeleton showLabel={false} />
									) : (
										<div className="h-2.5 w-24 bg-skeleton rounded animate-pulse pt-1" />
									)}
								</div>

								{/* Center dot */}
								<span className="absolute left-1/2 -translate-x-1/2 top-2 w-3.5 h-3.5 rounded-full border-2 border-border-light bg-skeleton animate-pulse z-10" />

								{/* Right side */}
								<div className={!isLeft ? "block" : "flex justify-start"}>
									{!isLeft ? (
										<TimelineCardSkeleton showLabel={false} />
									) : (
										<div className="h-2.5 w-24 bg-skeleton rounded animate-pulse pt-1" />
									)}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

function TimelineCardSkeleton({ showLabel }: { showLabel: boolean }) {
	return (
		<div className="w-full p-5 rounded-2xl border border-border-light bg-white/80">
			{showLabel && (
				<div className="h-2.5 w-24 bg-skeleton rounded animate-pulse mb-1" />
			)}
			{/* Role / Degree */}
			<div className="h-5 w-56 bg-skeleton rounded animate-pulse" />
			{/* Company / School */}
			<div className="h-4 w-36 bg-skeleton rounded animate-pulse mt-1.5 mb-3" />
			{/* Detail bullets */}
			<div className="space-y-1.5">
				<div className="h-3.5 bg-skeleton rounded w-full animate-pulse" />
				<div className="h-3.5 bg-skeleton rounded w-11/12 animate-pulse" />
				<div className="h-3.5 bg-skeleton rounded w-4/5 animate-pulse" />
			</div>
		</div>
	);
}
