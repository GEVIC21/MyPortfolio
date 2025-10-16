<template>
	<div class="min-h-screen flex flex-col">
		<!-- On utilise notre nouveau composant AppHeader -->
		<AppHeader />

		<!-- Le contenu principal reste inchangé -->
		<main class="flex-grow">
			<UContainer class="py-8">
				<slot />
			</UContainer>
		</main>

		<!-- On utilise notre nouveau composant AppFooter -->
		<AppFooter />
	</div>
</template>

<script setup lang="ts">
// Importation explicite des composants
import AppHeader from "~/components/common/AppHeader.vue";
import AppFooter from "~/components/common/AppFooter.vue";

// Gestion d'erreur pour le débogage
onErrorCaptured((err) => {
	console.error("Erreur dans le layout:", err);
	return false; // Prevent the error from propagating further
});
</script>

<style scoped>
/* Les styles sont principalement gérés par Tailwind CSS et les classes de Nuxt UI. */
</style>
