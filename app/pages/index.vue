<template>
	<!-- Hero Section -->
	<HeroSection />
	<div
		class="w-full overflow-x-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
		<!-- Featured Projects Section -->
		<section id="projets" class="py-20 relative overflow-hidden">
			<!-- Background decorative elements -->
			<div class="absolute inset-0 -z-10">
				<div
					class="absolute top-0 left-0 w-96 h-96 bg-emerald-200/20 dark:bg-emerald-800/20 rounded-full blur-3xl"></div>
				<div
					class="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl"></div>
			</div>

			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-16 relative">
					<span
						class="inline-block px-3 py-1 mb-4 text-sm font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-800/30 rounded-full">
						Projets récents
					</span>
					<h2
						class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
						Mes réalisations
						<span class="block text-emerald-600 dark:text-emerald-400 mt-2"
							>dont je suis fier</span
						>
					</h2>
					<p
						class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
						Découvrez une sélection de mes travaux les plus récents, alliant
						design moderne et fonctionnalités innovantes
					</p>
				</div>

				<!-- Grille de projets featured avec animation -->
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
					<UCard
						v-for="(project, index) in featuredProjects"
						:key="project.id"
						class="group overflow-hidden shadow-lg border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-gray-800/80 backdrop-blur-sm"
						:style="{ animationDelay: `${index * 100}ms` }">
						<!-- Image du projet avec effet de zoom -->
						<div class="relative h-56 overflow-hidden">
							<NuxtImg
								:src="project.image"
								:alt="project.title"
								class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
								format="webp"
								loading="lazy"
								width="400"
								height="300" />
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

							<!-- Badges de technologies -->
							<div class="absolute top-4 right-4 flex flex-wrap gap-2">
								<UBadge
									v-for="tech in project.technologies.slice(0, 2)"
									:key="tech"
									size="sm"
									variant="solid"
									class="bg-white/90 text-gray-800 backdrop-blur-sm font-medium">
									{{ tech }}
								</UBadge>
							</div>

							<!-- Boutons d'action qui apparaissent au survol -->
							<div
								class="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<UButton
									v-if="project.demo"
									:to="project.demo"
									target="_blank"
									size="sm"
									variant="solid"
									color="white"
									icon="i-heroicons-eye"
									class="flex-1 justify-center">
									Demo
								</UButton>
								<UButton
									v-if="project.github"
									:to="project.github"
									target="_blank"
									size="sm"
									variant="solid"
									color="white"
									icon="i-simple-icons-github"
									class="flex-1 justify-center">
									Code
								</UButton>
							</div>
						</div>

						<template #header>
							<div class="flex items-start justify-between pt-4">
								<div>
									<h3
										class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
										{{ project.title }}
									</h3>
									<p class="text-sm text-gray-500 dark:text-gray-400">
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

						<p
							class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
							{{ project.description }}
						</p>

						<div class="flex justify-between items-center pt-2">
							<div class="flex gap-2">
								<!-- Technologies restantes -->
								<div class="flex gap-1">
									<UBadge
										v-for="tech in project.technologies.slice(2, 4)"
										:key="tech"
										size="xs"
										variant="soft"
										color="gray">
										{{ tech }}
									</UBadge>
								</div>
							</div>
							<UButton
								:to="`/projets/${project.id}`"
								size="sm"
								color="emerald"
								variant="ghost"
								icon="i-heroicons-arrow-right"
								trailing>
								Détails
							</UButton>
						</div>
					</UCard>
				</div>

				<div class="text-center">
					<a
						href="/projects"
						class="inline-flex items-center gap-2 px-8 py-3 text-lg font-medium text-emerald-700 dark:text-emerald-300 border-2 border-emerald-300 dark:border-emerald-600 rounded-full transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
						Voir tous les projets
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
						</svg>
					</a>
				</div>
			</div>
		</section>

		<!-- About Section -->
		<section id="a-propos" class="py-20 relative overflow-hidden">
			<!-- Background decorative elements -->
			<div class="absolute inset-0 -z-10">
				<div
					class="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl"></div>
				<div
					class="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/20 dark:bg-emerald-800/20 rounded-full blur-3xl"></div>
			</div>

			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					<div class="space-y-6">
						<div>
							<span
								class="inline-block px-3 py-1 mb-4 text-sm font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-800/30 rounded-full">
								À propos de moi
							</span>
							<h2
								class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
								Plus qu'un développeur
								<span class="block text-emerald-600 dark:text-emerald-400 mt-2"
									>un créateur de solutions</span
								>
							</h2>
						</div>
						<p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
							Avec une expertise en JavaScript et ses écosystèmes modernes, je
							transforme les idées en expériences web robustes et intuitives.
							Mon approche allie design épuré, performance optimale et
							maintenabilité du code.
						</p>
						<div class="space-y-4">
							<div class="flex items-center gap-3 group">
								<div
									class="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-800/30 flex items-center justify-center group-hover:bg-emerald-200 dark:group-hover:bg-emerald-700/50 transition-colors">
									<Icon
										name="i-heroicons-check-circle"
										class="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
								</div>
								<span class="text-gray-700 dark:text-gray-200 font-medium"
									>Développement Full-Stack (Vue.js, Nuxt, Laravel, Spring
									Boot)</span
								>
							</div>
							<div class="flex items-center gap-3 group">
								<div
									class="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-800/30 flex items-center justify-center group-hover:bg-emerald-200 dark:group-hover:bg-emerald-700/50 transition-colors">
									<Icon
										name="i-heroicons-check-circle"
										class="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
								</div>
								<span class="text-gray-700 dark:text-gray-200 font-medium"
									>Déploiement sur Vercel, Render et Private VPS</span
								>
							</div>
							<div class="flex items-center gap-3 group">
								<div
									class="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-800/30 flex items-center justify-center group-hover:bg-emerald-200 dark:group-hover:bg-emerald-700/50 transition-colors">
									<Icon
										name="i-heroicons-check-circle"
										class="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
								</div>
								<span class="text-gray-700 dark:text-gray-200 font-medium"
									>Design responsive avec Tailwind CSS et Bootstrap</span
								>
							</div>
							<div class="flex items-center gap-3 group">
								<div
									class="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-800/30 flex items-center justify-center group-hover:bg-emerald-200 dark:group-hover:bg-emerald-700/50 transition-colors">
									<Icon
										name="i-heroicons-check-circle"
										class="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
								</div>
								<span class="text-gray-700 dark:text-gray-200 font-medium"
									>Basé au Tchad, disponible pour des projets
									internationaux</span
								>
							</div>
						</div>
						<div class="pt-4">
							<UButton
								to="/about"
								variant="solid"
								color="emerald"
								size="lg"
								trailing-icon="i-heroicons-arrow-right"
								class="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow">
								En savoir plus sur moi
							</UButton>
						</div>
					</div>
					<div class="relative">
						<div class="grid grid-cols-2 gap-6">
							<!-- Colonne de gauche -->
							<div class="space-y-6">
								<!-- Image 1: Développement Full-Stack -->
								<div
									class="relative overflow-hidden rounded-2xl shadow-xl group">
									<NuxtImg
										src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop"
										alt="Illustration du développement Full-Stack avec un éditeur de code et un aperçu d'interface."
										class="w-full transition-transform duration-700 group-hover:scale-110"
										format="webp"
										width="300"
										height="200"
										loading="lazy" />
									<div
										class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								</div>
								<!-- Image 2: Design Responsive -->
								<div
									class="relative overflow-hidden rounded-2xl shadow-xl group">
									<NuxtImg
										src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=300&h=200&fit=crop"
										alt="Maquette de design responsive montrant un site web sur ordinateur, tablette et mobile."
										class="w-full transition-transform duration-700 group-hover:scale-110"
										format="webp"
										width="300"
										height="200"
										loading="lazy" />
									<div
										class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								</div>
							</div>
							<!-- Colonne de droite -->
							<div class="space-y-6 mt-8">
								<!-- Image 3: Déploiement -->
								<div
									class="relative overflow-hidden rounded-2xl shadow-xl group">
									<NuxtImg
										src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=300&h=200&fit=crop"
										alt="Terminal de code affichant les logs d'un processus de déploiement d'application."
										class="w-full transition-transform duration-700 group-hover:scale-110"
										format="webp"
										width="300"
										height="200"
										loading="lazy" />
									<div
										class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								</div>
								<!-- Image 4: International -->
								<div
									class="relative overflow-hidden rounded-2xl shadow-xl group">
									<NuxtImg
										src="data:image/jpeg;base64,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"
										class="w-full transition-transform duration-700 group-hover:scale-110"
										format="webp"
										width="300"
										height="200"
										loading="lazy" />
									<div
										class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								</div>
							</div>
						</div>
						<!-- Éléments décoratifs animés -->
						<div
							class="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-20 blur-xl animate-pulse"></div>
						<div
							class="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 blur-xl animate-pulse"></div>
					</div>
				</div>
			</div>
		</section>

		<!-- Skills Section -->
		<section class="py-20 relative overflow-hidden">
			<!-- Background decorative elements -->
			<div class="absolute inset-0 -z-10">
				<div
					class="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl"></div>
				<div
					class="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/20 dark:bg-emerald-800/20 rounded-full blur-3xl"></div>
			</div>

			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-16">
					<span
						class="inline-block px-3 py-1 mb-4 text-sm font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-800/30 rounded-full">
						Compétences techniques
					</span>
					<h2
						class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
						Mes compétences
						<span class="block text-emerald-600 dark:text-emerald-400 mt-2"
							>clés</span
						>
					</h2>
					<p
						class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
						Les technologies que je maîtrise pour créer des applications web
						modernes et performantes
					</p>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
					<UCard
						class="shadow-xl border-0 bg-white dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group">
						<div
							class="absolute inset-0 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/10 dark:to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						<template #header>
							<div class="flex items-center justify-between relative z-10">
								<h3 class="text-xl font-bold text-gray-900 dark:text-white">
									Frontend
								</h3>
								<div
									class="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-800/30 flex items-center justify-center">
									<Icon
										name="i-heroicons-device-phone-mobile"
										class="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
								</div>
							</div>
						</template>
						<div class="space-y-4 relative z-10">
							<div class="space-y-2">
								<div class="flex items-center justify-between">
									<span class="font-medium text-gray-700 dark:text-gray-200"
										>Vue.js / Nuxt</span
									>
									<span
										class="text-sm text-emerald-600 dark:text-emerald-400 font-medium"
										>95%</span
									>
								</div>
								<div
									class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
									<div
										class="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full transition-all duration-1000 ease-out"
										style="width: 95%"></div>
								</div>
							</div>
							<div class="space-y-2">
								<div class="flex items-center justify-between">
									<span class="font-medium text-gray-700 dark:text-gray-200"
										>Angular</span
									>
									<span
										class="text-sm text-emerald-600 dark:text-emerald-400 font-medium"
										>85%</span
									>
								</div>
								<div
									class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
									<div
										class="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full transition-all duration-1000 ease-out"
										style="width: 85%"></div>
								</div>
							</div>
							<div class="space-y-2">
								<div class="flex items-center justify-between">
									<span class="font-medium text-gray-700 dark:text-gray-200"
										>Tailwind CSS</span
									>
									<span
										class="text-sm text-emerald-600 dark:text-emerald-400 font-medium"
										>95%</span
									>
								</div>
								<div
									class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
									<div
										class="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full transition-all duration-1000 ease-out"
										style="width: 95%"></div>
								</div>
							</div>
						</div>
					</UCard>

					<UCard
						class="shadow-xl border-0 bg-white dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group">
						<div
							class="absolute inset-0 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-blue-900/10 dark:to-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						<template #header>
							<div class="flex items-center justify-between relative z-10">
								<h3 class="text-xl font-bold text-gray-900 dark:text-white">
									Backend
								</h3>
								<div
									class="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-800/30 flex items-center justify-center">
									<Icon
										name="i-heroicons-server"
										class="w-6 h-6 text-blue-600 dark:text-blue-400" />
								</div>
							</div>
						</template>
						<div class="space-y-4 relative z-10">
							<div class="space-y-2">
								<div class="flex items-center justify-between">
									<span class="font-medium text-gray-700 dark:text-gray-200"
										>Laravel</span
									>
									<span
										class="text-sm text-blue-600 dark:text-blue-400 font-medium"
										>92%</span
									>
								</div>
								<div
									class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
									<div
										class="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
										style="width: 92%"></div>
								</div>
							</div>
							<div class="space-y-2">
								<div class="flex items-center justify-between">
									<span class="font-medium text-gray-700 dark:text-gray-200"
										>Spring Boot</span
									>
									<span
										class="text-sm text-blue-600 dark:text-blue-400 font-medium"
										>85%</span
									>
								</div>
								<div
									class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
									<div
										class="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
										style="width: 85%"></div>
								</div>
							</div>
							<div class="space-y-2">
								<div class="flex items-center justify-between">
									<span class="font-medium text-gray-700 dark:text-gray-200"
										>Node.js</span
									>
									<span
										class="text-sm text-blue-600 dark:text-blue-400 font-medium"
										>90%</span
									>
								</div>
								<div
									class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
									<div
										class="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
										style="width: 90%"></div>
								</div>
							</div>
						</div>
					</UCard>

					<UCard
						class="shadow-xl border-0 bg-white dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group">
						<div
							class="absolute inset-0 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/10 dark:to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						<template #header>
							<div class="flex items-center justify-between relative z-10">
								<h3 class="text-xl font-bold text-gray-900 dark:text-white">
									Déploiement
								</h3>
								<div
									class="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-800/30 flex items-center justify-center">
									<Icon
										name="i-heroicons-cloud"
										class="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
								</div>
							</div>
						</template>
						<div class="space-y-4 relative z-10">
							<div class="space-y-2">
								<div class="flex items-center justify-between">
									<span class="font-medium text-gray-700 dark:text-gray-200"
										>Vercel</span
									>
									<span
										class="text-sm text-emerald-600 dark:text-emerald-400 font-medium"
										>95%</span
									>
								</div>
								<div
									class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
									<div
										class="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full transition-all duration-1000 ease-out"
										style="width: 95%"></div>
								</div>
							</div>
							<div class="space-y-2">
								<div class="flex items-center justify-between">
									<span class="font-medium text-gray-700 dark:text-gray-200"
										>Render</span
									>
									<span
										class="text-sm text-emerald-600 dark:text-emerald-400 font-medium"
										>90%</span
									>
								</div>
								<div
									class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
									<div
										class="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full transition-all duration-1000 ease-out"
										style="width: 90%"></div>
								</div>
							</div>
							<div class="space-y-2">
								<div class="flex items-center justify-between">
									<span class="font-medium text-gray-700 dark:text-gray-200"
										>Private VPS</span
									>
									<span
										class="text-sm text-emerald-600 dark:text-emerald-400 font-medium"
										>85%</span
									>
								</div>
								<div
									class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
									<div
										class="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full transition-all duration-1000 ease-out"
										style="width: 85%"></div>
								</div>
							</div>
						</div>
					</UCard>
				</div>
			</div>
		</section>

		<!-- Contact CTA Section -->
		<section class="py-20 relative overflow-hidden">
			<!-- Background decorative elements -->
			<div class="absolute inset-0 -z-10">
				<div
					class="absolute top-0 left-0 w-96 h-96 bg-emerald-200/20 dark:bg-emerald-800/20 rounded-full blur-3xl"></div>
				<div
					class="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl"></div>
			</div>

			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center">
					<span
						class="inline-block px-3 py-1 mb-4 text-sm font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-800/30 rounded-full">
						Contact
					</span>
					<h2
						class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
						Prêt à collaborer ?
					</h2>
					<p
						class="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
						Si vous avez un projet en tête ou simplement envie d'échanger sur la
						tech, n'hésitez pas à me contacter pour en discuter.
					</p>

					<div class="flex flex-col sm:flex-row gap-6 justify-center">
						<UButton
							to="/contact"
							variant="solid"
							color="emerald"
							size="xl"
							icon="i-heroicons-envelope"
							class="justify-center px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							Me contacter
						</UButton>
						<UButton
							to="https://wa.me/23567389181"
							target="_blank"
							variant="outline"
							color="emerald"
							size="xl"
							icon="i-simple-icons-whatsapp"
							class="justify-center px-8 py-4 rounded-full font-medium border-2 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 hover:-translate-y-1">
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

// Filtrer les projets featured (premiers 3 projets)
const featuredProjects = computed(() => projects.slice(0, 3));

// Animation d'entrée pour les cartes de projets
onMounted(() => {
	// Observer pour les animations au scroll
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("animate-fadeInUp");
				}
			});
		},
		{ threshold: 0.1 }
	);

	// Observer toutes les cartes de projets
	document.querySelectorAll(".group").forEach((el) => {
		observer.observe(el);
	});

	// Logique de défilement smooth pour les ancres
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

<style scoped>
/* Animation personnalisée pour l'entrée des éléments */
@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(30px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.animate-fadeInUp {
	animation: fadeInUp 0.6s ease-out forwards;
}

/* Animation pour les barres de progression */
@keyframes progressAnimation {
	from {
		width: 0;
	}
}

/* Assurer que les barres de progression s'animent au chargement de la page */
.progress-bar {
	animation: progressAnimation 1.5s ease-out forwards;
}
</style>
