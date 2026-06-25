export function Dash({ className = "" }: { className?: string }) {
	return (
		<div
			className={`h-[3px] w-16 md:w-24 bg-brand ${className}`}
			aria-hidden="true"
		/>
	);
}
