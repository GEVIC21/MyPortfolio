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
		technologies: ["Laravel", "jQuery", "Bootstrap", "MySQL"],
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
		technologies: ["Laravel", "Inertia.js", "Vue.js", "Tailwind CSS", "MySQL"],
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
	{
		id: "3",
		title: "SchoolApp",
		description:
			"Application de gestion scolaire complète pour les établissements d'enseignement primaire et secondaire. Permet la gestion des élèves, des enseignants, des cours, des notes, des bulletins, des emplois du temps et de la communication avec les parents. Interface moderne et intuitive avec tableau de bord analytique, notifications en temps réel, et module de paiement en ligne pour les frais scolaires.",
		image: "/SchoolApp/1.png",
		technologies: ["Laravel", "Bootstrap", "MySQL", "Jquery"],
		category: "Web",
		status: "Terminé",
		demo: "#",
		github: "#",
		type: "client",
		tags: ["web", "blade", "laravel", "education", "management"],
		year: 2024,
		client: "École Primaire Excellence",
		duration: "5 mois",
		featured: false, // Marqué comme projet phare
	},
	{
		id: "4",
		title: "NewsPortal",
		description:
			"Application de gestion de contenu pour un portail d'actualités. Permet la création, l'édition et la publication d'articles, la gestion des catégories, des auteurs et des commentaires. Interface utilisateur moderne avec fonctionnalités de recherche avancée, filtres par catégorie et système de notifications pour les nouvelles publications.",
		image: "/NewsPortal/8.png",
		technologies: ["Laravel", "Livewire", "Bootstrap", "MySQL"],
		category: "Web",
		status: "Terminé",
		demo: "#",
		github: "#",
		type: "client",
		tags: ["web", "blade", "laravel", "actualité", "management"],
		year: 2024,
		client: "DailyNews",
		duration: "5 mois",
		featured: false, // Marqué comme projet phare
	},
	{
		id: "5",
		title: "SIGEM DGI",
		description:
			"Application de gestion de matériel, équipements et consomables pour la Direction Générale des Impôts du TCHAD. Permet la gestion des équipements, des stocks, des demandes d'achat et des inventaires. Interface utilisateur intuitive avec fonctionnalités de suivi en temps réel, rapports détaillés et notifications automatiques pour les renouvellements de matériel.",
		image: "/SYGEM/1.png",
		technologies: ["SpringBoot api", "Angular 19", "Bootstrap", "PostgreSQL"],
		category: "Web",
		status: "en cours",
		demo: "#",
		github: "#",
		type: "client",
		tags: ["web", "springboot", "angular", "impôt", ",equipement"],
		year: 2025,
		client: "Direction Générale des Impôts - TCHAD",
		duration: "5 mois",
		featured: true, // Marqué comme projet phare
	},
	{
		id: "6",
		title: "MaktabaNa",
		description:
			"Application de gestion et partage de documents éducatifs pour les établissements scolaires. Permet aux enseignants de télécharger, organiser et partager des ressources pédagogiques avec leurs élèves. Interface utilisateur moderne avec fonctionnalités de recherche avancée, filtres par matière et niveau scolaire, et système de notifications pour les nouvelles ressources publiées.",
		image: "/MaktabNa/1.png",
		technologies: ["Laravel api", "Nuxt 4", "Tailwind css", "MySQL"],
		category: "Web",
		status: "en cours",
		demo: "#",
		github: "#",
		type: "client",
		tags: ["web", "laravel", "nuxt", "vue", ",documents"],
		year: 2025,
		client: "MaktabaNa",
		duration: "en cours",
		featured: false, // Marqué comme projet phare
	},
];

// Fonction utilitaire pour trouver un projet par son ID
export function findProjectById(id: string): Project | undefined {
	return projects.find((p) => p.id === id);
}
