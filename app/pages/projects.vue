<template>
	<div>
		<!-- Hero Section avec un design plus moderne -->
		<div
			class="relative min-h-screen lg:min-h-[calc(100vh-128px)] overflow-hidden flex items-center justify-center pt-24 lg:pt-32">
			<!-- Fond dégradé animé -->
			<div
				class="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-950" />
			<!-- Formes géométriques animées -->
			<div class="absolute inset-0">
				<div
					class="absolute top-20 left-10 w-72 h-72 bg-emerald-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
				<div
					class="absolute top-40 right-10 w-72 h-72 bg-teal-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
				<div
					class="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
			</div>

			<!-- Particules flottantes -->
			<div class="absolute inset-0 overflow-hidden">
				<div
					v-for="i in 20"
					:key="i"
					class="absolute bg-white rounded-full opacity-20 animate-float"
					:style="{
						width: Math.random() * 6 + 2 + 'px',
						height: Math.random() * 6 + 2 + 'px',
						left: Math.random() * 100 + '%',
						top: Math.random() * 100 + '%',
						animationDelay: Math.random() * 20 + 's',
						animationDuration: Math.random() * 20 + 10 + 's',
					}"></div>
			</div>

			<div class="absolute inset-0 flex items-center justify-center">
				<UContainer class="text-center text-white relative z-10">
					<UBadge
						label="Portfolio"
						variant="subtle"
						size="lg"
						class="mb-4 bg-white/10 backdrop-blur-md border-white/20 text-white animate-fade-in" />
					<h1
						class="text-4xl lg:text-6xl font-bold mb-4 tracking-tight animate-slide-up">
						Mes Réalisations
					</h1>
					<p
						class="text-xl lg:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-200">
						Explorez une sélection de projets qui reflètent mon expertise et ma
						créativité dans le développement web moderne.
					</p>

					<!-- Barre de recherche -->
					<div
						class="max-w-md mx-auto mb-6 animate-slide-up animation-delay-400">
						<UInput
							v-model="searchQuery"
							icon="i-heroicons-magnifying-glass"
							size="lg"
							placeholder="Rechercher un projet, une technologie..."
							color="white"
							variant="outline"
							class="bg-white/10 backdrop-blur-md border-white/20 text-white placeholder-white/60" />
					</div>

					<!-- Filtres multi-sélection -->
					<div
						class="flex flex-wrap justify-center gap-2 mb-4 animate-slide-up animation-delay-600">
						<UButton
							v-for="filter in availableFilters"
							:key="filter.value"
							:variant="
								activeFilters.includes(filter.value) ? 'solid' : 'outline'
							"
							:color="
								activeFilters.includes(filter.value) ? 'white' : 'emerald'
							"
							size="sm"
							@click="toggleFilter(filter.value)"
							class="border-white/30 text-white hover:bg-white hover:text-emerald-900 transform hover:scale-105 transition-all duration-300">
							{{ filter.label }}
						</UButton>
					</div>
					<p
						v-if="activeFilters.length > 0"
						class="text-sm text-emerald-200 animate-fade-in">
						Filtres actifs: {{ activeFilters.length }}
						<UButton
							@click="clearFilters"
							variant="ghost"
							color="white"
							size="2xs"
							class="ml-2"
							>Effacer</UButton
						>
					</p>
				</UContainer>
			</div>

			<!-- Indicateur de défilement -->
			<div
				class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
				<Icon name="i-heroicons-chevron-down" class="w-8 h-8" />
			</div>
		</div>

		<UContainer class="py-16">
			<!-- Section Projets Mis en Avant -->
			<div v-if="featuredProjects.length > 0" class="mb-16">
				<h2
					class="text-3xl font-bold text-center mb-8 text-emerald-900 dark:text-emerald-100">
					Projets Phares
				</h2>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<UCard
						v-for="(project, index) in featuredProjects"
						:key="project.id"
						class="group overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/20 dark:to-gray-900 animate-fade-in"
						:style="{ animationDelay: index * 200 + 'ms' }">
						<div class="relative h-64 lg:h-80 overflow-hidden">
							<NuxtImg
								:src="project.image"
								:alt="project.title"
								class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								format="webp" />
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
							<div class="absolute top-4 left-4">
								<UBadge
									:color="project.status === 'Terminé' ? 'emerald' : 'amber'"
									variant="solid"
									size="sm">
									{{ project.status }}
								</UBadge>
							</div>
							<div class="absolute bottom-4 left-4 right-4 text-white">
								<h3 class="text-2xl font-bold mb-2">{{ project.title }}</h3>
								<p class="text-emerald-100">{{ project.category }}</p>
							</div>
							<!-- Overlay avec informations supplémentaires au survol -->
							<div
								class="absolute inset-0 bg-emerald-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div class="text-center text-white p-4">
									<p class="mb-2">
										{{
											project.client
												? `Client: ${project.client}`
												: "Projet personnel"
										}}
									</p>
									<p class="mb-2">
										{{ project.year ? `Année: ${project.year}` : "" }}
									</p>
									<p>
										{{ project.duration ? `Durée: ${project.duration}` : "" }}
									</p>
								</div>
							</div>
						</div>
						<div class="p-6">
							<p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
								{{ project.description }}
							</p>
							<div class="flex flex-wrap gap-2 mb-4">
								<UBadge
									v-for="tech in project.technologies.slice(0, 4)"
									:key="tech"
									size="sm"
									variant="soft"
									color="emerald">
									{{ tech }}
								</UBadge>
							</div>
							<div class="flex justify-between items-center">
								<div class="flex gap-2">
									<UButton
										v-if="project.demo"
										:to="project.demo"
										target="_blank"
										size="sm"
										variant="solid"
										color="emerald"
										icon="i-heroicons-eye"
										class="transform hover:scale-105 transition-transform">
										Voir le site
									</UButton>
									<UButton
										v-if="project.github"
										:to="project.github"
										target="_blank"
										size="sm"
										variant="outline"
										color="emerald"
										icon="i-simple-icons-github"
										class="transform hover:scale-105 transition-transform">
										Code
									</UButton>
								</div>
								<NuxtLink :to="`/projets/${project.id}`">
									<UButton
										size="sm"
										color="gray"
										variant="ghost"
										icon="i-heroicons-arrow-right"
										trailing
										class="transform hover:scale-105 transition-transform">
										En savoir plus
									</UButton>
								</NuxtLink>
							</div>
						</div>
					</UCard>
				</div>
			</div>

			<!-- Section Statistiques avec compteurs animés -->
			<div class="mb-16">
				<div
					class="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-2xl p-8 shadow-sm border border-emerald-200 dark:border-emerald-700">
					<div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
						<div v-for="(stat, index) in stats" :key="stat.label" class="group">
							<div class="relative inline-block mb-2">
								<Icon
									:name="getStatIcon(stat.key)"
									class="w-12 h-12 text-emerald-500 group-hover:text-emerald-600 transition-colors" />
								<div
									class="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity"></div>
							</div>
							<div
								class="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
								<ClientOnly>
									<span>{{ animatedStats[stat.key] }}</span>
									<template #fallback>
										<span>{{ stat.value }}</span>
									</template>
								</ClientOnly>
								<span class="text-xl">+</span>
							</div>
							<div class="text-emerald-700 dark:text-emerald-300">
								{{ stat.label }}
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Grille de Projets avec vue en masonry -->
			<!-- Grille de Projets -->
			<div class="mb-12">
				<div class="flex justify-between items-center mb-8">
					<h2
						v-if="featuredProjects.length > 0"
						class="text-3xl font-bold text-emerald-900 dark:text-emerald-100">
						Tous les Projets
					</h2>
					<div class="flex gap-2">
						<UButton
							:variant="viewMode === 'grid' ? 'solid' : 'ghost'"
							color="emerald"
							size="sm"
							icon="i-heroicons-squares-2x2"
							@click="viewMode = 'grid'">
							Grille
						</UButton>
						<UButton
							:variant="viewMode === 'list' ? 'solid' : 'ghost'"
							color="emerald"
							size="sm"
							icon="i-heroicons-list-bullet"
							@click="viewMode = 'list'">
							Liste
						</UButton>
					</div>
				</div>

				<!-- État vide -->
				<div v-if="filteredProjects.length === 0" class="text-center py-12">
					<Icon
						name="i-heroicons-magnifying-glass"
						class="w-16 h-16 text-emerald-300 dark:text-emerald-600 mx-auto mb-4" />
					<p class="text-emerald-700 dark:text-emerald-300 text-lg mb-4">
						Aucun projet ne correspond à votre recherche.
					</p>
					<UButton @click="clearFilters" color="emerald" variant="outline">
						Réinitialiser les filtres
					</UButton>
				</div>

				<!-- Vue Grille -->
				<div
					v-else-if="viewMode === 'grid'"
					class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<UCard
						v-for="(project, index) in displayedProjects"
						:key="project.id"
						class="group overflow-hidden shadow-sm border-emerald-200 dark:border-emerald-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
						:style="{ animationDelay: index * 100 + 'ms' }">
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
										icon="i-heroicons-eye"
										class="transform hover:scale-105 transition-transform">
										Demo
									</UButton>
									<UButton
										v-if="project.github"
										:to="project.github"
										target="_blank"
										size="sm"
										variant="outline"
										color="emerald"
										icon="i-simple-icons-github"
										class="transform hover:scale-105 transition-transform">
										Code
									</UButton>
								</div>
								<NuxtLink :to="`/projets/${project.id}`">
									<UButton
										size="sm"
										color="emerald"
										variant="ghost"
										icon="i-heroicons-arrow-right"
										trailing
										class="transform hover:scale-105 transition-transform">
										Détails
									</UButton>
								</NuxtLink>
							</div>
						</template>
					</UCard>
				</div>

				<!-- Vue Liste -->
				<div v-else class="space-y-6">
					<UCard
						v-for="(project, index) in displayedProjects"
						:key="project.id"
						class="group overflow-hidden shadow-sm border-emerald-200 dark:border-emerald-700 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row animate-fade-in"
						:style="{ animationDelay: index * 100 + 'ms' }">
						<!-- Image du projet -->
						<div
							class="relative w-full md:w-1/3 h-48 md:h-auto overflow-hidden">
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

						<!-- Contenu -->
						<div class="flex-1 p-6 flex flex-col justify-between">
							<div>
								<div class="flex items-start justify-between mb-4">
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
								<p
									class="text-emerald-700 dark:text-emerald-300 mb-4 line-clamp-3">
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
							</div>
							<div class="flex justify-between items-center">
								<div class="flex gap-2">
									<UButton
										v-if="project.demo"
										:to="project.demo"
										target="_blank"
										size="sm"
										variant="outline"
										color="emerald"
										icon="i-heroicons-eye"
										class="transform hover:scale-105 transition-transform">
										Demo
									</UButton>
									<UButton
										v-if="project.github"
										:to="project.github"
										target="_blank"
										size="sm"
										variant="outline"
										color="emerald"
										icon="i-simple-icons-github"
										class="transform hover:scale-105 transition-transform">
										Code
									</UButton>
								</div>
								<NuxtLink :to="`/projets/${project.id}`">
									<UButton
										size="sm"
										color="emerald"
										variant="ghost"
										icon="i-heroicons-arrow-right"
										trailing
										class="transform hover:scale-105 transition-transform">
										Détails
									</UButton>
								</NuxtLink>
							</div>
						</div>
					</UCard>
				</div>

				<!-- Bouton "Charger plus" -->
				<div v-if="hasMoreProjects" class="text-center mt-8">
					<UButton
						@click="loadMore"
						size="lg"
						color="emerald"
						variant="outline"
						:loading="loadingMore"
						class="transform hover:scale-105 transition-transform">
						Charger plus de projets
					</UButton>
				</div>
			</div>

			<!-- Section Technologies avec niveaux de compétence -->
			<div class="mb-16">
				<div class="text-center mb-8">
					<h2
						class="text-2xl font-bold mb-4 text-emerald-900 dark:text-emerald-100">
						Technologies Maîtrisées
					</h2>
					<p class="text-emerald-700 dark:text-emerald-300">
						Un aperçu des technologies que j'utilise pour donner vie à mes
						projets
					</p>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div
						v-for="(category, index) in techCategories"
						:key="category.name"
						class="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-700 hover:shadow-md transition-all duration-300 animate-fade-in"
						:style="{ animationDelay: index * 100 + 'ms' }">
						<h3
							class="text-lg font-semibold mb-4 text-emerald-900 dark:text-emerald-100 flex items-center">
							<Icon
								:name="category.icon"
								class="w-5 h-5 mr-2 text-emerald-500" />
							{{ category.name }}
						</h3>
						<div class="space-y-3">
							<div
								v-for="tech in category.technologies"
								:key="tech.name"
								class="space-y-1">
								<div class="flex justify-between items-center">
									<span
										class="text-sm font-medium text-emerald-800 dark:text-emerald-200"
										>{{ tech.name }}</span
									>
									<span class="text-xs text-emerald-600 dark:text-emerald-400"
										>{{ tech.level }}%</span
									>
								</div>
								<div
									class="w-full bg-emerald-200 dark:bg-emerald-800 rounded-full h-1.5">
									<div
										class="bg-gradient-to-r from-emerald-500 to-teal-500 h-1.5 rounded-full transition-all duration-1000 ease-out"
										:style="{ width: tech.level + '%' }"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Section Témoignages -->
			<div class="mb-16">
				<div class="text-center mb-8">
					<h2
						class="text-2xl font-bold mb-4 text-emerald-900 dark:text-emerald-100">
						Ce Que Disent Mes Clients
					</h2>
					<p class="text-emerald-700 dark:text-emerald-300">
						Retours d'expériences sur nos collaborations
					</p>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<UCard
						v-for="(testimonial, index) in testimonials"
						:key="testimonial.name"
						class="h-full shadow-sm border-emerald-200 dark:border-emerald-700 hover:shadow-md transition-all duration-300 animate-fade-in"
						:style="{ animationDelay: index * 100 + 'ms' }">
						<div class="flex items-center mb-4">
							<div
								class="w-12 h-12 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center mr-3">
								<Icon
									name="i-heroicons-user"
									class="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
							</div>
							<div>
								<h4
									class="font-semibold text-emerald-900 dark:text-emerald-100">
									{{ testimonial.name }}
								</h4>
								<p class="text-sm text-emerald-600 dark:text-emerald-400">
									{{ testimonial.position }}
								</p>
							</div>
						</div>
						<div class="flex mb-3">
							<Icon
								v-for="i in 5"
								:key="i"
								name="i-heroicons-star"
								class="w-5 h-5 text-yellow-400" />
						</div>
						<p class="text-emerald-700 dark:text-emerald-300 italic">
							"{{ testimonial.content }}"
						</p>
					</UCard>
				</div>
			</div>

			<!-- CTA Final -->
			<UCard
				class="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg border-0">
				<div class="text-center py-12">
					<h2 class="text-3xl font-bold mb-4">Prêt à collaborer ?</h2>
					<p class="text-emerald-100 mb-8 max-w-2xl mx-auto">
						Je suis ouvert aux nouvelles opportunités et aux discussions
						passionnantes. Contactez-moi pour discuter de votre prochain projet.
					</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<UButton
							to="/contact"
							variant="solid"
							color="white"
							size="lg"
							icon="i-heroicons-envelope"
							class="justify-center text-emerald-700 hover:text-emerald-800 transform hover:scale-105 transition-transform">
							Démarrons la conversation
						</UButton>
						<UButton
							to="/about"
							variant="outline"
							color="white"
							size="lg"
							icon="i-heroicons-user"
							class="justify-center transform hover:scale-105 transition-transform">
							En savoir plus sur moi
						</UButton>
					</div>
				</div>
			</UCard>
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
import { ref, computed, onMounted, nextTick } from "vue";
// --- CORRECTION 1: Retour à l'import statique ---
import { projects, type Project } from "~/data/projects";

