import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function ContactCTA() {
	return (
		<section className="py-20 border-t border-[#e5e7eb] bg-white/40 backdrop-blur-md">
			<Container>
				<div className="flex flex-col items-center justify-center text-center space-y-6 max-w-2xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold uppercase text-[#0a0a0a] font-sans tracking-tight">
						Let&apos;s work together
					</h2>
					<Link
						href="/contact"
						className="px-8 py-3.5 bg-brand text-white font-medium text-sm rounded-none hover:bg-brand-dark transition-colors uppercase tracking-wider font-sans"
					>
						Get in touch
					</Link>
				</div>
			</Container>
		</section>
	);
}
