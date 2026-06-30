export function Timeline({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative z-10 max-w-4xl mx-auto">
			{/* Desktop Rail */}
			<div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-brand" />

			{/* Mobile Rail: Positioned exactly at 7px so its center perfectly matches the 16px wide dot! */}
			<div className="block md:hidden absolute left-1.75 top-0 bottom-0 w-0.5 bg-brand" />

			<div className="space-y-8 md:space-y-12">{children}</div>
		</div>
	);
}

export function TimelineItem({
	label,
	title,
	subtitle,
	details,
	index = 0,
}: {
	label: string;
	title: string;
	subtitle: string;
	details: string[];
	index?: number;
}) {
	const isLeft = index % 2 === 0;

	return (
		<>
			{/* ── Mobile: single column ── */}
			<div className="relative flex md:hidden pl-8">
				{/* Mobile Dot: Left 0, Width 16px (w-4). Center is 8px! */}
				<span className="absolute left-0 top-6 w-4 h-4 rounded-full bg-slate-500 z-10" />

				<TimelineCard
					label={label}
					title={title}
					subtitle={subtitle}
					details={details}
					showLabel
				/>
			</div>

			{/* ── Desktop: alternating two column ── */}
			<div className="relative hidden md:grid grid-cols-2 gap-12 items-center">
				{/* Left side */}
				<div className={isLeft ? "block" : "flex justify-end"}>
					{isLeft ? (
						<TimelineCard
							label={label}
							title={title}
							subtitle={subtitle}
							details={details}
							showLabel={false}
						/>
					) : (
						<p className="text-sm font-bold text-primary-text pr-6 text-right">
							{label}
						</p>
					)}
				</div>

				{/* Center Solid Slate Dot */}
				<span className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-500 z-10" />

				{/* Right side */}
				<div className={!isLeft ? "block" : "flex justify-start"}>
					{!isLeft ? (
						<TimelineCard
							label={label}
							title={title}
							subtitle={subtitle}
							details={details}
							showLabel={false}
						/>
					) : (
						<p className="text-sm font-bold text-primary-text pl-6 text-left">
							{label}
						</p>
					)}
				</div>
			</div>
		</>
	);
}

function TimelineCard({
	label,
	title,
	subtitle,
	details,
	showLabel,
}: {
	label: string;
	title: string;
	subtitle: string;
	details: string[];
	showLabel: boolean;
}) {
	return (
		<div className="w-full p-6 md:p-8 rounded-2xl bg-white/70 shadow-sm transition-shadow hover:shadow-md">
			{showLabel && (
				<p className="text-sm font-bold text-primary-text mb-3 font-sans">
					{label}
				</p>
			)}
			<h3 className="text-lg font-bold text-primary-text font-sans leading-snug">
				{title}
			</h3>
			<p className="text-sm font-semibold text-primary-text/70 font-sans mb-4">
				{subtitle}
			</p>
			{details.length > 0 && (
				<ul className="space-y-2">
					{details.map((d, i) => (
						<li
							// biome-ignore lint/suspicious/noArrayIndexKey: list is static and items are never reordered
							key={i}
							className="flex gap-2 text-sm text-muted font-sans leading-relaxed"
						>
							<span className="text-brand mt-0 shrink-0 select-none font-bold">
								—
							</span>
							<span>{d}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
