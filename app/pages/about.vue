<template>
	<div>
		<!-- Hero Section avec Image Illustrative -->
		<div class="relative h-96 lg:h-[500px] overflow-hidden">
			<NuxtImg
				src="/illustration-projects.jpg"
				alt="Illustration projets"
				class="w-full h-full object-cover"
				format="webp" />
			<div
				class="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/80 to-transparent" />
			<div class="absolute inset-0 flex items-center justify-center">
				<UContainer class="text-center text-white">
					<UBadge
						label="Portfolio"
						variant="subtle"
						size="lg"
						class="mb-4 bg-emerald-800/90 text-emerald-50 backdrop-blur-sm border-emerald-700" />
					<h1 class="text-4xl lg:text-6xl font-bold mb-4 tracking-tight">
						Tous mes Projets
					</h1>
					<p
						class="text-xl lg:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto">
						Une sélection de travaux personnels et professionnels qui illustrent
						mes compétences et ma passion pour le développement web
					</p>

					<!-- Boutons de filtrage -->
					<div class="flex flex-wrap justify-center gap-3 mb-8">
						<UButton
							v-for="filter in filters"
							:key="filter.value"
							:variant="activeFilter === filter.value ? 'solid' : 'outline'"
							:color="activeFilter === filter.value ? 'white' : 'emerald'"
							size="sm"
							@click="activeFilter = filter.value"
							class="border-white/30 text-white hover:bg-white hover:text-emerald-900">
							{{ filter.label }}
						</UButton>
					</div>
				</UContainer>
			</div>
		</div>

		<UContainer class="py-16">
			<!-- Section Statistiques -->
			<div class="mb-16">
				<div
					class="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-2xl p-8 shadow-sm border border-emerald-200 dark:border-emerald-700">
					<div class="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
						<div>
							<div
								class="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
								{{ filteredProjects.length }}
							</div>
							<div class="text-emerald-700 dark:text-emerald-300">
								Projets réalisés
							</div>
						</div>
						<div>
							<div
								class="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
								{{ uniqueTechnologies.length }}
							</div>
							<div class="text-emerald-700 dark:text-emerald-300">
								Technologies utilisées
							</div>
						</div>
						<div>
							<div
								class="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
								{{ clientProjects.length }}
							</div>
							<div class="text-emerald-700 dark:text-emerald-300">
								Clients satisfaits
							</div>
						</div>
						<div>
							<div
								class="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
								{{ openSourceProjects.length }}
							</div>
							<div class="text-emerald-700 dark:text-emerald-300">
								Projets open source
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Grille de Projets -->
			<div class="mb-12">
				<div v-if="filteredProjects.length === 0" class="text-center py-12">
					<Icon
						name="i-heroicons-folder-open"
						class="w-16 h-16 text-emerald-300 dark:text-emerald-600 mx-auto mb-4" />
					<p class="text-emerald-700 dark:text-emerald-300 text-lg">
						Aucun projet trouvé pour cette catégorie
					</p>
				</div>

				<div
					v-else
					class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<UCard
						v-for="project in filteredProjects"
						:key="project.id"
						class="group overflow-hidden shadow-sm border-emerald-200 dark:border-emerald-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
						<!-- Image du projet -->
						<div class="relative h-48 overflow-hidden">
							<NuxtImg
								:src="project.image"
								:alt="project.title"
								class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
								format="webp" />
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

							<!-- Badges de technologies -->
							<div class="absolute top-3 right-3 flex flex-wrap gap-1">
								<UBadge
									v-for="tech in project.technologies.slice(0, 2)"
									:key="tech"
									size="xs"
									variant="solid"
									class="bg-emerald-600/90 text-white backdrop-blur-sm">
									{{ tech }}
								</UBadge>
							</div>
						</div>

						<template #header>
							<div class="flex items-start justify-between">
								<div>
									<h3
										class="text-lg font-bold text-emerald-900 dark:text-emerald-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
										{{ project.title }}
									</h3>
									<p class="text-sm text-emerald-600 dark:text-emerald-400">
										{{ project.category }}
									</p>
								</div>
								<UBadge
									:color="project.status === 'Terminé' ? 'emerald' : 'amber'"
									variant="subtle"
									size="sm">
									{{ project.status }}
								</UBadge>
							</div>
						</template>

						<p class="text-emerald-700 dark:text-emerald-300 mb-4 line-clamp-3">
							{{ project.description }}
						</p>

						<div class="flex flex-wrap gap-2 mb-4">
							<UBadge
								v-for="tech in project.technologies"
								:key="tech"
								size="sm"
								variant="soft"
								color="emerald">
								{{ tech }}
							</UBadge>
						</div>

						<template #footer>
							<div class="flex justify-between items-center">
								<div class="flex gap-2">
									<UButton
										v-if="project.demo"
										:to="project.demo"
										target="_blank"
										size="sm"
										variant="outline"
										color="emerald"
										icon="i-heroicons-eye">
										Demo
									</UButton>
									<UButton
										v-if="project.github"
										:to="project.github"
										target="_blank"
										size="sm"
										variant="outline"
										color="emerald"
										icon="i-simple-icons-github">
										Code
									</UButton>
								</div>
								<UButton
									:to="`/projects/${project.slug}`"
									size="sm"
									color="emerald"
									variant="ghost"
									icon="i-heroicons-arrow-right">
									Détails
								</UButton>
							</div>
						</template>
					</UCard>
				</div>
			</div>

			<!-- Section Technologies -->
			<div class="mb-16">
				<div class="text-center mb-8">
					<h2
						class="text-2xl font-bold mb-4 text-emerald-900 dark:text-emerald-100">
						Technologies utilisées
					</h2>
					<p class="text-emerald-700 dark:text-emerald-300">
						Les principales technologies avec lesquelles je travaille
					</p>
				</div>

				<div class="flex flex-wrap gap-3 justify-center">
					<UBadge
						v-for="tech in uniqueTechnologies"
						:key="tech"
						size="lg"
						variant="soft"
						color="emerald"
						class="hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors">
						{{ tech }}
					</UBadge>
				</div>
			</div>

			<!-- CTA Final -->
			<UCard
				class="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg border-0">
				<div class="text-center py-12">
					<h2 class="text-3xl font-bold mb-4">
						Intéressé par une collaboration ?
					</h2>
					<p class="text-emerald-100 mb-8 max-w-2xl mx-auto">
						Je suis toujours ouvert à discuter de nouveaux projets et idées
						créatives. N'hésitez pas à me contacter pour transformer vos idées
						en réalité !
					</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<UButton
							to="/contact"
							variant="solid"
							color="white"
							size="lg"
							icon="i-heroicons-envelope"
							class="justify-center text-emerald-700 hover:text-emerald-800">
							Me contacter
						</UButton>
						<UButton
							to="/about"
							variant="outline"
							color="white"
							size="lg"
							icon="i-heroicons-user"
							class="justify-center">
							En savoir plus
						</UButton>
					</div>
				</div>
			</UCard>
		</UContainer>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { projects } from "~/data/projects";

