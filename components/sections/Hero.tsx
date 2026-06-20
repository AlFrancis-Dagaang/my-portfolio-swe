import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/Container";

export default function Hero() {
	return (
		<section className="relative pt-12 pb-16 md:pt-24 md:pb-28 overflow-hidden bg-transparent">
			<Container className="relative">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
					{/* Left Column: Higher z-index allows text to overlay slightly on the image */}
					<div className="flex flex-col space-y-6 lg:col-span-8 z-10 select-text">
						{/* Huge SaaS Headline matching your tight letter spacing layout */}
						<h1 className="text-[52px] sm:text-7xl md:text-[84px] lg:text-[92px] font-black tracking-tighter uppercase text-[#0a0a0a] leading-[0.88] font-sans">
							AL FRANCIS <br />
							<span className="text-[#8b0000]">DAGAANG</span>
						</h1>

						{/* Subtitle / Tagline */}
						<p className="text-xl md:text-2xl font-bold text-[#0a0a0a] tracking-tight font-sans pt-2">
							Hi, I&apos;m a Software Engineer and Cloud Enthusiast.
						</p>

						{/* Cleaned up About Preview Paragraph */}
						<p className="text-base font-normal text-[#6b7280] leading-relaxed max-w-xl font-sans">
							Building highly scalable serverless architectures, robust REST
							APIs, and modern frontends with clean TypeScript. Focused on
							performance and optimized cloud infrastructure.
						</p>

						{/* Minimal Crimson Link */}
						<div className="pt-2">
							<Link
								href="/about"
								className="text-[#8b0000] hover:text-[#660000] font-bold text-base transition-colors inline-flex items-center gap-1 group font-sans"
							>
								Learn more
								<span className="transform transition-transform duration-200 group-hover:translate-x-1">
									→
								</span>
							</Link>
						</div>
					</div>

					{/* Right Column: Negative margin pulls it left underneath the typography */}
					<div className="lg:col-span-4 relative w-full flex justify-center lg:justify-end mt-4 lg:mt-0">
						{/* - lg:scale-130 expands your photo comfortably past the container boundaries
                          - lg:-ml-32 pulls the left edge of your photo box deep under the text container 
                          - z-0 ensures your image stays naturally layered behind the bold headers
                        */}
						<div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[540px] lg:scale-130 lg:-ml-32 lg:-mr-16 z-0">
							<Image
								src="/images/profile/profile-v2.png"
								alt="Al Francis Dagaang Profile Photo"
								width={700}
								height={700}
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
