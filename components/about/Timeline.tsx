export function Timeline({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative z-10">
			{/* Rail — hidden on mobile, shown md+ */}
			<div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300/80" />
			{/* Left rail for mobile */}
			<div className="block md:hidden absolute left-1.5 top-0 bottom-0 w-0.5 bg-gray-300/80" />
			<div className="space-y-8 md:space-y-12">{children}</div>
		</div>
	);
}

export function TimelineItem({
	label,
	title,
	subtitle,
	details,
	active = false,
	index = 0,
}: {
	label: string;
	title: string;
	subtitle: string;
	details: string[];
	active?: boolean;
	index?: number;
}) {
	const isLeft = index % 2 === 0;

	return (
		<>
			{/* ── Mobile: single column ── */}
			<div className="relative flex md:hidden pl-8">
				{/* Dot */}
				<span
					className={[
						"absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-colors z-10",
						active
							? "border-brand bg-brand/20"
							: "border-border-light bg-white/80",
					].join(" ")}
				/>
				<TimelineCard
					label={label}
					title={title}
					subtitle={subtitle}
					details={details}
					active={active}
					showLabel
				/>
			</div>

			{/* ── Desktop: alternating two column ── */}
			<div className="relative hidden md:grid grid-cols-2 gap-8 items-start">
				{/* Left side */}
				<div className={isLeft ? "block" : "flex justify-end"}>
					{isLeft ? (
						<TimelineCard
							label={label}
							title={title}
							subtitle={subtitle}
							details={details}
							active={active}
							showLabel={false}
						/>
					) : (
						<p className="text-[11px] font-semibold uppercase tracking-widest text-brand font-sans pt-1 text-right">
							{label}
						</p>
					)}
				</div>

				{/* Center dot */}
				<span
					className={[
						"absolute left-1/2 -translate-x-1/2 top-2 w-3.5 h-3.5 rounded-full border-2 transition-colors z-10",
						active
							? "border-brand bg-brand/20"
							: "border-border-light bg-white/80",
					].join(" ")}
				/>

				{/* Right side */}
				<div className={!isLeft ? "block" : "flex justify-start"}>
					{!isLeft ? (
						<TimelineCard
							label={label}
							title={title}
							subtitle={subtitle}
							details={details}
							active={active}
							showLabel={false}
						/>
					) : (
						<p className="text-[11px] font-semibold uppercase tracking-widest text-brand font-sans pt-1">
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
	active,
	showLabel,
}: {
	label: string;
	title: string;
	subtitle: string;
	details: string[];
	active: boolean;
	showLabel: boolean;
}) {
	return (
		<div
			className={[
				"w-full p-5 rounded-2xl border bg-white/80 transition-colors duration-200",
				active ? "border-brand/40" : "border-border-light",
			].join(" ")}
		>
			{showLabel && (
				<p className="text-[11px] font-semibold uppercase tracking-widest text-brand mb-1 font-sans">
					{label}
				</p>
			)}
			<h3 className="text-[17px] font-bold text-primary-text font-sans leading-snug">
				{title}
			</h3>
			<p className="text-sm font-medium text-muted font-sans mb-3">
				{subtitle}
			</p>
			{details.length > 0 && (
				<ul className="space-y-1.5">
					{details.map((d, i) => (
						<li
							// biome-ignore lint/suspicious/noArrayIndexKey: <>
							key={i}
							className="flex gap-2 text-sm text-muted font-sans leading-relaxed"
						>
							<span className="text-brand mt-0.5 shrink-0 select-none">—</span>
							<span>{d}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