// --- État pour la recherche et le filtrage ---
const searchQuery = ref("");
const activeFilters = ref<string[]>([]);
const viewMode = ref<"grid" | "list">("grid");

// --- État pour la pagination / "Charger plus" ---
const displayedProjectsCount = ref(6);
const loadingMore = ref(false);

// --- État pour le bouton "Retour en haut" ---
const showScrollTop = ref(false);

// --- Données pour les statistiques ---
// --- CORRECTION 2: Utilisation directe du tableau `projects` ---
const stats = computed(() => [
	{ key: "projects", label: "Projets réalisés", value: projects.length },
	{
		key: "technologies",
		label: "Technologies",
		value: uniqueTechnologies.value.length,
	},
	{
		key: "clients",
		label: "Clients satisfaits",
		value: clientProjects.value.length,
	},
	{
		key: "opensource",
		label: "Projets open source",
		value: openSourceProjects.value.length,
	},
]);

const animatedStats = ref({
	projects: 0,
	technologies: 0,
	clients: 0,
	opensource: 0,
});

// --- Données pour les catégories de technologies ---
const techCategories = computed(() => [
	{
		name: "Frontend",
		icon: "i-heroicons-device-phone-mobile",
		technologies: [
			{ name: "Vue.js / Nuxt", level: 90 },
			{ name: "Angular", level: 80 },
			{ name: "TypeScript", level: 85 },
			{ name: "Tailwind CSS", level: 90 },
			{ name: "Bootstrap", level: 85 },
		],
	},
	{
		name: "Backend",
		icon: "i-heroicons-server",
		technologies: [
			{ name: "Laravel", level: 90 },
			{ name: "Spring Boot", level: 80 },
			{ name: "PHP", level: 88 },
			{ name: "MySQL", level: 85 },
			{ name: "PostgreSQL", level: 80 },
		],
	},
	{
		name: "Déploiement & DevOps",
		icon: "i-heroicons-cloud",
		technologies: [
			{ name: "Render", level: 85 },
			{ name: "Vercel", level: 90 },
			{ name: "Private VPS", level: 80 },
			{ name: "Docker", level: 75 },
			{ name: "CI/CD", level: 80 },
		],
	},
]);

