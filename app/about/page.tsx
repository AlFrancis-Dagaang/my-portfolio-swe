import type { Metadata } from "next";

import { Bio } from "@/components/about/Bio";
import { Certifications } from "@/components/about/Certifications";
import { EducationTimeline } from "@/components/about/EducationTimeline";
import { ExperienceTimeline } from "@/components/about/ExperienceTimeline";
import { Skills } from "@/components/about/Skills";
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
		<section className="py-12 md:py-20 border-t border-border-light bg-transparent relative">
			<div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
				<div className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-125 rounded-full bg-brand/10 blur-[120px]" />
			</div>
			<Container>
				<Bio />
				<Skills skills={skills} />
				<ExperienceTimeline experiences={experiences} />
				<EducationTimeline educations={educations} />
				<Certifications certifications={certifications} />
			</Container>
		</section>
	);
}