// État pour le filtrage
const activeFilter = ref("all");

// Filtres disponibles - Removed 'mobile' since no mobile projects
const filters = [
	{ label: "Tous", value: "all" },
	{ label: "Web", value: "web" },
	{ label: "Design", value: "design" },
	{ label: "Open Source", value: "opensource" },
];

// Projets filtrés
const filteredProjects = computed(() => {
	if (activeFilter.value === "all") {
		return projects;
	}
	return projects.filter(
		(project) =>
			project.category.toLowerCase().includes(activeFilter.value) ||
			project.tags?.includes(activeFilter.value)
	);
});

// Statistiques calculées
const clientProjects = computed(() =>
	projects.filter((p) => p.type === "client")
);

const openSourceProjects = computed(() =>
	projects.filter((p) => p.type === "opensource")
);

const uniqueTechnologies = computed(() => {
	const techs = new Set<string>();
	projects.forEach((project) => {
		project.technologies?.forEach((tech) => techs.add(tech));
	});
	return Array.from(techs);
});

// SEO
useHead({
	title: "Projets - NDILBE DOUVIC",
	meta: [
		{
			name: "description",
			content:
				"Découvrez l'ensemble de mes projets réalisés avec passion et expertise. Développeur Full-Stack spécialisé en Laravel, Vue.js, Nuxt, Angular, Spring Boot.",
		},
	],
});
</script>
