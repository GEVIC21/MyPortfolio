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
    type: 'client' | 'personal' | 'opensource';
    tags: string[];
    year: number;
    client?: string;
    duration?: string;
}

export const projects: Project[] = [
    {
        id: "1",
        title: "Plateforme E-Commerce Tchad",
        description: "Développement complet d'une plateforme e-commerce pour les artisans locaux tchadiens avec système de paiement intégré, gestion des stocks et interface d'administration moderne.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
        technologies: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL", "Stripe"],
        category: "Web",
        status: "Terminé",
        demo: "https://demo-ecommerce-tchad.com",
        github: "https://github.com/ndilbe/ecommerce-tchad",
        type: "client",
        tags: ["web", "ecommerce"],
        year: 2024,
        client: "Artisans du Tchad",
        duration: "3 mois"
    },
    {
        id: "2",
        title: "Application Mobile Santé+",
        description: "Application mobile pour la prise de rendez-vous médicaux au Tchad. Intègre la géolocalisation des centres de santé, notifications push et suivi des dossiers patients.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop",
        technologies: ["React Native", "Node.js", "Express", "MongoDB", "Firebase"],
        category: "Mobile",
        status: "En cours",
        demo: "https://demo-sante-plus.com",
        github: "https://github.com/ndilbe/sante-plus",
        type: "client",
        tags: ["mobile", "health"],
        year: 2024,
        client: "Ministère de la Santé Tchad",
        duration: "6 mois"
    },
    {
        id: "3",
        title: "Système de Gestion Scolaire",
        description: "Plateforme complète de gestion scolaire avec inscription en ligne, suivi des notes, emploi du temps et communication parents-enseignants pour les écoles secondaires.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
        technologies: ["Angular", "Spring Boot", "PostgreSQL", "Docker", "Vercel"],
        category: "Web",
        status: "Terminé",
        demo: "https://demo-gestion-scolaire.com",
        github: "https://github.com/ndilbe/gestion-scolaire",
        type: "client",
        tags: ["web", "education"],
        year: 2023,
        client: "Lycée d Excellence",
        duration: "4 mois"
    },
    {
        id: "4",
        title: "Nuxt CMS Headless",
        description: "Système de gestion de contenu headless construit avec Nuxt 3, offrant une API RESTful flexible et une interface d'administration moderne. Projet open source.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop",
        technologies: ["Nuxt.js", "TypeScript", "Supabase", "Tailwind CSS", "Render"],
        category: "Open Source",
        status: "Terminé",
        demo: "https://nuxt-cms-demo.vercel.app",
        github: "https://github.com/ndilbe/nuxt-cms",
        type: "opensource",
        tags: ["opensource", "cms"],
        year: 2024,
        duration: "2 mois"
    },
    {
        id: "5",
        title: "Dashboard Analytics",
        description: "Tableau de bord analytique en temps réel pour le suivi des métriques business avec graphiques interactifs, exports PDF et notifications personnalisées.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        technologies: ["Vue.js", "Chart.js", "Node.js", "Redis", "Private VPS"],
        category: "Web",
        status: "Terminé",
        demo: "https://demo-analytics.com",
        github: "https://github.com/ndilbe/analytics-dashboard",
        type: "client",
        tags: ["web", "analytics"],
        year: 2023,
        client: "Startup Analytics",
        duration: "2 mois"
    },
    {
        id: "6",
        title: "Portfolio Generator",
        description: "Générateur de portfolios pour développeurs avec templates personnalisables, hébergement automatique et SEO optimisé. Outil no-code pour les créatifs.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop",
        technologies: ["Nuxt.js", "Tailwind CSS", "Vercel", "GSAP", "Cloudinary"],
        category: "Web",
        status: "En cours",
        demo: "https://portfolio-generator.vercel.app",
        github: "https://github.com/ndilbe/portfolio-generator",
        type: "personal",
        tags: ["web", "design", "opensource"],
        year: 2024,
        duration: "1 mois"
    },
    {
        id: "7",
        title: "API REST Livraisons",
        description: "API RESTful pour service de livraison avec géolocalisation en temps réel, suivi des commandes, intégration paiement mobile et système de notation.",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=400&fit=crop",
        technologies: ["Node.js", "Express", "MongoDB", "JWT", "Render"],
        category: "Web",
        status: "Terminé",
        github: "https://github.com/ndilbe/livraison-api",
        type: "opensource",
        tags: ["opensource", "api"],
        year: 2023,
        duration: "1 mois"
    },
    {
        id: "8",
        title: "Design System UI Kit",
        description: "Bibliothèque de composants UI/UX réutilisable avec documentation interactive, thèmes personnalisables et support TypeScript. Compatible avec Vue 3 et Nuxt 3.",
        image: "https://images.unsplash.com/photo-1545235617-9465d2a47692?w=800&h=400&fit=crop",
        technologies: ["Vue.js", "Storybook", "TypeScript", "Tailwind CSS", "Bootstrap"],
        category: "Design",
        status: "Terminé",
        demo: "https://design-system.vercel.app",
        github: "https://github.com/ndilbe/design-system",
        type: "opensource",
        tags: ["design", "opensource", "ui"],
        year: 2024,
        duration: "2 mois"
    },
    {
        id: "9",
        title: "App de Recettes Cuisine Tchadienne",
        description: "Application mobile pour découvrir et partager des recettes traditionnelles tchadiennes avec mode hors-ligne, favoris et communauté de chefs.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=400&fit=crop",
        technologies: ["React Native", "Firebase", "Redux", "PWA"],
        category: "Mobile",
        status: "En cours",
        demo: "https://cuisine-tchad.vercel.app",
        github: "https://github.com/ndilbe/cuisine-tchad",
        type: "personal",
        tags: ["mobile", "food"],
        year: 2024,
        duration: "Ongoing"
    },
    {
        id: "10",
        title: "Platforme Freelance Tchad",
        description: "Marketplace connectant freelances tchadiens avec des clients locaux et internationaux. Système de propositions, paiements sécurisés et notation.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop",
        technologies: ["Laravel", "Vue.js", "MySQL", "Stripe", "Private VPS"],
        category: "Web",
        status: "Bêta",
        demo: "https://freelance-tchad.com",
        github: "https://github.com/ndilbe/freelance-tchad",
        type: "personal",
        tags: ["web", "freelance"],
        year: 2024,
        duration: "4 mois"
    },
    {
        id: "11",
        title: "Chatbot Support Client",
        description: "Chatbot intelligent avec traitement NLP pour le support client 24/7. Intégration WhatsApp, web chat et analytics des conversations.",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
        technologies: ["Node.js", "OpenAI API", "WebSocket", "MongoDB", "Docker"],
        category: "Web",
        status: "Terminé",
        github: "https://github.com/ndilbe/chatbot-support",
        type: "client",
        tags: ["web", "ai"],
        year: 2023,
        client: "Service Client Pro",
        duration: "2 mois"
    },
    {
        id: "12",
        title: "Portfolio 3D Interactive",
        description: "Portfolio personnel avec animations 3D interactives utilisant Three.js, effets particules et expérience utilisateur immersive.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
        technologies: ["Nuxt.js", "Three.js", "GSAP", "WebGL", "Vercel"],
        category: "Design",
        status: "Terminé",
        demo: "https://portfolio-3d.vercel.app",
        github: "https://github.com/ndilbe/portfolio-3d",
        type: "personal",
        tags: ["design", "3d", "portfolio"],
        year: 2024,
        duration: "1 mois"
    }
];