// --- Données pour les témoignages ---
const testimonials = [
	{
		name: "Jean Dupont",
		position: "CEO, TechSolutions",
		content:
			"Un développeur exceptionnel qui a transformé notre idée en une application fonctionnelle et performante. Je recommande vivement !",
	},
	{
		name: "Marie Curie",
		position: "Directrice Marketing, InnovCo",
		content:
			"Professionnalisme, expertise et une excellente communication. Il a livré notre projet dans les temps et au-delà de nos attentes.",
	},
	{
		name: "Paul Martin",
		position: "Fondateur, StartUpX",
		content:
			"Sa polyvalence technique et sa capacité à s'adapter à nos besoins changeants ont été cruciales pour le succès de notre projet.",
	},
];

// --- Logique de filtrage ---

// Générer dynamiquement les filtres à partir des tags des projets
const availableFilters = computed(() => {
	const filtersSet = new Set<string>();
	projects.forEach((project) => {
		project.tags?.forEach((tag) => filtersSet.add(tag));
	});
	// Ajout des filtres de base
	filtersSet.add("web");
	filtersSet.add("design");
	filtersSet.add("opensource");

	return Array.from(filtersSet).map((filter) => ({
		label: filter.charAt(0).toUpperCase() + filter.slice(1),
		value: filter,
	}));
});

