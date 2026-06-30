import Image from "next/image";
import { Container } from "../layout/Container";
import { Dash } from "../ui/Dash";
export function Bio() {
	return (
		<section className="py-20 bg-transparent">
			<Container>
				<div className="flex items-center justify-center gap-4 mb-16">
					<Dash width="w-16 md:w-24" />

					<h2 className="text-4xl md:text-5xl font-black text-primary-text">
						About <span className="text-brand">Me</span>
					</h2>

					<Dash width="w-16 md:w-24" />
				</div>

				{/*GRID LAYOUT: 12 columns */}
				<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start max-w-5xl mx-auto">
					{/* Left: Polaroid Image */}
					<div className="md:col-span-5 flex justify-center md:justify-end">
						<div className="relative rotate-[-4deg] bg-white p-3 shadow-xl border border-gray-200 transition-transform hover:rotate-0 duration-300">
							<Image
								src="/images/profile/profile-v3.jpg"
								alt="Al Francis Daga-ang"
								width={350}
								height={350}
								className="object-cover w-70 h-70 md:w-[320px] md:h-80"
								priority
							/>
						</div>
					</div>

					{/* Right: Text Content */}
					<div className="md:col-span-7 space-y-6 text-center md:text-left pt-4 md:pl-6">
						<p className="text-lg text-primary-text leading-relaxed font-medium">
							Hey, I'm Al Francis Daga-ang — a full-stack developer based in the
							Philippines, focused on building reliable, scalable systems. I
							work primarily with Java & Spring Boot on the server side, and
							Next.js & React on the front.
						</p>

						<p className="text-lg text-primary-text leading-relaxed font-medium">
							I enjoy tackling infrastructure challenges, designing REST APIs,
							and shipping products that are both fast and maintainable. When
							I'm not writing code, I'm usually studying for my next AWS
							certification.
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
}
