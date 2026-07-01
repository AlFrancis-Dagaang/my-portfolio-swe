import Image from "next/image";
import { Container } from "../layout/Container";
import { Dash } from "../ui/Dash";

// Hardcoded education data
const EDUCATION_DATA = {
	degree: "BS Computer Engineering",
	school: "Pamantasan ng Lungsod ng Maynila",
	startYear: 2022,
	endYear: 2026,
	details: [
		"Relevant coursework: Data Structures, Algorithms, Software Design",
	],
	images: [
		"/images/educations/education_1.JPG",
		"/images/educations/education_2.jpeg",
		"/images/educations/education_3.png",
	],
};

export function EducationSection() {
	return (
		<section className="py-20 bg-white/70 dark:bg-[#052e3e]/70 overflow-hidden">
			<Container>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* LEFT SIDE: Text Content */}
					<div className="space-y-6">
						<div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
							<Dash
								width="w-16 md:w-24"
								className="order-2 md:order-1 mt-1 md:mt-0"
							/>
							<h2 className="text-4xl md:text-5xl font-black text-primary-text order-1 md:order-2">
								Education
							</h2>
						</div>

						{/* Degree & School Info */}
						<div className="space-y-2 pt-4">
							<h3 className="text-2xl md:text-3xl font-bold text-primary-text">
								{EDUCATION_DATA.degree}
							</h3>
							<p className="text-xl text-primary-text/80 font-medium">
								{EDUCATION_DATA.school}
								<span className="text-muted text-lg ml-2">
									({EDUCATION_DATA.startYear} — {EDUCATION_DATA.endYear})
								</span>
							</p>
						</div>

						{/* Coursework / Details */}
						<p className="text-muted leading-relaxed text-sm md:text-base max-w-md">
							{EDUCATION_DATA.details[0]}
						</p>
					</div>

					{/* RIGHT SIDE: Marquee Images */}
					<div
						className="relative overflow-hidden flex items-center h-50 md:h-62.5"
						style={{
							maskImage:
								"linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
							WebkitMaskImage:
								"linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
						}}
					>
						<div className="flex w-max animate-marquee-left gap-4 md:gap-6 hover:[animation-play-state:paused]">
							{[
								...EDUCATION_DATA.images,
								...EDUCATION_DATA.images,
								...EDUCATION_DATA.images,
							].map((src, idx) => (
								<div
									// biome-ignore lint/suspicious/noArrayIndexKey: list is static and items are never reordered
									key={idx}
									className="relative w-70 h-45 md:w-[320px] md:h-50 shrink-0 rounded-xl overflow-hidden shadow-sm border border-border-light/50"
								>
									<Image
										src={src}
										alt="Education highlights"
										fill
										className="object-cover transition-transform duration-500 hover:scale-105"
										sizes="(max-width: 768px) 280px, 320px"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
