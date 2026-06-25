import type { Metadata } from "next";
import { ContactCTA } from "@/components/home/ContactCTA";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import Hero from "@/components/home/Hero";
import { TechStack } from "@/components/home/TechStack";
import { getFeaturedProjects } from "@/lib/projects";

export const metadata: Metadata = {
	title: "Al Francis Daga-ang",
	description:
		"Portfolio of Al Francis Dagaang, a Software Engineer and Cloud Enthusiast specializing in Next.js, React, and AWS.",
	openGraph: {
		title: "Al Francis Dagaang — Software Engineer",
		description:
			"Portfolio of Al Francis Dagaang, Software Engineer and Cloud Enthusiast.",
		images: ["/og-image.png"],
	},
};

export default async function HomePage() {
	const featuredProjects = await getFeaturedProjects();

	return (
		<div className="w-full bg-transparent">
			<Hero />
			<TechStack />
			<FeaturedProjects projects={featuredProjects} />
			<ContactCTA />
		</div>
	);
}