// Projets filtrés (recherche + filtres)
const filteredProjects = computed(() => {
	// --- CORRECTION 3: Utilisation directe du tableau `projects` ---
	let result = projects;

	// Filtrage par recherche
	if (searchQuery.value) {
		const query = searchQuery.value.toLowerCase();
		result = result.filter(
			(project) =>
				project.title.toLowerCase().includes(query) ||
				project.description.toLowerCase().includes(query) ||
				project.technologies.some((tech) => tech.toLowerCase().includes(query))
		);
	}

	// Filtrage par tags/catégories
	if (activeFilters.value.length > 0) {
		result = result.filter((project) =>
			activeFilters.value.some(
				(filter) =>
					project.category.toLowerCase().includes(filter) ||
					project.tags?.includes(filter)
			)
		);
	}

	return result;
});

// Projets à afficher (pour la pagination/charger plus)
const displayedProjects = computed(() => {
	return filteredProjects.value.slice(0, displayedProjectsCount.value);
});

// Projets mis en avant
const featuredProjects = computed(() => {
	// --- CORRECTION 3: Utilisation directe du tableau `projects` ---
	return projects.filter((p) => p.featured);
});

// --- Logique pour les statistiques ---

const clientProjects = computed(() =>
	// --- CORRECTION 3: Utilisation directe du tableau `projects` ---
	projects.filter((p) => p.type === "client")
);

