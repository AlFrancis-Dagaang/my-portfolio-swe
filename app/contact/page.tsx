import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Container } from "@/components/layout/Container";
import { Dash } from "@/components/ui/Dash";

export const metadata: Metadata = {
	title: "Contact | Al Francis Daga-ang",
	description: "Get in touch with Al Francis Daga-ang.",
};

export default function ContactPage() {
	return (
		<section className="py-16 md:py-24 border-t border-[#e5e7eb]">
			<Container>
				<div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-2 md:gap-6 mb-4">
					<Dash width="w-16 md:w-24" />
					<h1 className="text-4xl md:text-5xl font-black text-primary-text leading-none font-sans">
						Let&apos;s Work <span className="text-brand">Together</span>
					</h1>
				</div>
				<p className="font-medium text-primary-text mb-10 font-sans">
					Have a project in mind or just want to say hi? Fill out the form
					below.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="md:col-span-2">
						<ContactForm />
					</div>
					<div className="md:col-span-1">
						<ContactInfo />
					</div>
				</div>
			</Container>
		</section>
	);
}
