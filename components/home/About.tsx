import Link from "next/link";
import { Container } from "../layout/Container";
import { TimelineLine } from "../ui/TimelineLine";

const Icon = ({ d, title }: { d: string; title: string }) => (
	<svg
		className="w-8 h-8"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		viewBox="0 0 24 24"
		role="img"
		aria-labelledby={`title-${title.replace(/\s+/g, "-").toLowerCase()}`}
	>
		<title id={`title-${title.replace(/\s+/g, "-").toLowerCase()}`}>
			{title}
		</title>
		<path strokeLinecap="round" strokeLinejoin="round" d={d} />
	</svg>
);

const expertise = [
	{
		title: "Frontend Development",
		d: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
	},
	{
		title: "Backend Development",
		d: "M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.25 5.25m13.5 0l2.4 2.4a4.5 4.5 0 01.9 2.7",
	},
	{
		title: "Cloud Development",
		d: "M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z",
	},
];

export default function About() {
	return (
		<section className="py-20 bg-transparent">
			<Container>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
					{/* Left Side: Expertise List */}
					<div className="hidden lg:flex gap-8">
						<TimelineLine />
						<div className="flex flex-col gap-16 py-4">
							{expertise.map((item) => (
								<div key={item.title} className="flex items-center gap-6">
									<div className="text-primary-text">
										<Icon d={item.d} title={item.title} />
									</div>
									<h3 className="text-xl md:text-2xl text-primary-text">
										{item.title}
									</h3>
								</div>
							))}
						</div>
					</div>

					{/* Right Side: Description */}
					<div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
						<h2 className="text-4xl md:text-5xl font-black text-primary-text">
							About me
						</h2>
						<p className="text-lg text-primary-text font-medium leading-relaxed">
							I work primarily with Java & Spring Boot on the server side, and
							Next.js & React on the front. I enjoy tackling infrastructure
							challenges, designing REST APIs, and shipping products that are
							both fast and maintainable. When I'm not writing code, I'm usually
							studying for my next AWS certification.
						</p>
						<div className="pt-2">
							<Link
								href="/about"
								className="text-brand hover:text-brand-dark font-bold text-lg inline-flex items-center gap-2 transition-transform group"
							>
								Learn more
								<span className="group-hover:translate-x-1 transition-transform">
									→
								</span>
							</Link>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
