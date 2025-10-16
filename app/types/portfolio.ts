export interface Project {
	id: number;
	slug: string;
	title: string;
	description: string;
	image: string;
	tags: string[];
	githubUrl: string;
	liveUrl?: string; // Optionnel
	featured: boolean;
}
