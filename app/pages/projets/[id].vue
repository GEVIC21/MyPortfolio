<template>
	<div
		class="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
		<!-- Hero Section -->
		<section class="relative h-[400px] md:h-[500px] overflow-hidden">
			<div class="absolute inset-0">
				<NuxtImg
					v-if="project"
					:src="project.image"
					:alt="project.title"
					class="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
					format="webp"
					loading="lazy" />
			</div>

			<div
				class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent" />

			<!-- Animated particles -->
			<div class="absolute inset-0 overflow-hidden">
				<div
					v-for="i in 15"
					:key="i"
					class="absolute bg-white rounded-full opacity-20"
					:style="{
						width: Math.random() * 4 + 1 + 'px',
						height: Math.random() * 4 + 1 + 'px',
						left: Math.random() * 100 + '%',
						top: Math.random() * 100 + '%',
						animationDelay: Math.random() * 20 + 's',
						animationDuration: Math.random() * 20 + 10 + 's',
					}"
					data-animate="float"></div>
			</div>

			<div class="absolute inset-0 flex items-center justify-center">
				<div
					class="container mx-auto px-4 text-center text-white relative z-10">
					<nav class="mb-4" data-animate="fade-in">
						<ol class="flex items-center justify-center space-x-2 text-sm">
							<li>
								<NuxtLink
									to="/"
									class="text-slate-300 hover:text-white transition-colors duration-200">
									Accueil
								</NuxtLink>
							</li>
							<li class="text-slate-400">/</li>
							<li>
								<NuxtLink
									to="/projects"
									class="text-slate-300 hover:text-white transition-colors duration-200">
									Projets
								</NuxtLink>
							</li>
							<li class="text-slate-400">/</li>
							<li class="text-white">{{ project?.title }}</li>
						</ol>
					</nav>

					<h1
						v-if="project"
						class="text-4xl md:text-5xl font-bold tracking-tight mb-4"
						data-animate="slide-up">
						{{ project.title }}
					</h1>
					<p
						v-if="project"
						class="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-6"
						data-animate="slide-up"
						data-delay="200">
						{{ project.description.slice(0, 100) + "..." }}
					</p>
					<div
						class="flex justify-center gap-4 flex-wrap"
						data-animate="slide-up"
						data-delay="400">
						<a
							v-if="project?.github"
							:href="project.github"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none">
							<Icon name="i-simple-icons-github" class="w-5 h-5" />
							Voir le code
						</a>
						<a
							v-if="project?.demo"
							:href="project.demo"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none">
							<Icon
								name="i-heroicons-arrow-top-right-on-square"
								class="w-5 h-5" />
							Voir le site
						</a>
					</div>
				</div>
			</div>
		</section>

		<div class="container mx-auto px-4 py-16">
			<!-- Back Button -->
			<div class="mb-8">
				<NuxtLink to="/projects" class="inline-flex items-center group">
					<div
						class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mr-3 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors duration-200">
						<Icon
							name="i-heroicons-arrow-left"
							class="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
					</div>
					<span
						class="text-slate-600 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
						Retour aux projets
					</span>
				</NuxtLink>
			</div>

			<template v-if="project">
				<!-- À propos -->
				<section class="mb-16" data-animate="fade-in">
					<h2
						class="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
						<Icon
							name="i-heroicons-information-circle"
							class="w-8 h-8 mr-2 text-emerald-500" />
						À propos de ce projet
					</h2>
					<div
						class="bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/30 dark:to-slate-800 shadow-lg border border-emerald-200 dark:border-emerald-700 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
						<p
							class="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
							{{ project.description }}
						</p>
					</div>
				</section>

				<!-- Galerie du projet -->
				<section class="mb-16" data-animate="fade-in" data-delay="200">
					<div
						class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
						<h2
							class="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
							<Icon
								name="i-heroicons-photo"
								class="w-8 h-8 mr-2 text-emerald-500" />
							Galerie du projet
						</h2>
						<div class="flex gap-2">
							<button
								:class="[
									'px-4 py-2 rounded-lg font-medium transition-all duration-200',
									galleryView === 'grid'
										? 'bg-emerald-600 text-white'
										: 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600',
								]"
								@click="galleryView = 'grid'">
								<Icon name="i-heroicons-squares-2x2" class="w-5 h-5" />
							</button>
							<button
								:class="[
									'px-4 py-2 rounded-lg font-medium transition-all duration-200',
									galleryView === 'masonry'
										? 'bg-emerald-600 text-white'
										: 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600',
								]"
								@click="galleryView = 'masonry'">
								<Icon name="i-heroicons-squares-plus" class="w-5 h-5" />
							</button>
							<button
								:class="[
									'px-4 py-2 rounded-lg font-medium transition-all duration-200',
									galleryView === 'carousel'
										? 'bg-emerald-600 text-white'
										: 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600',
								]"
								@click="galleryView = 'carousel'">
								<Icon name="i-heroicons-photo" class="w-5 h-5" />
							</button>
						</div>
					</div>

					<!-- Grid View -->
					<div
						v-if="galleryView === 'grid'"
						class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						<div
							v-for="(image, index) in projectImages"
							:key="index"
							class="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-slate-100 dark:bg-slate-800"
							@click="openLightbox(index)">
							<NuxtImg
								:src="image.src"
								:alt="image.alt"
								class="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
								format="webp"
								loading="lazy" />
							<div
								class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
								<div class="p-4 text-white">
									<p class="text-sm font-medium">{{ image.alt }}</p>
								</div>
							</div>
							<div
								class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<Icon
									name="i-heroicons-magnifying-glass"
									class="w-5 h-5 text-slate-800" />
							</div>
						</div>
					</div>

					<!-- Masonry View -->
					<div
						v-else-if="galleryView === 'masonry'"
						class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
						<div
							v-for="(image, index) in projectImages"
							:key="index"
							class="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-slate-100 dark:bg-slate-800 break-inside-avoid mb-6"
							@click="openLightbox(index)">
							<NuxtImg
								:src="image.src"
								:alt="image.alt"
								class="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
								format="webp"
								loading="lazy" />
							<div
								class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
								<div class="p-4 text-white">
									<p class="text-sm font-medium">{{ image.alt }}</p>
								</div>
							</div>
							<div
								class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<Icon
									name="i-heroicons-magnifying-glass"
									class="w-5 h-5 text-slate-800" />
							</div>
						</div>
					</div>

					<!-- Carousel View -->
					<div v-else-if="galleryView === 'carousel'" class="relative">
						<div
							class="overflow-hidden rounded-xl shadow-lg bg-slate-100 dark:bg-slate-800">
							<div
								class="relative h-96 md:h-[600px] flex items-center justify-center">
								<NuxtImg
									:src="projectImages[currentImageIndex].src"
									:alt="projectImages[currentImageIndex].alt"
									class="w-full h-auto max-h-full object-contain"
									format="webp" />
								<div
									class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex items-end">
									<div class="p-6 text-white">
										<p class="text-lg font-medium">
											{{ projectImages[currentImageIndex].alt }}
										</p>
										<p class="text-sm text-slate-300">
											{{ currentImageIndex + 1 }} / {{ projectImages.length }}
										</p>
									</div>
								</div>
							</div>
						</div>
						<button
							@click="prevImage"
							class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none">
							<Icon
								name="i-heroicons-chevron-left"
								class="w-6 h-6 text-slate-800" />
						</button>
						<button
							@click="nextImage"
							class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none">
							<Icon
								name="i-heroicons-chevron-right"
								class="w-6 h-6 text-slate-800" />
						</button>
						<div class="flex justify-center mt-4 space-x-2">
							<button
								v-for="(_, index) in projectImages"
								:key="index"
								@click="currentImageIndex = index"
								:class="[
									'h-2 rounded-full transition-all duration-300',
									currentImageIndex === index
										? 'bg-emerald-500 w-8'
										: 'bg-slate-300 hover:bg-slate-400 w-2',
								]"></button>
						</div>
					</div>
				</section>

				<!-- Technologies -->
				<section class="mb-16" data-animate="fade-in" data-delay="400">
					<h2
						class="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
						<Icon
							name="i-heroicons-code-bracket"
							class="w-8 h-8 mr-2 text-emerald-500" />
						Technologies utilisées
					</h2>
					<div
						class="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-700">
						<div class="flex flex-wrap gap-3">
							<span
								v-for="tech in project.technologies"
								:key="tech"
								class="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-500 transition-all duration-300 transform hover:scale-105">
								{{ tech }}
							</span>
						</div>
					</div>
				</section>

				<!-- Sidebar : Détails, Tags, Partage -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
					<!-- Détails -->
					<div data-animate="fade-in" data-delay="200">
						<h3
							class="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
							<Icon
								name="i-heroicons-clipboard-document-list"
								class="w-6 h-6 mr-2 text-emerald-500" />
							Détails du projet
						</h3>
						<div
							class="bg-white dark:bg-slate-800 shadow-md border border-emerald-200 dark:border-emerald-700 rounded-xl p-6">
							<div class="space-y-4">
								<div
									v-for="(value, key) in generalDetails"
									:key="key"
									class="pb-4 border-b border-slate-200 dark:border-slate-700 last:border-0 last:pb-0">
									<dt
										class="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
										{{ key }}
									</dt>
									<dd class="text-slate-900 dark:text-white font-medium">
										{{ value }}
									</dd>
								</div>
							</div>
						</div>
					</div>

					<!-- Tags -->
					<div data-animate="fade-in" data-delay="400">
						<h3
							class="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
							<Icon
								name="i-heroicons-tag"
								class="w-6 h-6 mr-2 text-emerald-500" />
							Tags
						</h3>
						<div
							class="bg-white dark:bg-slate-800 shadow-md border border-emerald-200 dark:border-emerald-700 rounded-xl p-6">
							<div class="flex flex-wrap gap-2">
								<span
									v-for="tag in project.tags"
									:key="tag"
									class="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium hover:border-emerald-500 border border-transparent transition-all duration-300">
									{{ tag }}
								</span>
							</div>
						</div>
					</div>

					<!-- Partager -->
					<div data-animate="fade-in" data-delay="600">
						<h3
							class="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
							<Icon
								name="i-heroicons-share"
								class="w-6 h-6 mr-2 text-emerald-500" />
							Partager ce projet
						</h3>
						<div
							class="bg-white dark:bg-slate-800 shadow-md border border-emerald-200 dark:border-emerald-700 rounded-xl p-6">
							<div class="flex justify-center space-x-3">
								<button
									class="p-3 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-blue-400 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none">
									<Icon name="i-simple-icons-twitter" class="w-5 h-5" />
								</button>
								<button
									class="p-3 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none">
									<Icon name="i-simple-icons-linkedin" class="w-5 h-5" />
								</button>
								<button
									class="p-3 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none">
									<Icon name="i-simple-icons-facebook" class="w-5 h-5" />
								</button>
								<button
									@click="copyLink"
									class="p-3 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none">
									<Icon name="i-heroicons-link" class="w-5 h-5" />
								</button>
							</div>
						</div>
					</div>
				</div>

				<!-- CTA Section -->
				<section class="mb-16">
					<div
						class="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg rounded-xl p-8 md:p-12">
						<div class="text-center">
							<h2 class="text-3xl font-bold mb-4">Intéressé par ce projet ?</h2>
							<p class="text-emerald-100 mb-8 max-w-2xl mx-auto">
								Je suis disponible pour discuter de ce projet ou d'autres
								collaborations. N'hésitez pas à me contacter pour en savoir plus
								!
							</p>
							<div class="flex flex-col sm:flex-row gap-4 justify-center">
								<NuxtLink
									to="/contact"
									class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-emerald-700 font-medium rounded-xl hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
									<Icon name="i-heroicons-envelope" class="w-5 h-5" />
									Me contacter
								</NuxtLink>
								<NuxtLink
									to="/projects"
									class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-xl hover:bg-white hover:text-emerald-700 transform hover:scale-105 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
									<Icon name="i-heroicons-arrow-left" class="w-5 h-5" />
									Voir d'autres projets
								</NuxtLink>
							</div>
						</div>
					</div>
				</section>

				<!-- Projets similaires -->
				<section class="mb-16">
					<h2
						class="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
						<Icon
							name="i-heroicons-rectangle-stack"
							class="w-8 h-8 mr-2 text-emerald-500" />
						Projets similaires
					</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<NuxtLink
							v-for="relatedProject in relatedProjects"
							:key="relatedProject.id"
							:to="`/projets/${relatedProject.id}`"
							class="group block bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-emerald-200 dark:border-emerald-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div class="relative h-48 overflow-hidden">
								<NuxtImg
									:src="relatedProject.image"
									:alt="relatedProject.title"
									class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
									format="webp" />
								<div
									class="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</div>
							<div class="p-6">
								<h3
									class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200 mb-2">
									{{ relatedProject.title }}
								</h3>
								<p class="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
									{{ relatedProject.description }}
								</p>
								<span
									class="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
									Voir les détails
									<Icon name="i-heroicons-arrow-right" class="w-4 h-4" />
								</span>
							</div>
						</NuxtLink>
					</div>
				</section>
			</template>

			<!-- Projet non trouvé -->
			<template v-else>
				<div class="text-center py-12">
					<Icon
						name="i-heroicons-exclamation-circle"
						class="w-16 h-16 text-red-500 mx-auto mb-4 animate-pulse" />
					<p class="text-lg text-slate-600 dark:text-slate-400 mb-6">
						Projet non trouvé
					</p>
					<NuxtLink to="/projects">
						<button
							class="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none">
							<Icon name="i-heroicons-arrow-left" class="w-5 h-5" />
							Retour aux projets
						</button>
					</NuxtLink>
				</div>
			</template>
		</div>

		<!-- Lightbox -->
		<div
			v-if="isLightboxOpen"
			class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
			@click="closeLightbox">
			<button
				class="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
				@click="closeLightbox">
				<Icon name="i-heroicons-x-mark" class="w-6 h-6" />
			</button>

			<button
				class="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
				@click.stop="prevLightboxImage">
				<Icon name="i-heroicons-chevron-left" class="w-6 h-6" />
			</button>

			<button
				class="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
				@click.stop="nextLightboxImage">
				<Icon name="i-heroicons-chevron-right" class="w-6 h-6" />
			</button>

			<div class="max-w-5xl max-h-[80vh]">
				<NuxtImg
					:src="projectImages[currentLightboxIndex].src"
					:alt="projectImages[currentLightboxIndex].alt"
					class="max-w-full max-h-full object-contain"
					format="webp" />
				<p class="text-white text-center mt-4">
					{{ projectImages[currentLightboxIndex].alt }}
				</p>
			</div>
		</div>

		<!-- Retour en haut -->
		<button
			v-show="showScrollTop"
			@click="scrollToTop"
			class="fixed bottom-8 right-8 z-40 p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
			<Icon name="i-heroicons-arrow-up" class="w-6 h-6" />
		</button>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { findProjectById, projects, type Project } from "~/data/projects";

