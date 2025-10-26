<!-- app/components/AppFooter.vue -->
<template>
	<footer
		class="relative bg-emerald-900 border-t border-emerald-700/50 overflow-hidden">
		<!-- Éléments décoratifs en arrière-plan -->
		<div class="absolute inset-0 overflow-hidden pointer-events-none">
			<div
				class="absolute -bottom-40 -right-40 w-80 h-80 bg-emerald-700/20 rounded-full blur-3xl"></div>
			<div
				class="absolute -top-20 -left-20 w-60 h-60 bg-teal-700/20 rounded-full blur-3xl"></div>

			<!-- Particules animées subtilles -->
			<div class="absolute inset-0">
				<div
					v-for="i in 15"
					:key="i"
					class="absolute rounded-full bg-emerald-400/10 animate-pulse"
					:style="`width: ${Math.random() * 4 + 2}px; height: ${
						Math.random() * 4 + 2
					}px; top: ${Math.random() * 100}%; left: ${
						Math.random() * 100
					}%; animation-delay: ${Math.random() * 5}s; animation-duration: ${
						3 + Math.random() * 4
					}s;`"></div>
			</div>
		</div>

		<!-- Section principale du footer -->
		<div
			class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
			<div
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
				<!-- Colonne 1: Informations sur le portfolio -->
				<div class="space-y-4">
					<div class="flex items-center gap-3 mb-4">
						<UAvatar
							src="/Profile3.png"
							alt="Photo de profil de NDILBE DOUVIC TOYOUM"
							size="lg"
							:ui="{ background: 'bg-stone-100' }"
							variant="solid"
							class="shadow-lg" />
						<div>
							<h3 class="font-serif font-bold text-xl text-white">
								NDILBE DOUVIC
							</h3>
							<p class="text-emerald-200 text-sm">Full Stack Developer</p>
						</div>
					</div>
					<p class="text-emerald-100 text-sm leading-relaxed">
						Passionné par la création d'expériences numériques innovantes qui
						allient design élégant et fonctionnalité robuste.
					</p>
					<div class="flex gap-3 pt-2">
						<UButton
							v-for="(link, index) in socialLinks"
							:key="link.label"
							:to="link.to"
							:icon="link.icon"
							target="_blank"
							rel="noopener noreferrer"
							variant="ghost"
							color="emerald"
							size="sm"
							class="text-emerald-200 hover:text-white hover:bg-emerald-700/30 transition-all duration-300 transform hover:scale-110"
							:style="`animation-delay: ${index * 0.1}s`"
							:aria-label="`Visiter mon profil ${link.label}`" />
					</div>
				</div>

				<!-- Colonne 2: Navigation rapide -->
				<div class="space-y-4">
					<h3 class="text-white font-semibold text-lg mb-4 relative">
						Navigation
						<span
							class="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></span>
					</h3>
					<nav class="space-y-2">
						<NuxtLink
							v-for="item in navItems"
							:key="item.to"
							:to="item.to"
							class="flex items-center gap-2 text-emerald-100 hover:text-white transition-all duration-300 py-1 group">
							<UIcon
								:name="item.icon"
								class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
							<span>{{ $t(item.label) }}</span>
						</NuxtLink>
					</nav>
				</div>

				<!-- Colonne 3: Services -->
				<div class="space-y-4">
					<h3 class="text-white font-semibold text-lg mb-4 relative">
						Services
						<span
							class="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></span>
					</h3>
					<nav class="space-y-2">
						<NuxtLink
							v-for="service in services"
							:key="service.to"
							:to="service.to"
							class="flex items-center gap-2 text-emerald-100 hover:text-white transition-all duration-300 py-1 group">
							<UIcon
								:name="service.icon"
								class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
							<span>{{ $t(service.label) }}</span>
						</NuxtLink>
					</nav>
				</div>

				<!-- Colonne 4: Newsletter -->
				<div class="space-y-4">
					<h3 class="text-white font-semibold text-lg mb-4 relative">
						Newsletter
						<span
							class="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></span>
					</h3>
					<p class="text-emerald-100 text-sm mb-4">
						Abonnez-vous pour recevoir les dernières mises à jour et actualités.
					</p>
					<form @submit.prevent="subscribeNewsletter" class="space-y-3">
						<UInput
							v-model="email"
							type="email"
							placeholder="Votre adresse e-mail"
							size="sm"
							class="w-full"
							:ui="{
								background: 'bg-emerald-800/50',
								color: 'text-emerald-100',
							}" />
						<UButton
							type="submit"
							size="sm"
							class="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium transition-all duration-300 transform hover:-translate-y-0.5">
							S'abonner
						</UButton>
					</form>
					<p
						v-if="subscriptionMessage"
						class="text-emerald-200 text-xs mt-2 animate-pulse">
						{{ subscriptionMessage }}
					</p>
				</div>
			</div>

			<!-- Séparateur avec motif décoratif -->
			<div class="relative my-8 lg:my-12">
				<div class="absolute inset-0 flex items-center">
					<div class="w-full border-t border-emerald-700/30"></div>
				</div>
				<div class="relative flex justify-center">
					<div class="bg-emerald-900 px-4 flex items-center gap-2">
						<div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
						<div class="w-2 h-2 bg-teal-400 rounded-full"></div>
						<div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
					</div>
				</div>
			</div>

			<!-- Section inférieure avec copyright et liens supplémentaires -->
			<div class="flex flex-col md:flex-row justify-between items-center gap-4">
				<p class="text-emerald-200 text-sm">
					© {{ new Date().getFullYear() }} NDILBE DOUVIC. Fait avec ❤️ et Nuxt.
				</p>

				<div class="flex items-center gap-4">
					<NuxtLink
						to="/privacy"
						class="text-emerald-200 hover:text-white text-sm transition-colors duration-300">
						Confidentialité
					</NuxtLink>
					<NuxtLink
						to="/terms"
						class="text-emerald-200 hover:text-white text-sm transition-colors duration-300">
						Conditions d'utilisation
					</NuxtLink>
					<UButton
						@click="scrollToTop"
						variant="ghost"
						color="emerald"
						size="sm"
						icon="i-heroicons-arrow-up"
						class="text-emerald-200 hover:text-white hover:bg-emerald-700/30 transition-all duration-300 transform hover:scale-110"
						aria-label="Retour en haut de la page" />
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

// État pour le formulaire de newsletter
const email = ref("");
const subscriptionMessage = ref("");

// Fonction pour s'abonner à la newsletter
const subscribeNewsletter = () => {
	if (!email.value) return;

	// Simulation d'envoi de formulaire
	subscriptionMessage.value = "Inscription en cours...";

	setTimeout(() => {
		subscriptionMessage.value = "Merci pour votre inscription !";
		email.value = "";

		// Réinitialiser le message après 3 secondes
		setTimeout(() => {
			subscriptionMessage.value = "";
		}, 3000);
	}, 1000);
};

// Fonction pour remonter en haut de la page avec un défilement fluide
const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

// Liens de navigation
const navItems = [
	{ label: "home", to: "/", icon: "i-heroicons-home" },
	{ label: "projects", to: "/projects", icon: "i-heroicons-folder" },
	{ label: "about", to: "/about", icon: "i-heroicons-user" },
	{ label: "contact", to: "/contact", icon: "i-heroicons-envelope" },
];

// Services proposés
const services = [
	{
		label: "web_development",
		to: "/services/web-development",
		icon: "i-heroicons-code-bracket",
	},
	{
		label: "ui_design",
		to: "/services/ui-design",
		icon: "i-heroicons-paint-brush",
	},
	{
		label: "consulting",
		to: "/services/consulting",
		icon: "i-heroicons-light-bulb",
	},
	{
		label: "maintenance",
		to: "/services/maintenance",
		icon: "i-heroicons-wrench-screwdriver",
	},
];

// Liens vers les réseaux sociaux
const socialLinks = [
	{
		label: "GitHub",
		to: "https://github.com/VOTRE_PSEUDO",
		icon: "i-simple-icons-github",
	},
	{
		label: "LinkedIn",
		to: "https://linkedin.com/in/VOTRE_PROFIL",
		icon: "i-simple-icons-linkedin",
	},
	{
		label: "Twitter / X",
		to: "https://twitter.com/VOTRE_PSEUDO",
		icon: "i-simple-icons-x",
	},
];
</script>

<style scoped>
/* Animation pour les particules en arrière-plan */
@keyframes float {
	0%,
	100% {
		transform: translateY(0) translateX(0);
	}
	25% {
		transform: translateY(-10px) translateX(5px);
	}
	50% {
		transform: translateY(5px) translateX(-5px);
	}
	75% {
		transform: translateY(-5px) translateX(10px);
	}
}

/* Amélioration des focus states pour l'accessibilité */
button:focus-visible,
a:focus-visible {
	outline: 2px solid rgba(255, 255, 255, 0.8);
	outline-offset: 2px;
	border-radius: 4px;
}

/* Accessibilité : respecter les préférences de mouvement */
@media (prefers-reduced-motion: reduce) {
	.transition-all,
	.transition-transform,
	.transition-opacity,
	.transition-colors,
	.transition-duration {
		transition: none !important;
	}
	.animate-pulse {
		animation: none !important;
	}
}
</style>
