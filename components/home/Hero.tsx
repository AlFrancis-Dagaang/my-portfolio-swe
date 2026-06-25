import Image from "next/image";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { Dash } from "../ui/Dash";

export default function Hero() {
	return (
		<section className="relative pt-12 pb-8 md:pt-16 md:pb-12 lg:pt-0 lg:pb-0 xl:pt-24 xl:pb-28 overflow-hidden bg-transparent max-w-full min-h-[80vh] flex items-center">
			<Container className="relative w-full">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
					{/* Left Column: Text content */}
					<div className="flex flex-col space-y-4 lg:col-span-7 xl:col-span-7 z-10 select-text">
						{/* Greeting */}
						<h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-primary-text tracking-tight flex items-end">
							Hello <span className="text-brand font-black ml-[2px]">.</span>
						</h2>

						{/* Name with Dash */}
						<div className="flex items-center gap-4 md:gap-6">
							<Dash className="shrink-0" />
							<h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-primary-text tracking-tight whitespace-nowrap">
								I&apos;m Al Francis
							</h2>
						</div>

						{/* Main Headline */}
						<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[52px] xl:text-[76px] font-bold tracking-tight text-primary-text leading-tight mt-2 whitespace-nowrap">
							Software <span className="text-brand">Engineer</span>
						</h1>

						{/* Action Buttons */}
						<div className="flex flex-wrap items-center gap-4 pt-4 md:pt-6">
							<Button href="/projects" variant="primary">
								My projects
							</Button>
							<Button href="/resume" variant="outline">
								My resume
							</Button>
						</div>
					</div>

					{/* Right Column: Image Wrapper */}
					<div className="relative w-full max-w-full flex justify-center lg:justify-end mt-8 lg:mt-0 lg:col-span-5 xl:col-span-5">
						<div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[380px] xl:max-w-[480px] z-0 flex justify-center lg:justify-end">
							<Image
								src="/images/profile/profile-v2.png"
								alt="Al Francis Dagaang Profile Photo"
								width={600}
								height={600}
								priority
								className="object-contain w-full h-auto max-h-[55vh] xl:max-h-none select-none pointer-events-none mix-blend-normal"
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