const route = useRoute();
const projectId = Array.isArray(route.params.id)
	? route.params.id[0]
	: route.params.id;
const project = computed(() => findProjectById(String(projectId)));

const galleryView = ref<"grid" | "masonry" | "carousel">("masonry");
const currentImageIndex = ref(0);
const isLightboxOpen = ref(false);
const currentLightboxIndex = ref(0);
const showScrollTop = ref(false);

const projectImages = computed(() => {
	if (!project.value || project.value.id !== "2") {
		return Array.from({ length: 4 }, (_, i) => ({
			src: project.value?.image || "",
			alt: `${project.value?.title} - Image ${i + 1}`,
		}));
	}
	return Array.from({ length: 16 }, (_, i) => ({
		src: `/Youdoudou/${i + 1}.png`,
		alt: `Youdoudou Hotel - Vue ${i + 1}`,
	}));
});

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

if (!project.value) {
	throw createError({
		statusCode: 404,
		statusMessage: "Projet non trouvé",
	});
}

function prevImage() {
	currentImageIndex.value =
		(currentImageIndex.value - 1 + projectImages.value.length) %
		projectImages.value.length;
}

function nextImage() {
	currentImageIndex.value =
		(currentImageIndex.value + 1) % projectImages.value.length;
}

function openLightbox(index: number) {
	currentLightboxIndex.value = index;
	isLightboxOpen.value = true;
	document.body.style.overflow = "hidden";
}

