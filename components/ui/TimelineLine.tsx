export function TimelineLine() {
	return (
		<div className="relative flex flex-col items-center">
			{/* The vertical line */}
			<div className="w-0.75 bg-brand h-full" />
			{/* The dots */}
			<div className="absolute top-1/4 -translate-y-1/2 w-4 h-4 rounded-full bg-brand" />
			<div className="absolute top-3/4 -translate-y-1/2 w-4 h-4 rounded-full bg-brand" />
		</div>
	);
}
