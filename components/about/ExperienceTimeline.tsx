import type { Experience } from "@/types/experience";
import { SectionEyebrow } from "./SectionEyebrow";
import { Timeline, TimelineItem } from "./Timeline";

export function ExperienceTimeline({
	experiences,
}: {
	experiences: Experience[];
}) {
	return (
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
						index={i}
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
	);
}
