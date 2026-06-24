import type { Metadata } from "next";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import Hero from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { getFeaturedProjects } from "@/lib/projects";

export const metadata: Metadata = {
	title: "Al Francis Daga-ang — Software Engineer",
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
