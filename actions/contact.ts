"use server";

import { Resend } from "resend";
import type { ContactFormState } from "@/types/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

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

	try {
		await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>",
			to: "dagaang.alfrancis@gmail.com",
			replyTo: email,
			subject: `New message from ${name}`,
			text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
		});

		return {
			status: "success",
			message: "Message sent! I'll get back to you soon.",
		};
	} catch (error) {
		console.error("Resend error:", error);
		return {
			status: "error",
			message: "Something went wrong. Please try again later.",
		};
	}
}
