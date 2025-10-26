export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	technologies: string[];
	category: string;
	status: string;
	demo?: string;
	github?: string;
	type: "client" | "personal" | "opensource";
	tags: string[];
	year: number;
	client?: string;
	duration?: string;
	// Ajout du champ featured pour les projets phares
	featured?: boolean;
}

export const projects: Project[] = [
	{
		id: "1",
		title: "SuiSco Transport",
		description:
			"Application de réservation de transport scolaire dans le Grand Lomé. Offre des services Mutuel, Standard et Premium avec sièges réservés, voitures dédiées, horaires fixes et personnalisés. Avantages incluent véhicules neufs, assurance tous risques, chauffeurs expérimentés et services personnalisés. Tarifs à partir de 40 000 FCFA/mois. Inclut témoignages et promotions.",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7EW3muZKH_3lRCrJiFwofblZ03LwznRiQZw&s",
		technologies: ["Laravel", "Blade", "jQuery", "Bootstrap"],
		category: "Web",
		status: "Terminé",
		demo: "https://transport.suisco.net/",
		type: "client",
		tags: ["web", "laravel", "transport"],
		year: 2024,
		client: "SuiSco",
		duration: "3 mois",
		featured: true, // Marqué comme projet phare
	},
	{
		id: "2",
		title: "Youdoudou Hotel",
		description:
			"Application de gestion et réservation hôtelière permettant la gestion des chambres, des bookings, des clients et des paiements. Développée pour une expérience utilisateur fluide avec interface moderne.",
		image: "/Youdoudou.png",
		technologies: ["Laravel", "Inertia.js", "Vue.js", "Tailwind CSS"],
		category: "Web",
		status: "Terminé",
		demo: "https://hotel-management-system-9qrv.onrender.com/",
		type: "client",
		tags: ["web", "laravel", "vuejs", "hotel"],
		year: 2024,
		client: "Youdoudou Hotel",
		duration: "4 mois",
		featured: true, // Marqué comme projet phare
	},
];

// Fonction utilitaire pour trouver un projet par son ID
export function findProjectById(id: string): Project | undefined {
	return projects.find((p) => p.id === id);
}
