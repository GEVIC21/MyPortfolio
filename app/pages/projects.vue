<template>
	<UContainer>
		<UPageHero
			title="Tous mes Projets"
			description="Une sélection de travaux personnels et professionnels qui illustrent mes compétences et ma passion pour le développement web." />

		<div class="py-12">
			<TheProjectsList :projects="projects" />
		</div>
	</UContainer>
</template>

<script setup lang="ts">
import { projects } from "~/data/projects";

// SEO
useHead({
	title: "Projets - Mon Portfolio",
	meta: [
		{
			name: "description",
			content:
				"Découvrez l'ensemble de mes projets réalisés avec passion et expertise.",
		},
	],
});
</script>
