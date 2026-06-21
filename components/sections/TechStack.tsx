import type { IconType } from "react-icons";
import { FaAws, FaJava } from "react-icons/fa";
import {
	SiGit,
	SiNextdotjs,
	SiReact,
	SiSpringboot,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import { Container } from "@/components/layout/Container";
import skills from "@/data/skills.json";
import type { Skill } from "@/types/skill";

const ICON_MAP: Record<string, IconType> = {
	java: FaJava,
	spring: SiSpringboot,
	nextjs: SiNextdotjs,
	react: SiReact,
	typescript: SiTypescript,
	tailwindcss: SiTailwindcss,
	git: SiGit,
	aws: FaAws,
};

const skillList = skills as Skill[];

const marqueeSkills = [
	...skillList.map((skill) => ({ ...skill, instanceId: `${skill.name}-a` })),
	...skillList.map((skill) => ({ ...skill, instanceId: `${skill.name}-b` })),
	...skillList.map((skill) => ({ ...skill, instanceId: `${skill.name}-c` })),
	...skillList.map((skill) => ({ ...skill, instanceId: `${skill.name}-d` })),
];

export function TechStack() {
	return (
		<section className="py-12 border-t border-[#e5e7eb] bg-white/40 backdrop-blur-md overflow-hidden">
			<Container>
				<h2 className="text-sm font-bold tracking-widest uppercase text-[#0a0a0a] mb-6 font-sans">
					Tech Stack
				</h2>

				{/* Adding `relative w-full max-w-full` clips any layout breaking 
                  overflow strictly to the container bounds.
                */}
				<div
					className="relative w-full max-w-full overflow-hidden"
					style={{
						maskImage:
							"linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
						WebkitMaskImage:
							"linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
					}}
				>
					<div className="flex w-max animate-marquee gap-8 pr-8">
						{marqueeSkills.map((skill) => {
							const Icon = ICON_MAP[skill.icon];
							return (
								<span
									key={skill.instanceId}
									className="flex items-center justify-center shrink-0"
									title={skill.name}
								>
									{Icon && <Icon className="h-7 w-7 text-brand" />}
								</span>
							);
						})}
					</div>
				</div>
			</Container>
		</section>
	);
}
