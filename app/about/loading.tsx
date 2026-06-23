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
					{/* "About" heading */}
					<div className="h-14 w-40 bg-skeleton rounded mb-6 animate-pulse" />

					<div className="grid md:grid-cols-[160px_1fr] gap-10 items-start max-w-3xl">
						{/* Avatar */}
						<div className="w-full aspect-square bg-skeleton rounded-2xl animate-pulse" />

						{/* Bio lines */}
						<div className="space-y-3 pt-1">
							<div className="h-5 bg-skeleton rounded w-full animate-pulse" />
							<div className="h-5 bg-skeleton rounded w-[94%] animate-pulse" />
							<div className="h-5 bg-skeleton rounded w-[86%] animate-pulse" />
							<div className="pt-1" />
							<div className="h-5 bg-skeleton rounded w-full animate-pulse" />
							<div className="h-5 bg-skeleton rounded w-[80%] animate-pulse" />
							<div className="h-5 bg-skeleton rounded w-[70%] animate-pulse" />
						</div>
					</div>
				</div>

				{/* ── 2. SKILLS ────────────────────────────────────────────────────── */}
				<div className="mb-20">
					<div className="h-3 w-12 bg-skeleton rounded mb-2 animate-pulse" />
					<div className="h-9 w-40 bg-skeleton rounded mb-8 animate-pulse" />

					<div className="flex flex-wrap gap-3">
						{[
							"w-24",
							"w-32",
							"w-24",
							"w-20",
							"w-32",
							"w-36",
							"w-16",
							"w-20",
						].map((w, i) => (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: <>
								key={i}
								className={`h-10 bg-skeleton rounded-xl border border-border-light animate-pulse ${w}`}
							/>
						))}
					</div>
				</div>

				{/* ── 3. EXPERIENCE ────────────────────────────────────────────────── */}
				<div className="mb-20">
					<div className="h-3 w-12 bg-skeleton rounded mb-2 animate-pulse" />
					<div className="h-9 w-44 bg-skeleton rounded mb-10 animate-pulse" />
					<TimelineSkeleton rows={2} />
				</div>

				{/* ── 4. EDUCATION ─────────────────────────────────────────────────── */}
				<div className="mb-20">
					<div className="h-3 w-16 bg-skeleton rounded mb-2 animate-pulse" />
					<div className="h-9 w-40 bg-skeleton rounded mb-10 animate-pulse" />
					<TimelineSkeleton rows={1} />
				</div>

				{/* ── 5. CERTIFICATIONS ────────────────────────────────────────────── */}
				<div className="mb-4">
					<div className="h-3 w-24 bg-skeleton rounded mb-2 animate-pulse" />
					<div className="h-9 w-52 bg-skeleton rounded mb-8 animate-pulse" />

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{[0, 1, 2].map((i) => (
							<div
								key={i}
								className="flex gap-4 p-5 rounded-2xl border border-border-light bg-surface"
							>
								{/* Badge */}
								<div className="shrink-0 w-14 h-14 bg-skeleton rounded-xl animate-pulse" />
								{/* Text */}
								<div className="flex-1 space-y-2 pt-1 min-w-0">
									<div className="h-2.5 w-16 bg-skeleton rounded animate-pulse" />
									<div className="h-4 bg-skeleton rounded w-full animate-pulse" />
									<div className="h-4 bg-skeleton rounded w-4/5 animate-pulse" />
									<div className="h-3 w-14 bg-skeleton rounded animate-pulse mt-1" />
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
		<div className="relative">
			{/* Rail */}
			<div className="absolute left-1.5 top-2 bottom-2 w-px bg-border-light" />

			<div className="space-y-10 pl-8">
				{Array.from({ length: rows }).map((_, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: static skeleton array, no reordering
					<div key={i} className="relative">
						{/* Dot */}
						<span className="absolute -left-8 top-1.25 w-3.5 h-3.5 rounded-full border-2 border-border-light bg-skeleton animate-pulse" />

						<div className="h-2.5 w-28 bg-skeleton rounded mb-2 animate-pulse" />
						<div className="h-5 w-60 bg-skeleton rounded mb-1.5 animate-pulse" />
						<div className="h-4 w-40 bg-skeleton rounded mb-4 animate-pulse" />

						<div className="space-y-2">
							<div className="h-3.5 bg-skeleton rounded w-full animate-pulse" />
							<div className="h-3.5 bg-skeleton rounded w-11/12 animate-pulse" />
							<div className="h-3.5 bg-skeleton rounded w-4/5 animate-pulse" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