const openSourceProjects = computed(() =>
	// --- CORRECTION 3: Utilisation directe du tableau `projects` ---
	projects.filter((p) => p.type === "opensource")
);

const uniqueTechnologies = computed(() => {
	const techs = new Set<string>();
	// --- CORRECTION 3: Utilisation directe du tableau `projects` ---
	projects.forEach((project) => {
		project.technologies?.forEach((tech) => techs.add(tech));
	});
	return Array.from(techs);
});

// --- Fonctions ---

function toggleFilter(filterValue: string) {
	const index = activeFilters.value.indexOf(filterValue);
	if (index > -1) {
		activeFilters.value.splice(index, 1);
	} else {
		activeFilters.value.push(filterValue);
	}
}

function clearFilters() {
	activeFilters.value = [];
	searchQuery.value = "";
}

async function loadMore() {
	loadingMore.value = true;
	// Simuler un délai de chargement
	await new Promise((resolve) => setTimeout(resolve, 500));
	displayedProjectsCount.value += 6;
	loadingMore.value = false;
}

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleScroll() {
	showScrollTop.value = window.scrollY > 300;
}

function getStatIcon(key: string) {
	switch (key) {
		case "projects":
			return "i-heroicons-rocket-launch";
		case "technologies":
			return "i-heroicons-code-bracket";
		case "clients":
			return "i-heroicons-user-group";
		case "opensource":
			return "i-heroicons-globe-alt";
		default:
			return "i-heroicons-cog";
	}
}

