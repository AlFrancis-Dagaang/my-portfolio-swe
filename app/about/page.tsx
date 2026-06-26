import type { Metadata } from "next";

import { Bio } from "@/components/about/Bio";
import { Certifications } from "@/components/about/Certifications";
import { EducationTimeline } from "@/components/about/EducationTimeline";
import { ExperienceTimeline } from "@/components/about/ExperienceTimeline";
import { TechStackSection } from "@/components/about/Skills";
import { Container } from "@/components/layout/Container";

import {
	getCertifications,
	getEducation,
	getExperience,
	getSkills,
} from "@/lib/about";

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
	const [experiences, educations, certifications, skills] = await Promise.all([
		getExperience(),
		getEducation(),
		getCertifications(),
		getSkills(),
	]);

	return (
		<div className="w-full bg-transparent">
			<Bio />
			<TechStackSection skills={skills} />
			<ExperienceTimeline experiences={experiences} />
			<EducationTimeline educations={educations} />
			<Certifications certifications={certifications} />
		</div>
	);
}
