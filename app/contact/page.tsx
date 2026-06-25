import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
	title: "Contact | Al Francis Daga-ang",
	description: "Get in touch with Al Francis Daga-ang.",
};

export default function ContactPage() {
	return (
		<section className="py-16 md:py-24 border-t border-[#e5e7eb]">
			<Container>
				<h1 className="text-[52px] font-black uppercase tracking-tighter text-[#0a0a0a] mb-4 font-sans">
					Let&apos;s work together
				</h1>
				<p className="text-gray-500 mb-10 font-sans">
					Have a project in mind or just want to say hi? Fill out the form
					below.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
					<ContactForm />
					<ContactInfo />
				</div>
			</Container>
		</section>
	);
}
