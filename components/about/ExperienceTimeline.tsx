import type { Experience } from "@/types/experience";
import { Container } from "../layout/Container"; // Added import
import { Dash } from "../ui/Dash";
import { Timeline, TimelineItem } from "./Timeline";

export function ExperienceTimeline({
	experiences,
}: {
	experiences: Experience[];
}) {
	return (
		<section className="py-20">
			{/* Added Container wrapper here! */}
			<Container>
				{/* Centered Header with Brand Dashes */}
				<div className="flex flex-col items-center justify-center text-center mb-16 space-y-4">
					<div className="flex items-center justify-center gap-4">
						{/* Using your custom Dash component! */}
						<Dash />

						<h2 className="text-4xl md:text-5xl font-black text-primary-text">
							Experience
						</h2>

						{/* And here as well! */}
						<Dash />
					</div>

					<p className="text-lg text-primary-text max-w-2xl font-medium mx-auto">
						My career journey and the impact I've made along the way, as told
						through my work and the words of those I've worked with.
					</p>
				</div>

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
						/>
					))}
				</Timeline>
			</Container>
		</section>
	);
}
