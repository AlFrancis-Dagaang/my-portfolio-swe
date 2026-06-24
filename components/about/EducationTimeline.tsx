import type { Education } from "@/types/education";
import { SectionEyebrow } from "./SectionEyebrow";
import { Timeline, TimelineItem } from "./Timeline";

export function EducationTimeline({ educations }: { educations: Education[] }) {
	return (
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
						index={i}
						label={`${edu.startYear} — ${edu.endYear}`}
						title={edu.degree}
						subtitle={edu.school}
						details={edu.details}
					/>
				))}
			</Timeline>
		</div>
	);
}
