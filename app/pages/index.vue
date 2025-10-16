<template>
	<UPageHero
		title="Bonjour, je suis [Votre Nom]"
		description="Développeur Web passionné par la création d'applications modernes, performantes et élégantes."
		:links="[
			{
				label: 'Voir mes projets',
				to: '/projects',
				color: 'primary',
				size: 'xl',
				trailingIcon: 'i-heroicons-arrow-right-20-solid',
			},
		]" />
</template>

<script setup lang="ts">
definePageMeta({
	layout: "default",
});
</script>
