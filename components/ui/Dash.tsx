export function Dash({ className = "" }: { className?: string }) {
	return (
		<div
			className={`h-0.75 w-16 md:w-24 bg-brand ${className}`}
			aria-hidden="true"
		/>
	);
}