// Animation des compteurs
function animateCounters() {
	const duration = 2000; // 2 secondes
	const steps = 60;
	const stepDuration = duration / steps;

	// On utilise la valeur calculée de `stats`
	const statsValues = stats.value;

	statsValues.forEach((stat) => {
		let current = 0;
		const increment = stat.value / steps;
		const timer = setInterval(() => {
			current += increment;
			if (current >= stat.value) {
				animatedStats.value[stat.key as keyof typeof animatedStats.value] =
					stat.value;
				clearInterval(timer);
			} else {
				animatedStats.value[stat.key as keyof typeof animatedStats.value] =
					Math.floor(current);
			}
		}, stepDuration);
	});
}

// --- Hooks du cycle de vie ---
onMounted(() => {
	window.addEventListener("scroll", handleScroll);
	// Lancer l'animation des compteurs
	nextTick(() => {
		animateCounters();
	});
});

// SEO
useHead({
	title: "Projets - NDILBE DOUVIC",
	meta: [
		{
			name: "description",
			content:
				"Découvrez mes projets web : applications, sites, et contributions open source. Expertise en Laravel, Vue.js, Nuxt, et plus.",
		},
	],
});
</script>

<style scoped>
/* Animation pour les blobs du hero */
@keyframes blob {
	0% {
		transform: translate(0px, 0px) scale(1);
	}
	33% {
		transform: translate(30px, -50px) scale(1.1);
	}
	66% {
		transform: translate(-20px, 20px) scale(0.9);
	}
	100% {
		transform: translate(0px, 0px) scale(1);
	}
}
.animate-blob {
	animation: blob 7s infinite;
}
.animation-delay-2000 {
	animation-delay: 2s;
}
.animation-delay-4000 {
	animation-delay: 4s;
}

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
