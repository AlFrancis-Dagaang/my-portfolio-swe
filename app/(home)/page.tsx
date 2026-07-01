import type { Metadata } from "next";
import About from "@/components/home/About";
import { ContactCTA } from "@/components/home/ContactCTA";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import Hero from "@/components/home/Hero";
import { TechStack } from "@/components/home/TechStack";
import { getFeaturedProjects } from "@/lib/projects";

export const metadata: Metadata = {
	title: "Al Francis Daga-ang",
	description:
		"Portfolio of Al Francis Daga-ang, a Software Engineer and Cloud Enthusiast specializing in Java, React, and AWS.",
	openGraph: {
		title: "Al Francis Daga-ang — Software Engineer",
		description:
			"Portfolio of Al Francis Daga-ang, Software Engineer and Cloud Enthusiast.",
	},
};

export default async function HomePage() {
	const featuredProjects = await getFeaturedProjects();

	return (
		<div className="w-full bg-transparent">
			<Hero />
			<TechStack />
			<About />
			<FeaturedProjects projects={featuredProjects} />
			<ContactCTA />
		</div>
	);
}
