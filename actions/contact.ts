"use server";

import type { ContactFormState } from "@/types/contact";

export async function submitContactForm(
	_prevState: ContactFormState,
	formData: FormData,
): Promise<ContactFormState> {
	const name = formData.get("name") as string;
	const email = formData.get("email") as string;
	const message = formData.get("message") as string;

	// Validate
	if (!name || !email || !message) {
		return { status: "error", message: "All fields are required." };
	}

	// Basic email format check
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		return { status: "error", message: "Please enter a valid email address." };
	}

	// TODO: swap with real email service (Resend) later
	return {
		status: "success",
		message: "Message sent! I'll get back to you soon.",
	};
}
