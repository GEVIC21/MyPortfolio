<template>
	<button
		@click="toggleColorMode"
		:class="buttonClasses"
		class="relative inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
		:aria-label="`Switch to ${nextMode} mode`">
		<!-- Icônes avec animation de rotation -->
		<Transition
			enter-active-class="transition-all duration-300 ease-out"
			enter-from-class="opacity-0 rotate-180 scale-50"
			enter-to-class="opacity-100 rotate-0 scale-100"
			leave-active-class="transition-all duration-300 ease-in"
			leave-from-class="opacity-100 rotate-0 scale-100"
			leave-to-class="opacity-0 -rotate-180 scale-50"
			mode="out-in">
			<!-- Icône Soleil (visible en mode sombre) -->
			<UIcon
				v-if="$colorMode.value === 'dark'"
				key="sun"
				name="i-heroicons-sun-20-solid"
				class="w-5 h-5 text-yellow-400" />

			<!-- Icône Lune (visible en mode clair) -->
			<UIcon
				v-else
				key="moon"
				name="i-heroicons-moon-20-solid"
				class="w-5 h-5 text-slate-700" />
		</Transition>

		<!-- Effet de halo animé -->
		<span
			class="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 dark:from-blue-400 dark:to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md">
		</span>
	</button>
</template>

<script setup lang="ts">
// Calcul des classes dynamiques pour le bouton
const buttonClasses = computed(() => {
	const base =
		"group bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700";
	return base;
});

// Accès au color mode via Nuxt
const colorMode = useColorMode();

// Calcul du prochain mode pour l'accessibilité
const nextMode = computed(() => {
	return colorMode.value === "dark" ? "light" : "dark";
});

// Fonction de bascule
const toggleColorMode = () => {
	colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>
