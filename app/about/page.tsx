// biome-ignore assist/source/organizeImports: <>
import type { Metadata } from "next";
import type { IconType } from "react-icons";
import { FaAws, FaJava } from "react-icons/fa";
import Image from "next/image";
import {
	SiGit,
	SiNextdotjs,
	SiReact,
	SiSpringboot,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import { Container } from "@/components/layout/Container";
import type { Certification } from "@/types/certification";
import {
	getExperience,
	getEducation,
	getCertifications,
	getSkills,
} from "@/lib/about";

// ── Metadata ─────────────────────────────────────────────────────────────────
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

// ── Mirrors ICON_MAP in TechStack — single source of truth ───────────────────
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

// ── Page ─────────────────────────────────────────────────────────────────────
export default async function AboutPage() {
	const [experiences, educations, certifications, skills] = await Promise.all([
		getExperience(),
		getEducation(),
		getCertifications(),
		getSkills(),
	]);
	return (
		<section className="py-12 md:py-20 border-t border-border-light bg-transparent relative">
			{/* Ambient glow — matches Projects page */}
			<div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
				<div className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-125 rounded-full bg-brand/10 blur-[120px]" />
			</div>

			<Container>
				{/* ── 1. BIO / INTRO ───────────────────────────────────────────────── */}
				<div className="mb-20">
					<h1 className="text-[52px] md:text-[64px] font-black uppercase tracking-tighter text-primary-text mb-6 font-sans">
						About
					</h1>

					<div className="grid md:grid-cols-[160px_1fr] gap-10 items-start max-w-3xl">
						{/* Avatar */}
						<div className="w-full rounded-2xl overflow-hidden border border-border-light bg-surface shrink-0">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<Image
								src="/images/profile/profile-v2.png"
								alt="Al Francis Daga-ang"
								width={500}
								height={500}
								className="w-full h-full object-cover"
							/>
						</div>

						{/* Bio */}
						<div className="space-y-4">
							<p className="text-lg text-muted font-sans leading-relaxed">
								Hey, I&apos;m{" "}
								<span className="text-primary-text font-semibold">
									Al Francis Daga-ang
								</span>{" "}
								— a full-stack developer based in the Philippines, focused on
								building reliable, scalable systems. I work primarily with{" "}
								<span className="text-brand font-medium">
									Java &amp; Spring Boot
								</span>{" "}
								on the server side, and{" "}
								<span className="text-brand font-medium">
									Next.js &amp; React
								</span>{" "}
								on the front.
							</p>
							<p className="text-lg text-muted font-sans leading-relaxed">
								I enjoy tackling infrastructure challenges, designing REST APIs,
								and shipping products that are both fast and maintainable. When
								I&apos;m not writing code, I&apos;m usually studying for my next
								AWS certification.
							</p>
						</div>
					</div>
				</div>

				{/* ── 2. SKILLS ────────────────────────────────────────────────────── */}
				<div className="mb-20">
					<SectionEyebrow>Skills</SectionEyebrow>
					<h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-primary-text mb-8 font-sans">
						Tech Stack
					</h2>

					<div className="flex flex-wrap gap-3">
						{skills.map((skill) => {
							const Icon = ICON_MAP[skill.icon];
							const color = SKILL_COLORS[skill.icon] ?? "#94a3b8";
							return (
								<div
									key={skill.name}
									className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border-light bg-surface hover:border-brand/40 transition-colors duration-200"
								>
									{Icon && (
										<Icon
											className="shrink-0 h-5 w-5"
											style={{ color }}
											aria-hidden="true"
										/>
									)}
									<span
										className="text-sm font-semibold font-sans tracking-wide"
										style={{ color }}
									>
										{skill.name}
									</span>
								</div>
							);
						})}
					</div>
				</div>

				{/* ── 3. EXPERIENCE TIMELINE ───────────────────────────────────────── */}
				<div className="mb-20">
					<SectionEyebrow>Career</SectionEyebrow>
					<h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-primary-text mb-10 font-sans">
						Experience
					</h2>

					<Timeline>
						{experiences.map((exp, i) => (
							<TimelineItem
								// biome-ignore lint/suspicious/noArrayIndexKey: <>
								key={i}
								label={
									exp.current
										? `${exp.startYear} — Present`
										: `${exp.startYear} — ${exp.endYear}`
								}
								title={exp.role}
								subtitle={exp.company}
								details={exp.details}
								active={exp.current}
							/>
						))}
					</Timeline>
				</div>

				{/* ── 4. EDUCATION TIMELINE ────────────────────────────────────────── */}
				<div className="mb-20">
					<SectionEyebrow>Background</SectionEyebrow>
					<h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-primary-text mb-10 font-sans">
						Education
					</h2>

					<Timeline>
						{educations.map((edu, i) => (
							<TimelineItem
								// biome-ignore lint/suspicious/noArrayIndexKey: <>
								key={i}
								label={`${edu.startYear} — ${edu.endYear}`}
								title={edu.degree}
								subtitle={edu.school}
								details={edu.details}
							/>
						))}
					</Timeline>
				</div>

				{/* ── 5. CERTIFICATIONS ────────────────────────────────────────────── */}
				<div className="mb-4">
					<SectionEyebrow>Credentials</SectionEyebrow>
					<h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-primary-text mb-8 font-sans">
						Certifications
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{certifications.map((cert) => (
							<CertCard key={cert.id} cert={cert} />
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionEyebrow({ children }: { children: React.ReactNode }) {
	return (
		<p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand mb-2 font-sans">
			{children}
		</p>
	);
}

function Timeline({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative">
			{/* Vertical rail */}
			<div className="absolute left-1.5 top-2 bottom-2 w-px bg-border-light" />
			<div className="space-y-10 pl-8">{children}</div>
		</div>
	);
}

function TimelineItem({
	label,
	title,
	subtitle,
	details,
	active = false,
}: {
	label: string;
	title: string;
	subtitle: string;
	details: string[];
	active?: boolean;
}) {
	return (
		<div className="relative">
			{/* Node dot */}
			<span
				className={[
					"absolute -left-8 top-1.25 w-3.5 h-3.5 rounded-full border-2 transition-colors",
					active
						? "border-brand bg-brand/20"
						: "border-border-light bg-surface",
				].join(" ")}
			/>

			{/* Year range */}
			<p className="text-[11px] font-semibold uppercase tracking-widest text-brand mb-1 font-sans">
				{label}
			</p>

			{/* Role / Degree */}
			<h3 className="text-[17px] font-bold text-primary-text font-sans leading-snug">
				{title}
			</h3>

			{/* Company / School */}
			<p className="text-sm font-medium text-muted font-sans mb-3">
				{subtitle}
			</p>

			{/* Bullet details */}
			{details.length > 0 && (
				<ul className="space-y-1.5">
					{details.map((d, i) => (
						<li
							// biome-ignore lint/suspicious/noArrayIndexKey: <>
							key={i}
							className="flex gap-2 text-sm text-muted font-sans leading-relaxed"
						>
							<span className="text-brand mt-0.5 shrink-0 select-none">—</span>
							<span>{d}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

function CertCard({ cert }: { cert: Certification }) {
	return (
		<div className="group flex gap-4 p-5 rounded-2xl border border-border-light bg-surface hover:border-brand/40 transition-colors duration-200">
			{/* Badge */}
			{cert.badgeImage && (
				<div className="shrink-0 w-14 h-14 rounded-xl overflow-hidden border border-border-light bg-surface flex items-center justify-center">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<Image
						src={cert.badgeImage}
						alt={cert.title}
						width={56}
						height={56}
						className="w-full h-full object-contain p-1"
					/>
				</div>
			)}

			{/* Text */}
			<div className="min-w-0 flex flex-col gap-0.5">
				<p className="text-[10px] font-semibold uppercase tracking-widest text-brand font-sans">
					{cert.issuer}
				</p>
				<h3 className="text-sm font-bold text-primary-text font-sans leading-snug">
					{cert.title}
				</h3>
				<p className="text-xs text-muted font-sans">{cert.issuedDate}</p>
				{cert.description && (
					<p className="text-xs text-muted/70 font-sans mt-1.5 leading-relaxed line-clamp-2">
						{cert.description}
					</p>
				)}
			</div>
		</div>
	);
}
