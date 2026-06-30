"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/actions/contact";
import type { ContactFormState } from "@/types/contact";
import { SubmitButton } from "./SubmitButton";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
	const [state, action] = useActionState(submitContactForm, initialState);

	return (
		<div className="bg-white/70 border border-[#e5e7eb] p-8 h-full flex flex-col">
			<form action={action} className="flex flex-col gap-6 h-full">
				<div>
					<label
						htmlFor="name"
						className="block text-sm font-medium text-primary-text mb-2 font-sans"
					>
						Name
					</label>
					<input
						id="name"
						name="name"
						type="text"
						required
						className="w-full border border-gray-300 px-4 py-3 text-sm font-sans focus:outline-none focus:border-brand"
					/>
				</div>

				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium text-primary-text mb-2 font-sans"
					>
						Email
					</label>
					<input
						id="email"
						name="email"
						type="email"
						required
						className="w-full border border-gray-300 px-4 py-3 text-sm font-sans focus:outline-none focus:border-brand"
					/>
				</div>

				<div className="flex-1 flex flex-col">
					<label
						htmlFor="message"
						className="block text-sm font-medium text-primary-text mb-2 font-sans"
					>
						Message
					</label>
					<textarea
						id="message"
						name="message"
						required
						className="w-full flex-1 border border-gray-300 px-4 py-3 text-sm font-sans focus:outline-none focus:border-brand resize-none"
					/>
				</div>

				<SubmitButton />

				{state.status === "success" && (
					<p className="text-sm font-medium text-green-600 font-sans">
						{state.message}
					</p>
				)}

				{state.status === "error" && (
					<p className="text-sm font-medium text-red-600 font-sans">
						{state.message}
					</p>
				)}
			</form>
		</div>
	);
}
