<template>
	<UFooter>
		<template #left>
			<!-- On garde le copyright mais on le rend un peu plus personnel -->
			<p class="text-gray-500 dark:text-gray-400 text-sm">
				© {{ new Date().getFullYear() }} Mon Portfolio. Fait avec ❤️ et Nuxt.
			</p>
		</template>

		<!-- On utilise le slot central pour les liens de navigation principaux -->
		<template #center>
			<nav class="flex gap-x-4">
				<UButton to="/projects" variant="ghost" size="sm"> Projets </UButton>
				<UButton to="/about" variant="ghost" size="sm"> À propos </UButton>
				<UButton to="/contact" variant="ghost" size="sm"> Contact </UButton>
			</nav>
		</template>

		<!-- Le slot droit est parfait pour les réseaux sociaux et les actions -->
		<template #right>
			<div class="flex items-center gap-2">
				<!-- Liens vers les réseaux sociaux avec des icônes -->
				<UButton
					to="https://github.com/VOTRE_PSEUDO"
					target="_blank"
					variant="ghost"
					color="gray"
					size="sm"
					icon="i-simple-icons-github"
					aria-label="Lien vers mon profil GitHub" />
				<UButton
					to="https://linkedin.com/in/VOTRE_PROFIL"
					target="_blank"
					variant="ghost"
					color="gray"
					size="sm"
					icon="i-simple-icons-linkedin"
					aria-label="Lien vers mon profil LinkedIn" />
				<UButton
					to="https://twitter.com/VOTRE_PSEUDO"
					target="_blank"
					variant="ghost"
					color="gray"
					size="sm"
					icon="i-simple-icons-x"
					aria-label="Lien vers mon profil X (Twitter)" />

				<!-- Un séparateur visuel élégant -->
				<UDivider orientation="vertical" class="h-6" />

				<!-- Bouton pour remonter en haut de la page -->
				<UButton
					@click="scrollToTop"
					variant="ghost"
					color="gray"
					size="sm"
					icon="i-heroicons-arrow-up"
					aria-label="Retour en haut de la page" />
			</div>
		</template>
	</UFooter>
</template>

<script setup lang="ts">
// Fonction pour remonter en haut de la page avec un défilement fluide
const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};
</script>
