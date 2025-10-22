<template>
	<div class="w-full overflow-x-hidden">
		<!-- Hero Section -->
		<HeroSection />

		<!-- Featured Projects Section -->
		<section
			id="projets"
			class="py-20 bg-emerald-50 dark:bg-emerald-900/20 w-full">
			<div class="w-full">
				<div class="text-center mb-12 px-4 sm:px-6 lg:px-8">
					<h2
						class="text-3xl lg:text-4xl font-bold text-emerald-900 dark:text-emerald-100 mb-4">
						Projets en Vedette
					</h2>
					<p
						class="text-lg text-emerald-700 dark:text-emerald-300 max-w-2xl mx-auto">
						Découvrez une sélection de mes travaux les plus récents et dont je
						suis le plus fier
					</p>
				</div>

				<!-- Grille de projets featured -->
				<div
					class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 px-4 sm:px-6 lg:px-8">
					<UCard
						v-for="project in featuredProjects"
						:key="project.id"
						class="group overflow-hidden shadow-sm border-emerald-200 dark:border-emerald-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
						<!-- Image du projet -->
						<div class="relative h-48 overflow-hidden">
							<NuxtImg
								:src="project.image"
								:alt="project.title"
								class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
								format="webp"
								loading="lazy" />
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

						<p class="text-emerald-700 dark:text-emerald-300 mb-4 line-clamp-2">
							{{ project.description }}
						</p>

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
								:to="`/projects/${project.id}`"
								size="sm"
								color="emerald"
								variant="ghost"
								icon="i-heroicons-arrow-right">
								Détails
							</UButton>
						</div>
					</UCard>
				</div>

				<div class="text-center px-4 sm:px-6 lg:px-8">
					<UButton
						to="/projects"
						variant="outline"
						size="lg"
						color="emerald"
						trailing-icon="i-heroicons-squares-2x2"
						class="border-emerald-300 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-600 dark:text-emerald-300 dark:hover:bg-emerald-900/30">
						Voir tous les projets
					</UButton>
				</div>
			</div>
		</section>

		<!-- About Section -->
		<section id="a-propos" class="py-20 bg-white dark:bg-gray-900 w-full">
			<div class="w-full">
				<div
					class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
					<div>
						<h2
							class="text-3xl lg:text-4xl font-bold text-emerald-900 dark:text-emerald-100 mb-6">
							Plus qu'un développeur, un créateur de solutions
						</h2>
						<p
							class="text-lg text-emerald-700 dark:text-emerald-300 mb-6 leading-relaxed">
							Avec une expertise en JavaScript et ses écosystèmes modernes, je
							transforme les idées en expériences web robustes et intuitives.
							Mon approche allie design propre, performance et maintenabilité.
						</p>
						<div class="space-y-4 mb-8">
							<div class="flex items-center gap-3">
								<Icon
									name="i-heroicons-check-circle"
									class="w-5 h-5 text-emerald-600" />
								<span class="text-emerald-800 dark:text-emerald-200"
									>Développement Full-Stack (Vue.js, Nuxt, Laravel, Spring
									Boot)</span
								>
							</div>
							<div class="flex items-center gap-3">
								<Icon
									name="i-heroicons-check-circle"
									class="w-5 h-5 text-emerald-600" />
								<span class="text-emerald-800 dark:text-emerald-200"
									>Déploiement sur Vercel, Render et Private VPS</span
								>
							</div>
							<div class="flex items-center gap-3">
								<Icon
									name="i-heroicons-check-circle"
									class="w-5 h-5 text-emerald-600" />
								<span class="text-emerald-800 dark:text-emerald-200"
									>Design responsive avec Tailwind CSS et Bootstrap</span
								>
							</div>
							<div class="flex items-center gap-3">
								<Icon
									name="i-heroicons-check-circle"
									class="w-5 h-5 text-emerald-600" />
								<span class="text-emerald-800 dark:text-emerald-200"
									>Basé au Tchad, disponible pour des projets
									internationaux</span
								>
							</div>
						</div>
						<UButton
							to="/about"
							variant="solid"
							color="emerald"
							size="lg"
							trailing-icon="i-heroicons-arrow-right"
							class="bg-emerald-600 hover:bg-emerald-700 text-white">
							En savoir plus sur moi
						</UButton>
					</div>
					<div class="relative">
						<div class="grid grid-cols-2 gap-4">
							<div class="space-y-4">
								<NuxtImg
									src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop"
									alt="Code 1"
									class="rounded-lg shadow-lg w-full"
									format="webp" />
								<NuxtImg
									src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&h=200&fit=crop"
									alt="Code 2"
									class="rounded-lg shadow-lg w-full mt-4"
									format="webp" />
							</div>
							<div class="space-y-4 mt-8">
								<NuxtImg
									src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop"
									alt="Code 3"
									class="rounded-lg shadow-lg w-full"
									format="webp" />
								<NuxtImg
									src="https://images.unsplash.com/photo-1517183324250-764b7ea8b9d0?w=300&h=200&fit=crop"
									alt="Code 4"
									class="rounded-lg shadow-lg w-full mt-4"
									format="webp" />
							</div>
						</div>
						<!-- Élément décoratif -->
						<div
							class="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-20 blur-xl"></div>
						<div
							class="absolute -top-6 -left-6 w-32 h-32 bg-emerald-300 dark:bg-emerald-700 rounded-full opacity-20 blur-xl"></div>
					</div>
				</div>
			</div>
		</section>

		<!-- Skills Section -->
		<section class="py-20 bg-emerald-50 dark:bg-emerald-900/20 w-full">
			<div class="w-full">
				<div class="text-center mb-12 px-4 sm:px-6 lg:px-8">
					<h2
						class="text-3xl lg:text-4xl font-bold text-emerald-900 dark:text-emerald-100 mb-4">
						Mes Compétences Clés
					</h2>
					<p
						class="text-lg text-emerald-700 dark:text-emerald-300 max-w-2xl mx-auto">
						Les technologies que je maîtrise pour créer des applications web
						modernes
					</p>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
					<UCard class="shadow-sm border-emerald-200 dark:border-emerald-700">
						<template #header>
							<div class="flex items-center justify-between">
								<h3
									class="text-xl font-bold text-emerald-900 dark:text-emerald-100">
									Frontend
								</h3>
								<Icon
									name="i-heroicons-device-phone-mobile"
									class="w-8 h-8 text-emerald-500" />
							</div>
						</template>
						<div class="space-y-3">
							<div class="flex items-center justify-between">
								<span class="font-medium text-emerald-800 dark:text-emerald-200"
									>Vue.js / Nuxt</span
								>
								<div class="flex items-center space-x-2">
									<div
										class="w-24 bg-emerald-200 dark:bg-emerald-800 rounded-full h-2">
										<div
											class="bg-emerald-500 h-2 rounded-full"
											style="width: 95%"></div>
									</div>
									<span class="text-sm text-emerald-600 dark:text-emerald-400"
										>95%</span
									>
								</div>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-medium text-emerald-800 dark:text-emerald-200"
									>Angular</span
								>
								<div class="flex items-center space-x-2">
									<div
										class="w-24 bg-emerald-200 dark:bg-emerald-800 rounded-full h-2">
										<div
											class="bg-emerald-500 h-2 rounded-full"
											style="width: 85%"></div>
									</div>
									<span class="text-sm text-emerald-600 dark:text-emerald-400"
										>85%</span
									>
								</div>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-medium text-emerald-800 dark:text-emerald-200"
									>Tailwind CSS</span
								>
								<div class="flex items-center space-x-2">
									<div
										class="w-24 bg-emerald-200 dark:bg-emerald-800 rounded-full h-2">
										<div
											class="bg-emerald-500 h-2 rounded-full"
											style="width: 95%"></div>
									</div>
									<span class="text-sm text-emerald-600 dark:text-emerald-400"
										>95%</span
									>
								</div>
							</div>
						</div>
					</UCard>

					<UCard class="shadow-sm border-emerald-200 dark:border-emerald-700">
						<template #header>
							<div class="flex items-center justify-between">
								<h3
									class="text-xl font-bold text-emerald-900 dark:text-emerald-100">
									Backend
								</h3>
								<Icon
									name="i-heroicons-server"
									class="w-8 h-8 text-emerald-500" />
							</div>
						</template>
						<div class="space-y-3">
							<div class="flex items-center justify-between">
								<span class="font-medium text-emerald-800 dark:text-emerald-200"
									>Laravel</span
								>
								<div class="flex items-center space-x-2">
									<div
										class="w-24 bg-emerald-200 dark:bg-emerald-800 rounded-full h-2">
										<div
											class="bg-emerald-500 h-2 rounded-full"
											style="width: 92%"></div>
									</div>
									<span class="text-sm text-emerald-600 dark:text-emerald-400"
										>92%</span
									>
								</div>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-medium text-emerald-800 dark:text-emerald-200"
									>Spring Boot</span
								>
								<div class="flex items-center space-x-2">
									<div
										class="w-24 bg-emerald-200 dark:bg-emerald-800 rounded-full h-2">
										<div
											class="bg-emerald-500 h-2 rounded-full"
											style="width: 85%"></div>
									</div>
									<span class="text-sm text-emerald-600 dark:text-emerald-400"
										>85%</span
									>
								</div>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-medium text-emerald-800 dark:text-emerald-200"
									>Node.js</span
								>
								<div class="flex items-center space-x-2">
									<div
										class="w-24 bg-emerald-200 dark:bg-emerald-800 rounded-full h-2">
										<div
											class="bg-emerald-500 h-2 rounded-full"
											style="width: 90%"></div>
									</div>
									<span class="text-sm text-emerald-600 dark:text-emerald-400"
										>90%</span
									>
								</div>
							</div>
						</div>
					</UCard>

					<UCard class="shadow-sm border-emerald-200 dark:border-emerald-700">
						<template #header>
							<div class="flex items-center justify-between">
								<h3
									class="text-xl font-bold text-emerald-900 dark:text-emerald-100">
									Déploiement
								</h3>
								<Icon
									name="i-heroicons-cloud"
									class="w-8 h-8 text-emerald-500" />
							</div>
						</template>
						<div class="space-y-3">
							<div class="flex items-center justify-between">
								<span class="font-medium text-emerald-800 dark:text-emerald-200"
									>Vercel</span
								>
								<div class="flex items-center space-x-2">
									<div
										class="w-24 bg-emerald-200 dark:bg-emerald-800 rounded-full h-2">
										<div
											class="bg-emerald-500 h-2 rounded-full"
											style="width: 95%"></div>
									</div>
									<span class="text-sm text-emerald-600 dark:text-emerald-400"
										>95%</span
									>
								</div>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-medium text-emerald-800 dark:text-emerald-200"
									>Render</span
								>
								<div class="flex items-center space-x-2">
									<div
										class="w-24 bg-emerald-200 dark:bg-emerald-800 rounded-full h-2">
										<div
											class="bg-emerald-500 h-2 rounded-full"
											style="width: 90%"></div>
									</div>
									<span class="text-sm text-emerald-600 dark:text-emerald-400"
										>90%</span
									>
								</div>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-medium text-emerald-800 dark:text-emerald-200"
									>Private VPS</span
								>
								<div class="flex items-center space-x-2">
									<div
										class="w-24 bg-emerald-200 dark:bg-emerald-800 rounded-full h-2">
										<div
											class="bg-emerald-500 h-2 rounded-full"
											style="width: 85%"></div>
									</div>
									<span class="text-sm text-emerald-600 dark:text-emerald-400"
										>85%</span
									>
								</div>
							</div>
						</div>
					</UCard>
				</div>
			</div>
		</section>

		<!-- Contact CTA Section -->
		<section
			class="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 relative overflow-hidden w-full">
			<!-- Éléments décoratifs -->
			<div class="absolute top-0 left-0 w-full h-full">
				<div
					class="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
				<div
					class="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
				<div
					class="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
			</div>

			<div class="relative z-10 w-full">
				<div class="text-center px-4 sm:px-6 lg:px-8">
					<UBadge
						label="Contact"
						variant="subtle"
						size="lg"
						class="mb-4 bg-white/20 text-white backdrop-blur-sm border-white/30" />
					<h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
						Prêt à collaborer ?
					</h2>
					<p class="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
						Si vous avez un projet en tête ou simplement envie d'échanger sur la
						tech, n'hésitez pas à me contacter pour en discuter.
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
							to="https://wa.me/23567389181"
							target="_blank"
							variant="outline"
							color="white"
							size="lg"
							icon="i-simple-icons-whatsapp"
							class="justify-center">
							WhatsApp
						</UButton>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { projects } from "~/data/projects";
import type { Project } from "~/types/portfolio";

// SEO
useHead({
	title: "Accueil - NDILBE DOUVIC",
	meta: [
		{
			name: "description",
			content:
				"Développeur Full-Stack spécialisé Vue.js, Nuxt, Laravel et Spring Boot. Basé au Tchad, disponible pour des projets internationaux.",
		},
	],
});

// Filtrer les projets featured (premiers 6)
const featuredProjects = computed(() => projects.slice(0, 6));

// Logique de défilement smooth pour les ancres
onMounted(() => {
	const router = useRouter();

	router.afterEach((to) => {
		if (to.hash) {
			nextTick(() => {
				const element = document.querySelector(to.hash);
				if (element) {
					const header = document.querySelector("header");
					const headerHeight = header ? header.offsetHeight : 0;
					const elementPosition = element.getBoundingClientRect().top;
					const offsetPosition =
						elementPosition + window.pageYOffset - headerHeight - 20;

					window.scrollTo({
						top: offsetPosition,
						behavior: "smooth",
					});
				}
			});
		}
	});
});
</script>
