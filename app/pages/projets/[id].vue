<template>
	<div>
		<!-- Hero Section avec parallaxe et effets modernes -->
		<div class="relative h-[400px] md:h-[500px] overflow-hidden">
			<!-- Image de fond avec effet de parallaxe -->
			<div class="absolute inset-0">
				<NuxtImg
					v-if="project"
					:src="project.image"
					:alt="project.title"
					class="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
					format="webp"
					loading="lazy" />
			</div>

			<!-- Overlay avec dégradé amélioré -->
			<div
				class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

			<!-- Particules flottantes pour l'effet dynamique -->
			<div class="absolute inset-0 overflow-hidden">
				<div
					v-for="i in 15"
					:key="i"
					class="absolute bg-white rounded-full opacity-20 animate-float"
					:style="{
						width: Math.random() * 4 + 1 + 'px',
						height: Math.random() * 4 + 1 + 'px',
						left: Math.random() * 100 + '%',
						top: Math.random() * 100 + '%',
						animationDelay: Math.random() * 20 + 's',
						animationDuration: Math.random() * 20 + 10 + 's',
					}"></div>
			</div>

			<!-- Contenu du hero -->
			<div class="absolute inset-0 flex items-center justify-center">
				<UContainer class="text-center text-white relative z-10">
					<!-- Breadcrumb navigation -->
					<nav class="mb-4 animate-fade-in">
						<ol class="flex items-center justify-center space-x-2 text-sm">
							<li>
								<NuxtLink
									to="/"
									class="text-gray-300 hover:text-white transition-colors">
									Accueil
								</NuxtLink>
							</li>
							<li class="text-gray-400">/</li>
							<li>
								<NuxtLink
									to="/projects"
									class="text-gray-300 hover:text-white transition-colors">
									Projets
								</NuxtLink>
							</li>
							<li class="text-gray-400">/</li>
							<li class="text-white">{{ project?.title }}</li>
						</ol>
					</nav>

					<h1
						v-if="project"
						class="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-slide-up">
						{{ project.title }}
					</h1>
					<p
						v-if="project"
						class="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6 animate-slide-up animation-delay-200">
						{{ project.description.slice(0, 100) + "..." }}
					</p>
					<div
						class="flex justify-center gap-4 animate-slide-up animation-delay-400">
						<UButton
							v-if="project?.github"
							:to="project.github"
							icon="i-simple-icons-github"
							variant="solid"
							color="gray"
							size="lg"
							target="_blank"
							rel="noopener noreferrer"
							class="hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
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
							class="hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105">
							Voir le site
						</UButton>
					</div>
				</UContainer>
			</div>

			<!-- Indicateur de défilement -->
			<div
				class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
				<Icon name="i-heroicons-chevron-down" class="w-8 h-8" />
			</div>
		</div>

		<!-- Main Content -->
		<UContainer class="py-16">
			<!-- Back Button avec design moderne -->
			<div class="mb-8">
				<NuxtLink to="/projects" class="inline-flex items-center group">
					<div
						class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mr-3 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors">
						<Icon
							name="i-heroicons-arrow-left"
							class="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
					</div>
					<span
						class="text-gray-600 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
						Retour aux projets
					</span>
				</NuxtLink>
			</div>

			<template v-if="project">
				<!-- Project Overview avec design moderne -->
				<section class="mb-16">
					<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
						<!-- Main content -->
						<div class="lg:col-span-2 space-y-8">
							<!-- About Section -->
							<div class="animate-fade-in">
								<h2
									class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
									<Icon
										name="i-heroicons-information-circle"
										class="w-8 h-8 mr-2 text-emerald-500" />
									À propos de ce projet
								</h2>
								<UCard
									class="bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/30 dark:to-gray-800 shadow-lg border border-emerald-200 dark:border-emerald-700 hover:shadow-xl transition-all duration-300">
									<p
										class="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
										{{ project.description }}
									</p>
								</UCard>
							</div>

							<!-- Project Gallery -->
							<div class="animate-fade-in animation-delay-200">
								<h2
									class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
									<Icon
										name="i-heroicons-photo"
										class="w-8 h-8 mr-2 text-emerald-500" />
									Galerie du projet
								</h2>
								<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div
										v-for="i in 4"
										:key="i"
										class="relative group overflow-hidden rounded-lg">
										<NuxtImg
											:src="project.image"
											:alt="`${project.title} - Image ${i}`"
											class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
											format="webp" />
										<div
											class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
											<Icon
												name="i-heroicons-magnifying-glass"
												class="w-8 h-8 text-white" />
										</div>
									</div>
								</div>
							</div>

							<!-- Technologies -->
							<div class="animate-fade-in animation-delay-400">
								<h2
									class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
									<Icon
										name="i-heroicons-code-bracket"
										class="w-8 h-8 mr-2 text-emerald-500" />
									Technologies utilisées
								</h2>
								<div
									class="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-700">
									<div class="flex flex-wrap gap-3">
										<UBadge
											v-for="tech in project.technologies"
											:key="tech"
											color="emerald"
											variant="solid"
											size="lg"
											class="hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105">
											{{ tech }}
										</UBadge>
									</div>
								</div>
							</div>
						</div>

						<!-- Sidebar -->
						<div class="space-y-8">
							<!-- Project Details -->
							<div class="animate-fade-in animation-delay-200">
								<h3
									class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
									<Icon
										name="i-heroicons-clipboard-document-list"
										class="w-6 h-6 mr-2 text-emerald-500" />
									Détails du projet
								</h3>
								<UCard
									class="shadow-md border-emerald-200 dark:border-emerald-700">
									<div class="space-y-4">
										<div
											v-for="(value, key) in generalDetails"
											:key="key"
											class="pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
											<dt
												class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
												{{ key }}
											</dt>
											<dd class="text-gray-900 dark:text-white font-medium">
												{{ value }}
											</dd>
										</div>
									</div>
								</UCard>
							</div>

							<!-- Tags -->
							<div class="animate-fade-in animation-delay-400">
								<h3
									class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
									<Icon
										name="i-heroicons-tag"
										class="w-6 h-6 mr-2 text-emerald-500" />
									Tags
								</h3>
								<UCard
									class="shadow-md border-emerald-200 dark:border-emerald-700">
									<div class="flex flex-wrap gap-2">
										<UBadge
											v-for="tag in project.tags"
											:key="tag"
											color="gray"
											variant="outline"
											size="md"
											class="hover:border-emerald-500 transition-all duration-300">
											{{ tag }}
										</UBadge>
									</div>
								</UCard>
							</div>

							<!-- Share Project -->
							<div class="animate-fade-in animation-delay-600">
								<h3
									class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
									<Icon
										name="i-heroicons-share"
										class="w-6 h-6 mr-2 text-emerald-500" />
									Partager ce projet
								</h3>
								<UCard
									class="shadow-md border-emerald-200 dark:border-emerald-700">
									<div class="flex justify-center space-x-3">
										<UButton
											icon="i-simple-icons-twitter"
											variant="ghost"
											color="gray"
											size="lg"
											class="hover:text-blue-400 transition-colors" />
										<UButton
											icon="i-simple-icons-linkedin"
											variant="ghost"
											color="gray"
											size="lg"
											class="hover:text-blue-600 transition-colors" />
										<UButton
											icon="i-simple-icons-facebook"
											variant="ghost"
											color="gray"
											size="lg"
											class="hover:text-blue-500 transition-colors" />
										<UButton
											icon="i-heroicons-link"
											variant="ghost"
											color="gray"
											size="lg"
											class="hover:text-emerald-600 transition-colors"
											@click="copyLink" />
									</div>
								</UCard>
							</div>
						</div>
					</div>
				</section>

				<!-- Related Projects -->
				<section class="mb-16">
					<h2
						class="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
						<Icon
							name="i-heroicons-rectangle-stack"
							class="w-8 h-8 mr-2 text-emerald-500" />
						Projets similaires
					</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<UCard
							v-for="relatedProject in relatedProjects"
							:key="relatedProject.id"
							class="group overflow-hidden shadow-sm border-emerald-200 dark:border-emerald-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div class="relative h-48 overflow-hidden">
								<NuxtImg
									:src="relatedProject.image"
									:alt="relatedProject.title"
									class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
									format="webp" />
								<div
									class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</div>
							<div class="p-6">
								<h3
									class="text-lg font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-2">
									{{ relatedProject.title }}
								</h3>
								<p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
									{{ relatedProject.description }}
								</p>
								<NuxtLink :to="`/projects/${relatedProject.id}`">
									<UButton
										size="sm"
										color="emerald"
										variant="ghost"
										icon="i-heroicons-arrow-right"
										trailing
										class="transform hover:scale-105 transition-transform">
										Voir les détails
									</UButton>
								</NuxtLink>
							</div>
						</UCard>
					</div>
				</section>

				<!-- CTA Section -->
				<section class="mb-16">
					<UCard
						class="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg border-0">
						<div class="text-center py-12">
							<h2 class="text-3xl font-bold mb-4">Intéressé par ce projet ?</h2>
							<p class="text-emerald-100 mb-8 max-w-2xl mx-auto">
								Je suis disponible pour discuter de ce projet ou d'autres
								collaborations. N'hésitez pas à me contacter pour en savoir plus
								!
							</p>
							<div class="flex flex-col sm:flex-row gap-4 justify-center">
								<UButton
									to="/contact"
									variant="solid"
									color="white"
									size="lg"
									icon="i-heroicons-envelope"
									class="justify-center text-emerald-700 hover:text-emerald-800 transform hover:scale-105 transition-all duration-300">
									Me contacter
								</UButton>
								<UButton
									to="/projects"
									variant="outline"
									color="white"
									size="lg"
									icon="i-heroicons-arrow-left"
									class="justify-center transform hover:scale-105 transition-all duration-300">
									Voir d'autres projets
								</UButton>
							</div>
						</div>
					</UCard>
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

		<!-- Bouton "Retour en haut" -->
		<UButton
			v-show="showScrollTop"
			@click="scrollToTop"
			icon="i-heroicons-arrow-up"
			size="lg"
			color="emerald"
			variant="solid"
			class="fixed bottom-8 right-8 z-50 shadow-lg transform hover:scale-110 transition-transform"
			:ui="{ rounded: 'full' }" />
	</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { findProjectById, projects, type Project } from "~/data/projects";

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

