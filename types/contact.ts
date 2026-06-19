export interface ContactFormState {
	status: "idle" | "success" | "error";
	message?: string;
}
