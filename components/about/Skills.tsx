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
import { Container } from "../layout/Container";
import { Dash } from "../ui/Dash";

// Your existing mappings
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

interface TechStackProps {
	skills: Skill[];
}

export function TechStackSection({ skills }: TechStackProps) {
	// Split the skills array in half (e.g., 4 on top, 4 on bottom)
	const midPoint = Math.ceil(skills.length / 2);
	const topRow = skills.slice(0, midPoint);
	const bottomRow = skills.slice(midPoint);

	// Helper component to render an individual icon card
	const IconCard = ({ skill }: { skill: Skill }) => {
		const Icon = ICON_MAP[skill.icon];
		const color = SKILL_COLORS[skill.icon] ?? "#94a3b8";

		return (
			<div
				className="w-20 h-20 md:w-24 md:h-24 shrink-0 bg-white rounded-2xl shadow-sm border border-border-light flex flex-col items-center justify-center hover:shadow-md transition-shadow"
				title={skill.name}
			>
				{Icon ? (
					<Icon className="h-10 w-10 md:h-12 md:w-12" style={{ color }} />
				) : (
					<span className="text-xs font-bold text-muted">{skill.name}</span>
				)}
			</div>
		);
	};

	return (
		<section className="py-20 bg-white/50 overflow-hidden">
			<Container>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					{/* LEFT SIDE: Text Content with Dash UI */}
					<div className="space-y-6">
						<div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-4">
							{/* Use the new width prop! Example: w-8 on mobile, w-12 on desktop */}
							<Dash
								width="w-8 md:w-12"
								className="order-2 md:order-1 mt-1 md:mt-0"
							/>

							{/* Text: Order 1 (top) on mobile, Order 2 (right) on desktop */}
							<span className="font-bold text-lg text-primary-text order-1 md:order-2">
								My Tech Stack
							</span>
						</div>

						<h2 className="text-4xl md:text-5xl font-black text-primary-text leading-tight tracking-tight">
							Key Technologies & <br /> Platforms
						</h2>

						<p className="text-lg text-muted leading-relaxed max-w-md">
							I work with leading platforms and technologies that empower
							digital transformation, accelerate delivery, and drive measurable
							business results.
						</p>
					</div>

					{/* RIGHT SIDE: Animated Marquee Container */}
					{/* Mask image creates the fade out effect on the left and right edges */}
					<div
						className="relative bg-[#f1f5f9] rounded-4xl p-8 md:p-12 overflow-hidden flex flex-col gap-6 border border-border-light/50"
						style={{
							maskImage:
								"linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
							WebkitMaskImage:
								"linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
						}}
					>
						{/* TOP ROW: Moving Left */}
						<div className="flex w-max animate-marquee-left gap-6 hover:[animation-play-state:paused]">
							{/* We double the array so the scroll loops infinitely seamlessly */}
							{[...topRow, ...topRow, ...topRow].map((skill, idx) => (
								<IconCard
									key={`top-${skill.name}-${
										// biome-ignore lint/suspicious/noArrayIndexKey: <>
										idx
									}`}
									skill={skill}
								/>
							))}
						</div>

						{/* BOTTOM ROW: Moving Right */}
						<div className="flex w-max animate-marquee-right gap-6 hover:[animation-play-state:paused]">
							{[...bottomRow, ...bottomRow, ...bottomRow].map((skill, idx) => (
								<IconCard
									key={`bottom-${skill.name}-${
										// biome-ignore lint/suspicious/noArrayIndexKey: <>
										idx
									}`}
									skill={skill}
								/>
							))}
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
