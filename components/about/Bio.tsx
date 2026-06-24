export function Bio() {
	return (
		<div className="mb-20">
			<h1 className="text-[52px] md:text-[64px] font-black uppercase tracking-tighter text-primary-text mb-6 font-sans">
				About
			</h1>
			<div className="max-w-3xl space-y-4">
				<p className="text-lg text-muted font-sans leading-relaxed">
					Hey, I&apos;m{" "}
					<span className="text-primary-text font-semibold">
						Al Francis Daga-ang
					</span>{" "}
					— a full-stack developer based in the Philippines, focused on building
					reliable, scalable systems. I work primarily with{" "}
					<span className="text-brand font-medium">Java &amp; Spring Boot</span>{" "}
					on the server side, and{" "}
					<span className="text-brand font-medium">Next.js &amp; React</span> on
					the front.
				</p>
				<p className="text-lg text-muted font-sans leading-relaxed">
					I enjoy tackling infrastructure challenges, designing REST APIs, and
					shipping products that are both fast and maintainable. When I&apos;m
					not writing code, I&apos;m usually studying for my next AWS
					certification.
				</p>
			</div>
		</div>
	);
}
