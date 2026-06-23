export interface Experience {
	role: string;
	company: string;
	startYear: number;
	endYear: number | null;
	current: boolean;
	details: string[];
}
