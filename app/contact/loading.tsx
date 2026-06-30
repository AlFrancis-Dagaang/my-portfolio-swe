// app/contact/loading.tsx
import { Container } from "@/components/layout/Container";

export default function ContactLoading() {
	return (
		<section className="py-16 md:py-24 border-t border-[#e5e7eb] bg-transparent animate-pulse">
			<Container>
				{/* 1. HEADER SKELETON */}
				<div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-2 md:gap-6 mb-4">
					<div className="h-1 w-16 md:w-24 bg-gray-300 rounded" />
					<div className="h-10 md:h-12 w-64 md:w-80 bg-gray-300 rounded-lg" />
				</div>
				<div className="h-5 w-full max-w-lg bg-gray-300 rounded mb-10" />

				{/* 2. MAIN GRID SKELETON */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* LEFT: Contact Form Skeleton (span 2) */}
					<div className="md:col-span-2 bg-white/70 border border-[#e5e7eb] p-8 h-full flex flex-col gap-6">
						{/* Name Input */}
						<div>
							<div className="h-4 w-12 bg-gray-300 rounded mb-2" />
							<div className="h-11.5 w-full bg-gray-300 border border-gray-200" />
						</div>

						{/* Email Input */}
						<div>
							<div className="h-4 w-12 bg-gray-300 rounded mb-2" />
							<div className="h-11.5 w-full bg-gray-300 border border-gray-200" />
						</div>

						{/* Message Textarea */}
						<div className="flex-1 flex flex-col min-h-37.5">
							<div className="h-4 w-20 bg-gray-300 rounded mb-2" />
							<div className="flex-1 w-full bg-gray-300 border border-gray-200 min-h-30" />
						</div>

						{/* Submit Button */}
						<div className="h-11.5 w-32 bg-gray-300 rounded mt-auto" />
					</div>

					{/* RIGHT: Contact Info Skeleton (span 1) */}
					<div className="md:col-span-1 bg-white/70 border border-[#e5e7eb] p-8 flex flex-col gap-8 h-full">
						{/* Heading */}
						<div>
							<div className="h-3 w-24 bg-gray-300 rounded mb-2" />
							<div className="h-8 w-40 bg-gray-300 rounded mb-3" />
							<div className="space-y-2">
								<div className="h-3 w-full bg-gray-300 rounded" />
								<div className="h-3 w-4/5 bg-gray-300 rounded" />
							</div>
						</div>

						{/* Divider */}
						<div className="border-t border-[#e5e7eb]" />

						{/* Contact Details List */}
						<div className="flex flex-col gap-4">
							{[1, 2, 3].map((i) => (
								<div key={i} className="flex items-center gap-4">
									{/* Icon Box */}
									<div className="h-10 w-10 bg-gray-300 shrink-0 border border-gray-200" />
									{/* Text Lines */}
									<div className="flex flex-col gap-1.5 w-full">
										<div className="h-3 w-16 bg-gray-300 rounded" />
										<div className="h-4 w-3/4 bg-gray-300 rounded" />
									</div>
								</div>
							))}
						</div>

						{/* Divider */}
						<div className="border-t border-[#e5e7eb]" />

						{/* Socials */}
						<div>
							<div className="h-3 w-24 bg-gray-300 rounded mb-4" />
							<div className="flex items-center gap-2">
								{[1, 2, 3, 4].map((i) => (
									<div
										key={i}
										className="h-10 w-10 bg-gray-300 shrink-0 border border-gray-200"
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
