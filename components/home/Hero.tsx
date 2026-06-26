import Image from "next/image";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { Dash } from "../ui/Dash";

export default function Hero() {
	return (
		<section className="relative pt-12 md:pt-16 lg:pt-0 pb-0 overflow-hidden bg-transparent max-w-full min-h-[80vh] flex items-center">
			<Container className="relative w-full">
				<div className="grid grid-cols-1 lg:grid-cols-12  items-center">
					{/* Left Column: Text content */}
					{/* Added `items-center text-center lg:items-start lg:text-left` to center content on mobile and left-align on desktop */}
					<div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4 lg:col-span-7 xl:col-span-7 z-10 select-text">
						{/* Greeting */}
						<h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-primary-text tracking-tight flex justify-center lg:justify-start items-end w-full">
							Hello <span className="text-brand font-black ml-0.5">.</span>
						</h2>

						{/* Name with Dash */}
						{/* 
                            CRITICAL FIX FOR MOBILE:
                            - `flex-col-reverse` forces the Dash to go below the text on mobile.
                            - `lg:flex-row` puts them back side-by-side on desktop.
                            - `gap-2 lg:gap-6` tightens the vertical spacing on mobile.
                        */}
						<div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4 lg:gap-6 w-full">
							<Dash className="shrink-0" />
							<h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-primary-text tracking-tight whitespace-nowrap">
								I&apos;m Al Francis
							</h2>
						</div>

						{/* Main Headline */}
						<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[52px] xl:text-[76px] font-bold tracking-tight text-primary-text leading-tight mt-2 whitespace-nowrap w-full">
							Software <span className="text-brand">Engineer</span>
						</h1>

						{/* Action Buttons */}
						{/* Added `justify-center lg:justify-start` to center buttons on mobile */}
						<div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-4 md:pt-6 w-full">
							<Button href="/projects" variant="primary">
								My projects
							</Button>
							<Button href="/resume" variant="outline">
								My resume
							</Button>
						</div>
					</div>

					{/* Right Column: Image Wrapper */}
					<div className="relative z-40 w-full max-w-full flex justify-center lg:justify-end mt-8 lg:mt-0 lg:col-span-5 xl:col-span-5">
						<div className="relative w-full max-w-[320px] sm:max-w-100 lg:max-w-95 xl:max-w-120 z-0 flex justify-center lg:justify-end">
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
