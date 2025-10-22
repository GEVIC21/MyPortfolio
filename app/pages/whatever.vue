<template>
	<UContainer>
		<div class="py-8">
			<!-- Bouton retour -->
			<NuxtLink to="/projects">
				<UButton
					icon="i-heroicons-arrow-left"
					variant="ghost"
					color="gray"
					size="sm"
					class="mb-6">
					Retour aux projets
				</UButton>
			</NuxtLink>

			<!-- En-tête du projet -->
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
				<div class="lg:col-span-2">
					<h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Whatever Project
					</h1>
					<p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
						This is a test project for demonstration purposes. It showcases a
						static project page with a modern design and various technologies
						used in development.
					</p>
					<div class="flex flex-wrap gap-2 mb-6">
						<UBadge v-for="tag in staticProject.tags" :key="tag" size="sm">
							{{ tag }}
						</UBadge>
					</div>
					<div class="flex gap-4">
						<UButton
							:to="staticProject.github"
							icon="i-simple-icons-github"
							variant="solid"
							color="gray"
							target="_blank"
							rel="noopener noreferrer">
							Voir le code source
						</UButton>
						<UButton
							:to="staticProject.demo"
							icon="i-heroicons-arrow-top-right-on-square"
							variant="solid"
							color="primary"
							target="_blank"
							rel="noopener noreferrer">
							Voir le site en live
						</UButton>
					</div>
				</div>
				<div>
					<NuxtImg
						:src="staticProject.image"
						:alt="staticProject.title"
						class="w-full rounded-lg shadow-lg"
						format="webp" />
				</div>
			</div>

			<!-- Section détails -->
			<UDivider class="my-12" />
			<section>
				<h2 class="text-2xl font-bold mb-4">À propos de ce projet</h2>
				<p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
					{{ staticProject.description }}
				</p>
			</section>

			<!-- Section Détails Généraux -->
			<section class="mb-12">
				<h2 class="text-2xl font-bold mb-4">Détails généraux</h2>
				<dl class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<dt class="font-semibold text-gray-900 dark:text-white">
							Catégorie
						</dt>
						<dd class="text-gray-600 dark:text-gray-400">
							{{ staticProject.category }}
						</dd>
					</div>
					<div>
						<dt class="font-semibold text-gray-900 dark:text-white">Statut</dt>
						<dd class="text-gray-600 dark:text-gray-400">
							{{ staticProject.status }}
						</dd>
					</div>
					<div>
						<dt class="font-semibold text-gray-900 dark:text-white">Type</dt>
						<dd class="text-gray-600 dark:text-gray-400">
							{{ staticProject.type }}
						</dd>
					</div>
					<div>
						<dt class="font-semibold text-gray-900 dark:text-white">Année</dt>
						<dd class="text-gray-600 dark:text-gray-400">
							{{ staticProject.year }}
						</dd>
					</div>
					<div>
						<dt class="font-semibold text-gray-900 dark:text-white">Client</dt>
						<dd class="text-gray-600 dark:text-gray-400">
							{{ staticProject.client }}
						</dd>
					</div>
					<div>
						<dt class="font-semibold text-gray-900 dark:text-white">Durée</dt>
						<dd class="text-gray-600 dark:text-gray-400">
							{{ staticProject.duration }}
						</dd>
					</div>
				</dl>
			</section>

			<!-- Section Technologies -->
			<section class="mb-12">
				<h2 class="text-2xl font-bold mb-4">Technologies utilisées</h2>
				<div class="flex flex-wrap gap-2">
					<UBadge
						v-for="tech in staticProject.technologies"
						:key="tech"
						color="emerald"
						variant="soft">
						{{ tech }}
					</UBadge>
				</div>
			</section>
		</div>
	</UContainer>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Hardcoded static project data
const staticProject = ref({
	id: "test-1",
	title: "Whatever Project",
	description:
		"This is a test project for demonstration purposes. It showcases a static project page with a modern design and various technologies used in development.",
	image:
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7EW3muZKH_3lRCrJiFwofblZ03LwznRiQZw&s",
	technologies: ["Nuxt", "Vue.js", "Tailwind CSS", "TypeScript"],
	category: "Web",
	status: "Terminé",
	demo: "https://example.com/demo",
	github: "https://github.com/example/whatever-project",
	type: "personal",
	tags: ["web", "portfolio"],
	year: 2025,
	client: "Test Client",
	duration: "2 mois",
});

// SEO dynamique
useHead({
	title: `${staticProject.value.title} - Mon Portfolio`,
	meta: [
		{
			name: "description",
			content: staticProject.value.description,
		},
	],
});
</script>
