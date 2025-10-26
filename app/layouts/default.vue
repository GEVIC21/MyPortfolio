<template>
	<div
		class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
		<!-- Le header gère son propre centrage avec sa classe 'container' -->
		<AppHeader />

		<!-- Le contenu principal prend toute la largeur disponible -->
		<!-- Les pages individuelles (comme index.vue) géreront leur propre centrage -->
		<main class="flex-grow">
			<slot />
		</main>

		<!-- Le footer gère aussi son propre centrage -->
		<AppFooter />
	</div>
</template>

<script setup lang="ts">
// Les imports sont automatiques avec Nuxt, mais les garder est une bonne pratique
import AppHeader from "~/components/common/AppHeader.vue";
import AppFooter from "~/components/common/AppFooter.vue";

// Gestion d'erreur pour le débogage
onErrorCaptured((err) => {
	console.error("Erreur dans le layout:", err);
	return false;
});
</script>

<!-- Pas besoin de styles ici, tout est géré par Tailwind et les composants -->