function closeLightbox() {
	isLightboxOpen.value = false;
	document.body.style.overflow = "";
}

function prevLightboxImage() {
	currentLightboxIndex.value =
		(currentLightboxIndex.value - 1 + projectImages.value.length) %
		projectImages.value.length;
}

function nextLightboxImage() {
	currentLightboxIndex.value =
		(currentLightboxIndex.value + 1) % projectImages.value.length;
}

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

onMounted(() => {
	window.addEventListener("scroll", handleScroll);

	// Initialize animations
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const element = entry.target as HTMLElement;
					const animation = element.dataset.animate;
					const delay = element.dataset.delay || "0";

					if (animation === "fade-in") {
						element.style.animation = `fadeIn 0.8s ease-out ${delay}ms forwards`;
					} else if (animation === "slide-up") {
						element.style.animation = `slideUp 0.8s ease-out ${delay}ms forwards`;
					} else if (animation === "float") {
						element.style.animation = `float 15s infinite ease-in-out`;
					}

					observer.unobserve(element);
				}
			});
		},
		{ threshold: 0.1 }
	);

	document.querySelectorAll("[data-animate]").forEach((el) => {
		observer.observe(el);
	});
});

onBeforeUnmount(() => {
	window.removeEventListener("scroll", handleScroll);
	document.body.style.overflow = "";
});

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
		{ name: "twitter:card", content: "summary_large_image" },
	],
});
</script>

<style>
@keyframes float {
	0%,
	100% {
		transform: translateY(0) translateX(0);
	}
	50% {
		transform: translateY(-20px) translateX(10px);
	}
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes slideUp {
	from {
		opacity: 0;
		transform: translateY(30px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
