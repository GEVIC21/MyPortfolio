<template>
	<UContainer>
		<UPageHero
			title="À Propos de Moi"
			description="Développeur passionné, curieux et toujours en quête de nouvelles technologies à maîtriser." />

		<div class="py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
			<!-- Photo et CTA -->
			<div class="lg:col-span-1">
				<NuxtImg
					src="/photo-profil.jpg"
					alt="Photo de profil"
					class="w-full rounded-2xl shadow-xl mb-6"
					format="webp" />
				<UButton
					to="/cv.pdf"
					icon="i-heroicons-document-arrow-down"
					variant="outline"
					size="lg"
					block
					target="_blank">
					Télécharger mon CV
				</UButton>
			</div>

			<!-- Texte -->
			<div class="lg:col-span-2 space-y-6">
				<div>
					<h2 class="text-2xl font-bold mb-3">Mon Parcours</h2>
					<p class="text-gray-600 dark:text-gray-400 leading-relaxed">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
						lacinia odio vitae vestibulum. Donec auctor a lacus in tincidunt.
						Proin blandit, tortor at ultrices tincidunt, elit sapien facilisis
						lectus, a accumsan nulla nulla a ligula.
					</p>
				</div>
				<div>
					<h2 class="text-2xl font-bold mb-3">Mes Compétences</h2>
					<div class="flex flex-wrap gap-2">
						<UBadge
							v-for="skill in skills"
							:key="skill"
							size="lg"
							variant="soft">
							{{ skill }}
						</UBadge>
					</div>
				</div>
			</div>
		</div>
	</UContainer>
</template>

<script setup lang="ts">
const skills = [
	"JavaScript",
	"TypeScript",
	"Vue.js",
	"Nuxt.js",
	"React",
	"Node.js",
	"Tailwind CSS",
	"Git",
	"GraphQL",
	"Supabase",
];

useHead({
	title: "À Propos - Mon Portfolio",
	meta: [
		{
			name: "description",
			content:
				"En savoir plus sur mon parcours, mes compétences et mes passions.",
		},
	],
});
</script>
