import type { Metadata } from "next";

import { Bio } from "@/components/about/Bio";
import { Certifications } from "@/components/about/Certifications";
import { EducationSection } from "@/components/about/Education";
import { ExperienceTimeline } from "@/components/about/ExperienceTimeline";
import { TechStackSection } from "@/components/about/Skills";

import { getCertifications, getExperience, getSkills } from "@/lib/about";

export const metadata: Metadata = {
	title: "About | Al Francis Daga-ang",
	description:
		"Full-stack developer with expertise in Java, Spring Boot, React, and AWS. Learn about my background, skills, and experience.",
	openGraph: {
		title: "About — Al Francis Daga-ang",
		description:
			"Full-stack developer passionate about cloud infrastructure, modern web development, and scalable backend systems.",
		images: ["/og-image.png"],
	},
};

export default async function AboutPage() {
	const [experiences, certifications, skills] = await Promise.all([
		getExperience(),
		getCertifications(),
		getSkills(),
	]);

	return (
		<div className="w-full bg-transparent">
			<Bio />
			<TechStackSection skills={skills} />
			<ExperienceTimeline experiences={experiences} />
			<EducationSection />
			<Certifications certifications={certifications} />
		</div>
	);
}
