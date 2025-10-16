<template>
	<div>
		<!-- Hero Section -->
		<section id="accueil" class="min-h-screen flex items-center justify-center">
			<UPageHero
				title="Bonjour, je suis [Votre Nom]"
				description="Développeur Web passionné par la création d'applications modernes, performantes et élégantes."
				:links="[
					{
						label: 'Voir mes projets',
						to: '#projets',
						color: 'primary',
						size: 'xl',
						trailingIcon: 'i-heroicons-arrow-right-20-solid',
					},
				]" />
		</section>

		<!-- Featured Projects Section -->
		<section id="projets" class="py-20 bg-gray-50 dark:bg-gray-900">
			<UContainer>
				<div class="text-center mb-12">
					<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
						Projets en Vedette
					</h2>
					<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Découvrez une sélection de mes travaux les plus récents et dont je
						suis le plus fier.
					</p>
				</div>
				<TheProjectsList :projects="featuredProjects" />
				<div class="text-center mt-12">
					<UButton
						to="/projects"
						variant="outline"
						size="lg"
						trailing-icon="i-heroicons-squares-2x2">
						Voir tous les projets
					</UButton>
				</div>
			</UContainer>
		</section>

		<!-- About Section -->
		<section id="a-propos" class="py-20">
			<UContainer>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div>
						<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
							Plus qu'un développeur, un créateur de solutions.
						</h2>
						<p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
							Avec une expertise en JavaScript et ses écosystèmes modernes, je
							transforme les idées en expériences web robustes et intuitives.
							Mon approche allie design propre, performance et maintenabilité.
						</p>
						<UButton
							to="/about"
							variant="solid"
							color="primary"
							size="lg"
							trailing-icon="i-heroicons-arrow-right">
							En savoir plus sur moi
						</UButton>
					</div>
					<div class="grid grid-cols-2 gap-4">
						<NuxtImg
							src="https://picsum.photos/seed/code1/300/200.jpg"
							alt="Code 1"
							class="rounded-lg shadow-lg"
							format="webp" />
						<NuxtImg
							src="https://picsum.photos/seed/code2/300/200.jpg"
							alt="Code 2"
							class="rounded-lg shadow-lg mt-8"
							format="webp" />
					</div>
				</div>
			</UContainer>
		</section>

		<!-- Contact CTA Section -->
		<section class="py-20 bg-primary-600 dark:bg-primary-800">
			<UContainer>
				<div class="text-center">
					<h2 class="text-3xl font-bold text-white mb-4">
						Prêt à collaborer ?
					</h2>
					<p class="text-lg text-primary-100 mb-8">
						Si vous avez un projet en tête, n'hésitez pas à me contacter pour en
						discuter.
					</p>
					<UButton
						to="/contact"
						variant="solid"
						color="white"
						size="lg"
						icon="i-heroicons-envelope">
						Me contacter
					</UButton>
				</div>
			</UContainer>
		</section>
	</div>
</template>

<script setup lang="ts">
import { projects } from "~/data/projects";
import type { Project } from "~/types/portfolio";

// SEO
useHead({
	title: "Accueil - Mon Portfolio",
	meta: [
		{
			name: "description",
			content:
				"Développeur Web passionné par la création d'applications modernes.",
		},
	],
});

// Filtrer les projets featured
const featuredProjects = computed(() => projects.filter((p) => p.featured));

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
