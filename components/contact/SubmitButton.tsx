"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			disabled={pending}
			className="px-8 py-3 bg-brand text-white font-bold uppercase tracking-wider hover:bg-brand-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-sans"
		>
			{pending ? "Sending..." : "Send Message"}
		</button>
	);
}
