import { Container } from "@/components/layout/Container";
import { Button } from "../ui/Button";
import { Dash } from "../ui/Dash";

export function ContactCTA() {
	return (
		<section className="py-20 bg-transparent">
			<Container>
				{/* Header Section: Stacked on mobile, side-by-side on desktop */}
				<div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-12">
					{/* Dash: Order 2 on mobile (bottom), Order 1 on desktop (left). Sized small! */}
					<Dash
						width="w-8 md:w-12"
						className="order-2 md:order-1 mt-1 md:mt-0"
					/>

					{/* Title: Order 1 on mobile (top), Order 2 on desktop (right). */}
					<h2 className="text-2xl font-bold text-primary-text order-1 md:order-2">
						Contact
					</h2>
				</div>

				{/* Main CTA Content (Remains centered) */}
				<div className="flex flex-col items-center justify-center text-center space-y-6 max-w-2xl mx-auto">
					<p className="text-4xl md:text-5xl font-black text-primary-text tracking-tight">
						Have a project ?
					</p>

					<p className="text-4xl md:text-5xl font-black text-brand tracking-tight">
						Let&apos;s talk!
					</p>

					{/* Button */}
					<Button href="/contact" variant="primary">
						Contact Me
					</Button>
				</div>
			</Container>
		</section>
	);
}
