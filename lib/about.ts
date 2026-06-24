import certificationsData from "@/data/certifications.json";
import educationData from "@/data/educations.json";
import experienceData from "@/data/experience.json";
import skillsData from "@/data/skills.json";

import type { Certification } from "@/types/certification";
import type { Education } from "@/types/education";
import type { Experience } from "@/types/experience";
import type { Skill } from "@/types/skill";

const experience = experienceData as Experience[];
const education = educationData as Education[];
const certifications = certificationsData as Certification[];
const skills = skillsData as Skill[];

export async function getExperience(): Promise<Experience[]> {
	return experience;
}

export async function getEducation(): Promise<Education[]> {
	return education;
}

export async function getCertifications(): Promise<Certification[]> {
	return certifications;
}

export async function getSkills(): Promise<Skill[]> {
	return skills;
}
