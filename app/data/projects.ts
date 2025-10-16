// app/data/projects.ts

import type { Project } from '~/types/portfolio';

export const projects: Project[] = [
  {
    id: 1,
    slug: 'projet-ecommerce-revolutionnaire',
    title: 'Boutique E-Commerce Révolutionnaire',
    description: 'Une plateforme de vente en ligne complète avec panier, paiement Stripe et tableau de bord admin, construite avec Nuxt 3 et une architecture headless.',
    image: 'https://picsum.photos/seed/ecommerce/600/400.jpg',
    tags: ['Nuxt 3', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    githubUrl: 'https://github.com/VOTRE_PSEUDO/ecommerce-revolutionnaire',
    liveUrl: 'https://ecommerce-revolutionnaire.com',
    featured: true,
  },
  {
    id: 2,
    slug: 'app-de-gestion-de-taches',
    title: 'App de Gestion de Taches Kanban',
    description: 'Une application collaborative pour gérer des projets avec une interface glisser-déposer, temps réel et authentification utilisateur.',
    image: 'https://picsum.photos/seed/kanban/600/400.jpg',
    tags: ['Vue 3', 'Pinia', 'Supabase', 'Drag & Drop'],
    githubUrl: 'https://github.com/VOTRE_PSEUDO/kanban-app',
    featured: true,
  },
  {
    id: 3,
    slug: 'portfolio-creatif-3d',
    title: 'Portfolio Créatif avec Three.js',
    description: 'Un portfolio interactif mettant en scène des expériences 3D immersives pour présenter des travaux créatifs de manière unique.',
    image: 'https://picsum.photos/seed/portfolio3d/600/400.jpg',
    tags: ['Three.js', 'React', 'GSAP', 'WebGL'],
    githubUrl: 'https://github.com/VOTRE_PSEUDO/portfolio-3d',
    featured: false,
  },
];