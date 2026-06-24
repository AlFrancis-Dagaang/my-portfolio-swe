import Image from "next/image";
import type { Certification } from "@/types/certification";
import { SectionEyebrow } from "./SectionEyebrow";

export function Certifications({
	certifications,
}: {
	certifications: Certification[];
}) {
	return (
		<div className="mb-4">
			<SectionEyebrow>Credentials</SectionEyebrow>
			<h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-primary-text mb-8 font-sans">
				Certifications
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{certifications.map((cert) => (
					<CertCard key={cert.id} cert={cert} />
				))}
			</div>
		</div>
	);
}

function CertCard({ cert }: { cert: Certification }) {
	return (
		<div className="group flex gap-4 p-5 rounded-2xl border border-border-light bg-white/80 hover:border-brand/40 transition-colors duration-200">
			{cert.badgeImage && (
				<div className="shrink-0 w-14 h-14 rounded-xl overflow-hidden border border-border-light bg-white/80 flex items-center justify-center">
					<Image
						src={cert.badgeImage}
						alt={cert.title}
						width={56}
						height={56}
						className="w-full h-full object-contain p-1"
					/>
				</div>
			)}
			<div className="min-w-0 flex flex-col gap-0.5">
				<p className="text-[10px] font-semibold uppercase tracking-widest text-brand font-sans">
					{cert.issuer}
				</p>
				<h3 className="text-sm font-bold text-primary-text font-sans leading-snug">
					{cert.title}
				</h3>
				<p className="text-xs text-muted font-sans">{cert.issuedDate}</p>
				{cert.description && (
					<p className="text-xs text-muted/70 font-sans mt-1.5 leading-relaxed line-clamp-2">
						{cert.description}
					</p>
				)}
			</div>
		</div>
	);
}
