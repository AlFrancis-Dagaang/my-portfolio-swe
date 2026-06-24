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

const SKILL_COLORS: Record<string, string> = {
	java: "#E76F00",
	spring: "#6DB33F",
	nextjs: "#000000",
	react: "#61DAFB",
	typescript: "#3178C6",
	tailwindcss: "#38BDF8",
	git: "#F05032",
	aws: "#FF9900",
};

function SkillPill({ skill }: { skill: Skill }) {
	const Icon = ICON_MAP[skill.icon];
	const color = SKILL_COLORS[skill.icon] ?? "#94a3b8";

	return (
		<div
			style={{
				clipPath: "polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%)",
			}}
			className="flex items-center gap-1.5 md:gap-2.5 px-4 md:px-6 py-2 md:py-2.5 border border-border-light bg-surface hover:border-brand/40 transition-colors duration-200"
		>
			{Icon && (
				<Icon
					className="shrink-0 h-4 w-4 md:h-5 md:w-5"
					style={{ color }}
					aria-hidden="true"
				/>
			)}
			<span
				className="text-xs md:text-sm font-semibold font-sans tracking-wide whitespace-nowrap"
				style={{ color }}
			>
				{skill.name}
			</span>
		</div>
	);
}

export function Skills({ skills }: { skills: Skill[] }) {
	const top = skills.slice(0, 4);
	const bottom = skills.slice(4, 8);

	return (
		<div className="mb-20">
			<div className="flex flex-col items-center gap-3">
				{/* Top row */}
				<div className="flex flex-wrap justify-center gap-2 md:gap-3">
					{top.map((skill) => (
						<SkillPill key={skill.name} skill={skill} />
					))}
				</div>
				{/* Bottom row */}
				<div className="flex flex-wrap justify-center gap-2 md:gap-3">
					{bottom.map((skill) => (
						<SkillPill key={skill.name} skill={skill} />
					))}
				</div>
			</div>
		</div>
	);
}
