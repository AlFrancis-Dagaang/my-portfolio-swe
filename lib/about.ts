import type { Certification } from "@/types/certification";
import type { Education } from "@/types/education";
import type { Experience } from "@/types/experience";
import type { Skill } from "@/types/skill";

export async function getExperience(): Promise<Experience[]> {
	const data = await import("@/data/experience.json");
	return data.default;
}

export async function getEducation(): Promise<Education[]> {
	const data = await import("@/data/educations.json");
	return data.default;
}

export async function getCertifications(): Promise<Certification[]> {
	const data = await import("@/data/certifications.json");
	return data.default;
}

export async function getSkills(): Promise<Skill[]> {
	const data = await import("@/data/skills.json");
	return data.default;
}
