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
import { getSkills } from "@/lib/about";

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

export async function TechStack() {
	const skillList = await getSkills();

	const marqueeSkills = [
		...skillList.map((skill) => ({ ...skill, instanceId: `${skill.name}-a` })),
		...skillList.map((skill) => ({ ...skill, instanceId: `${skill.name}-b` })),
		...skillList.map((skill) => ({ ...skill, instanceId: `${skill.name}-c` })),
		...skillList.map((skill) => ({ ...skill, instanceId: `${skill.name}-d` })),
	];
	return (
		<section className="py-8 border-t border-border-light bg-white/50 backdrop-blur-md overflow-hidden">
			<Container>
				{/* Clips any layout breaking overflow strictly to the container bounds.*/}
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
									{Icon && <Icon className="h-7 w-7 " />}
								</span>
							);
						})}
					</div>
				</div>
			</Container>
		</section>
	);
}
