import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/Container";

export default function Hero() {
	return (
		<section className="relative pt-12 pb-16 md:pt-24 md:pb-28 overflow-hidden bg-transparent max-w-full">
			<Container className="relative">
				{/* Utilizing a 12-column grid layout for precise alignment */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
					{/* Left Column: Text content (Spans 8 columns on large screens) */}
					{/* z-10 ensures your typography stays cleanly layered on top of the image */}
					<div className="flex flex-col space-y-6 lg:col-span-8 z-10 select-text">
						{/* Huge SaaS Headline */}
						<h1 className="text-[52px] sm:text-7xl md:text-[84px] lg:text-[92px] font-black tracking-tighter uppercase text-primary-text leading-[0.88] font-sans">
							AL FRANCIS <br />
							<span className="text-brand">DAGA-ANG</span>
						</h1>

						{/* Subtitle / Tagline */}
						<p className="text-xl md:text-2xl font-bold text-primary-text tracking-tight font-sans pt-2">
							Hi, I&apos;m a Software Engineer and Cloud Enthusiast.
						</p>

						{/* 
                          CRITICAL FIX: Changed max-w-xl to max-w-md (or max-w-[460px]).
                          This prevents the paragraph from stretching into the right side, 
                          keeping it perfectly readable and clear of the photo.
                        */}
						<p className="text-base font-normal text-muted leading-relaxed max-w-md font-sans">
							Building highly scalable serverless architectures, robust REST
							APIs, and modern frontends with clean TypeScript. Focused on
							performance and optimized cloud infrastructure.
						</p>

						<div className="pt-2">
							<Link
								href="/about"
								className="text-brand hover:text-brand-dark font-bold text-base transition-colors inline-flex items-center gap-1 group font-sans"
							>
								Learn more
								<span className="transform transition-transform duration-200 group-hover:translate-x-1">
									→
								</span>
							</Link>
						</div>
					</div>

					{/* Right Column: Image Wrapper (Spans 4 columns on large screens) */}
					<div className="lg:col-span-4 relative w-full max-w-full overflow-visible flex justify-center lg:justify-end mt-4 lg:mt-0">
						{/* 
                          - lg:-ml-36 pulls the image left so it fits right next to/under the headline text.
                          - z-0 keeps it structurally backgrounded relative to your copy.
                        */}
						<div className="relative w-full max-w-90 sm:max-w-105 lg:max-w-120 lg:scale-115 lg:origin-left-bottom lg:-ml-45 z-0">
							<Image
								src="/images/profile/profile-v2.png"
								alt="Al Francis Dagaang Profile Photo"
								width={500}
								height={500}
								priority
								style={{ width: "100%", height: "auto" }}
								className="object-contain select-none pointer-events-none mix-blend-normal"
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
