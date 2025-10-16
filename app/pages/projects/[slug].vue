<template>
	<UContainer v-if="project">
		<div class="py-8">
			<!-- Bouton retour -->
			<UButton
				to="/projects"
				icon="i-heroicons-arrow-left"
				variant="ghost"
				color="gray"
				size="sm"
				class="mb-6">
				Retour aux projets
			</UButton>

			<!-- En-tête du projet -->
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
				<div class="lg:col-span-2">
					<h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
						{{ project.title }}
					</h1>
					<p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
						{{ project.description }}
					</p>
					<div class="flex flex-wrap gap-2 mb-6">
						<UBadge v-for="tag in project.tags" :key="tag" size="sm">
							{{ tag }}
						</UBadge>
					</div>
					<div class="flex gap-4">
						<UButton
							:to="project.githubUrl"
							icon="i-simple-icons-github"
							variant="solid"
							color="gray"
							target="_blank"
							rel="noopener noreferrer">
							Voir le code source
						</UButton>
						<UButton
							v-if="project.liveUrl"
							:to="project.liveUrl"
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
						:src="project.image"
						:alt="project.title"
						class="w-full rounded-lg shadow-lg"
						format="webp" />
				</div>
			</div>

			<!-- Section détails -->
			<UDivider class="my-12" />
			<section>
				<h2 class="text-2xl font-bold mb-4">À propos de ce projet</h2>
				<p class="text-gray-600 dark:text-gray-400 leading-relaxed">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur.
				</p>
				<!-- Ajoutez plus de contenu ici : captures d'écran, explications techniques, etc. -->
			</section>
		</div>
	</UContainer>
</template>

<script setup lang="ts">
import { projects } from "~/data/projects";
import type { Project } from "~/types/portfolio";

const route = useRoute();
const project = computed(
	() =>
		projects.find((p) => p.slug === route.params.slug) as Project | undefined
);

if (!project.value) {
	throw createError({
		statusCode: 404,
		statusMessage: "Projet non trouvé",
	});
}

// SEO dynamique
useHead({
	title: `${project.value.title} - Mon Portfolio`,
	meta: [{ name: "description", content: project.value.description }],
});
</script>