// Related projects (excluding current project)
const relatedProjects = computed(() => {
	if (!project.value) return [];

	return projects
		.filter((p) => p.id !== project.value?.id)
		.filter(
			(p) =>
				p.category === project.value?.category ||
				p.tags.some((tag) => project.value?.tags.includes(tag))
		)
		.slice(0, 3);
});

// State for scroll to top button
const showScrollTop = ref(false);

// Handle 404 if project not found
if (!project.value) {
	throw createError({
		statusCode: 404,
		statusMessage: "Projet non trouvé",
	});
}

// Functions
function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleScroll() {
	showScrollTop.value = window.scrollY > 300;
}

function copyLink() {
	navigator.clipboard.writeText(window.location.href);
	// You could add a toast notification here
}

// Lifecycle hooks
onMounted(() => {
	window.addEventListener("scroll", handleScroll);
});

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
		{
			property: "og:title",
			content: computed(() => project.value?.title || "Projet non trouvé"),
		},
		{
			property: "og:description",
			content: computed(
				() => project.value?.description || "Projet non trouvé"
			),
		},
		{
			property: "og:image",
			content: computed(() => project.value?.image || ""),
		},
		{
			property: "og:url",
			content: computed(() => `https://example.com/projects/${projectId}`),
		},
		{
			name: "twitter:card",
			content: "summary_large_image",
		},
	],
});
</script>

<style scoped>
/* Animation pour les particules flottantes */
@keyframes float {
	0% {
		transform: translateY(0px) translateX(0px);
	}
	50% {
		transform: translateY(-20px) translateX(10px);
	}
	100% {
		transform: translateY(0px) translateX(-10px);
	}
}
.animate-float {
	animation: float 15s infinite ease-in-out;
}

/* Animations d'apparition */
@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
.animate-fade-in {
	animation: fadeIn 0.8s ease-out forwards;
	opacity: 0;
}

@keyframes slideUp {
	0% {
		opacity: 0;
		transform: translateY(30px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}
.animate-slide-up {
	animation: slideUp 0.8s ease-out forwards;
	opacity: 0;
}

.animation-delay-200 {
	animation-delay: 200ms;
}
.animation-delay-400 {
	animation-delay: 400ms;
}
.animation-delay-600 {
	animation-delay: 600ms;
}
</style>
