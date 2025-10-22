<template>
	<div>
		<!-- Hero Section -->
		<div class="relative h-[400px] md:h-[500px] overflow-hidden">
			<NuxtImg
				v-if="project"
				:src="project.image"
				:alt="project.title"
				class="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
				format="webp"
				loading="lazy" />
			<div
				class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
			<div class="absolute inset-0 flex items-center justify-center">
				<UContainer class="text-center text-white">
					<h1
						v-if="project"
						class="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-fade-in">
						{{ project.title }}
					</h1>
					<p
						v-if="project"
						class="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6 animate-fade-in-up">
						{{ project.description.slice(0, 100) + "..." }}
					</p>
					<div class="flex justify-center gap-4 animate-fade-in-up">
						<UButton
							v-if="project?.github"
							:to="project.github"
							icon="i-simple-icons-github"
							variant="solid"
							color="gray"
							size="lg"
							target="_blank"
							rel="noopener noreferrer"
							class="hover:bg-gray-700 transition-colors">
							Voir le code
						</UButton>
						<UButton
							v-if="project?.demo"
							:to="project.demo"
							icon="i-heroicons-arrow-top-right-on-square"
							variant="solid"
							color="emerald"
							size="lg"
							target="_blank"
							rel="noopener noreferrer"
							class="hover:bg-emerald-600 transition-colors">
							Voir le site
						</UButton>
					</div>
				</UContainer>
			</div>
		</div>

		<!-- Main Content -->
		<UContainer class="py-12">
			<!-- Back Button -->
			<NuxtLink to="/projects">
				<UButton
					icon="i-heroicons-arrow-left"
					variant="ghost"
					color="gray"
					size="sm"
					class="mb-8 hover:text-emerald-600 transition-colors">
					Retour aux projets
				</UButton>
			</NuxtLink>

			<template v-if="project">
				<!-- About Section -->
				<section class="mb-12">
					<h2
						class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
						<Icon name="i-heroicons-information-circle" class="w-8 h-8 mr-2" />
						À propos de ce projet
					</h2>
					<UCard
						class="bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/30 dark:to-gray-800 shadow-lg border border-emerald-200 dark:border-emerald-700">
						<p class="text-gray-600 dark:text-gray-300 leading-relaxed">
							{{ project.description }}
						</p>
					</UCard>
				</section>

				<UDivider class="my-12" />

				<!-- General Details -->
				<section class="mb-12">
					<h2
						class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
						<Icon
							name="i-heroicons-clipboard-document-list"
							class="w-8 h-8 mr-2" />
						Détails généraux
					</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<UCard
							v-for="(value, key) in generalDetails"
							:key="key"
							class="shadow-sm hover:shadow-md transition-shadow border-emerald-200 dark:border-emerald-700">
							<template #header>
								<dt class="font-semibold text-gray-900 dark:text-white">
									{{ key }}
								</dt>
							</template>
							<dd class="text-gray-600 dark:text-gray-300">
								{{ value }}
							</dd>
						</UCard>
					</div>
				</section>

				<UDivider class="my-12" />

				<!-- Technologies -->
				<section class="mb-12">
					<h2
						class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
						<Icon name="i-heroicons-code-bracket" class="w-8 h-8 mr-2" />
						Technologies utilisées
					</h2>
					<div class="flex flex-wrap gap-3">
						<UBadge
							v-for="tech in project.technologies"
							:key="tech"
							color="emerald"
							variant="solid"
							size="lg"
							class="hover:bg-emerald-600 transition-colors">
							{{ tech }}
						</UBadge>
					</div>
				</section>

				<!-- Tags -->
				<section class="mb-12">
					<h2
						class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
						<Icon name="i-heroicons-tag" class="w-8 h-8 mr-2" />
						Tags
					</h2>
					<div class="flex flex-wrap gap-3">
						<UBadge
							v-for="tag in project.tags"
							:key="tag"
							color="gray"
							variant="outline"
							size="md"
							class="hover:border-emerald-500 transition-colors">
							{{ tag }}
						</UBadge>
					</div>
				</section>
			</template>
			<template v-else>
				<div class="text-center py-12">
					<Icon
						name="i-heroicons-exclamation-circle"
						class="w-16 h-16 text-red-500 mx-auto mb-4 animate-pulse" />
					<p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
						Projet non trouvé
					</p>
					<NuxtLink to="/projects">
						<UButton
							variant="solid"
							color="emerald"
							size="lg"
							icon="i-heroicons-arrow-left"
							class="hover:bg-emerald-600 transition-colors">
							Retour aux projets
						</UButton>
					</NuxtLink>
				</div>
			</template>
		</UContainer>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { findProjectById, type Project } from "~/data/projects";

// Get project ID from route
const route = useRoute();
const projectId = Array.isArray(route.params.id)
	? route.params.id[0]
	: route.params.id;

// Fetch project data
const project = computed(() => findProjectById(String(projectId)));

// General details for display
const generalDetails = computed(() =>
	project.value
		? {
				Catégorie: project.value.category,
				Statut: project.value.status,
				Type: project.value.type,
				Année: project.value.year,
				...(project.value.client && { Client: project.value.client }),
				...(project.value.duration && { Durée: project.value.duration }),
		  }
		: {}
);

// Handle 404 if project not found
if (!project.value) {
	throw createError({
		statusCode: 404,
		statusMessage: "Projet non trouvé",
	});
}

// SEO
useHead({
	title: computed(() =>
		project.value
			? `${project.value.title} - Mon Portfolio`
			: "Projet non trouvé"
	),
	meta: [
		{
			name: "description",
			content: computed(
				() => project.value?.description || "Projet non trouvé"
			),
		},
	],
});
</script>

<style scoped>
/* Tailwind CSS animations */
.animate-fade-in {
	animation: fadeIn 1s ease-in-out;
}
.animate-fade-in-up {
	animation: fadeInUp 1s ease-in-out;
}
@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
@keyframes fadeInUp {
	0% {
		opacity: 0;
		transform: translateY(20px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
