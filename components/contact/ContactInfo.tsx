import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const socials = [
	{
		label: "GitHub",
		href: "https://github.com/AlFrancis-Dagaang",
		icon: FaGithub,
	},
	{
		label: "LinkedIn",
		href: "https://linkedin.com/in/yourprofile",
		icon: FaLinkedin,
	},
	{
		label: "Facebook",
		href: "https://facebook.com/yourprofile",
		icon: FaFacebook,
	},
	{
		label: "Instagram",
		href: "https://instagram.com/yourprofile",
		icon: FaInstagram,
	},
];

const contactDetails = [
	{
		label: "dagaang.alfrancis@gmail.com",
		href: "mailto:dagaang.alfrancis@gmail.com",
		icon: MdEmail,
	},
	{
		label: "+63 XXX XXX XXXX",
		href: "tel:+63XXXXXXXXXX",
		icon: MdPhone,
	},
	{
		label: "Manila, Philippines",
		href: null,
		icon: MdLocationOn,
	},
];

export function ContactInfo() {
	return (
		<div className="bg-white border border-[#e5e7eb] p-8 flex flex-col gap-8 h-full">
			{/* Heading */}
			<div>
				<p className="text-[10px] font-bold uppercase tracking-widest text-brand mb-2 font-sans">
					Get in touch
				</p>
				<h2 className="text-2xl font-black uppercase tracking-tighter text-primary-text font-sans">
					Contact Info
				</h2>
				<p className="mt-2 text-sm text-gray-500 font-sans leading-relaxed">
					Feel free to reach out through any of the channels below.
				</p>
			</div>

			{/* Divider */}
			<div className="border-t border-[#e5e7eb]" />

			{/* Contact Details */}
			<div className="flex flex-col gap-4">
				{contactDetails.map((detail) => {
					const Icon = detail.icon;
					return (
						<div key={detail.label} className="flex items-center gap-4">
							<div className="flex h-10 w-10 items-center justify-center border border-[#e5e7eb] bg-surface shrink-0">
								<Icon className="h-4 w-4 text-brand" aria-hidden="true" />
							</div>
							<div className="flex flex-col min-w-0">
								<p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 font-sans">
									{detail.icon === MdEmail
										? "Email"
										: detail.icon === MdPhone
											? "Phone"
											: "Location"}
								</p>
								{detail.href ? (
									<a
										href={detail.href}
										className="text-sm text-primary-text font-sans hover:text-brand transition-colors truncate"
									>
										{detail.label}
									</a>
								) : (
									<span className="text-sm text-primary-text font-sans">
										{detail.label}
									</span>
								)}
							</div>
						</div>
					);
				})}
			</div>

			{/* Divider */}
			<div className="border-t border-[#e5e7eb]" />

			{/* Socials */}
			<div>
				<p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 font-sans">
					Find me on
				</p>
				<div className="flex items-center gap-2">
					{socials.map((social) => {
						const Icon = social.icon;
						return (
							<a
								key={social.label}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={social.label}
								className="flex h-10 w-10 items-center justify-center border border-[#e5e7eb] bg-surface hover:border-brand hover:text-brand hover:bg-white transition-colors text-primary-text"
							>
								<Icon className="h-4 w-4" aria-hidden="true" />
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}
