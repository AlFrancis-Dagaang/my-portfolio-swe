import Image from "next/image";
import type { Certification } from "@/types/certification";
import { Container } from "../layout/Container";
import { Dash } from "../ui/Dash";

export function Certifications({
	certifications,
}: {
	certifications: Certification[];
}) {
	return (
		<section className="py-20 bg-transparent">
			<Container>
				<div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-16">
					<Dash
						width="w-16 md:w-24"
						className="order-2 md:order-1 mt-1 md:mt-0"
					/>
					<h2 className="text-4xl md:text-5xl font-black text-primary-text order-1 md:order-2">
						Certifications
					</h2>
				</div>

				{/* List of certs in a vertical stack */}
				<div className="flex flex-col gap-12 md:gap-16">
					{certifications.map((cert) => (
						<CertCard key={cert.id} cert={cert} />
					))}
				</div>
			</Container>
		</section>
	);
}

function CertCard({ cert }: { cert: Certification }) {
	return (
		<div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center w-full">
			{/* Left Side: Badge and Info */}
			<div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:w-1/2 shrink-0">
				{cert.badgeImage && (
					<div className="shrink-0 w-24 h-24 md:w-32 md:h-32 drop-shadow-sm flex items-center justify-center">
						<Image
							src={cert.badgeImage}
							alt={cert.title}
							width={128}
							height={128}
							className="w-full h-full object-contain"
						/>
					</div>
				)}

				{/* Desktop View */}
				<div className="flex flex-col gap-1.5 text-center md:text-left items-center md:items-start">
					<p className="text-brand font-bold text-sm md:text-base">
						{cert.issuer}
					</p>
					<h3 className="text-xl md:text-2xl font-black text-primary-text leading-tight">
						{cert.title}
					</h3>
					<p className="text-primary-text font-medium mt-1">
						{cert.issuedDate.split("-").join(" - ")}
					</p>
				</div>
			</div>

			{/* Right Side: Description and Link */}
			<div className="flex flex-col gap-4 md:w-1/2 items-center md:items-start text-center md:text-left w-full">
				<p className="text-primary-text/80 leading-relaxed text-sm md:text-base font-medium">
					{cert.description}
				</p>

				{cert.certificationImage && (
					<a
						href={cert.certificationImage}
						target="_blank"
						rel="noopener noreferrer"
						// Centered on mobile, aligned to the right edge on desktop
						className="text-brand font-bold md:self-start hover:underline transition-all hover:opacity-80"
					>
						my certification <span aria-hidden="true">→</span>
					</a>
				)}
			</div>
		</div>
	);
}
