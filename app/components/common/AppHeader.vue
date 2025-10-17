<!-- app/components/AppHeader.vue -->
<template>
	<header
		ref="header"
		class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
		:class="[
			scrolled
				? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-md border-b border-gray-200/50 dark:border-gray-700/50'
				: 'bg-transparent dark:bg-transparent',
		]">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center py-4 md:py-6">
				<!-- Logo et Nom du site -->
				<NuxtLink
					to="/"
					class="flex items-center gap-3"
					@mouseenter="logoHovered = true"
					@mouseleave="logoHovered = false">
					<UAvatar
						icon="i-heroicons-rocket-launch"
						size="md"
						color="primary"
						variant="solid"
						:class="[
							'transition-transform duration-300',
							logoHovered ? 'scale-110 rotate-12' : '',
						]" />
					<span
						class="font-bold text-xl md:text-2xl bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
						Mon Portfolio
					</span>
				</NuxtLink>

				<!-- Navigation principale (Desktop) -->
				<nav class="hidden lg:flex items-center space-x-1">
					<NuxtLink
						v-for="(item, index) in navItems"
						:key="item.to"
						:to="item.to"
						class="relative px-4 py-2 font-medium transition-all duration-200"
						:class="[
							route.path === item.to
								? 'text-primary-600 dark:text-primary-400'
								: 'text-gray-700 dark:text-gray-300',
						]"
						@mouseenter="activeNavItem = index"
						@mouseleave="activeNavItem = null">
						{{ $t(item.label) }}
						<span
							class="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400 transform -translate-x-1/2 transition-all duration-300 ease-out"
							:class="[
								route.path === item.to
									? 'w-full'
									: activeNavItem === index
										? 'w-full'
										: 'w-0',
							]">
						</span>
					</NuxtLink>
				</nav>

				<!-- Actions à droite -->
				<div class="flex items-center gap-2">
					<!-- Liens sociaux (Desktop) -->
					<div class="hidden md:flex items-center gap-1">
						<UButton
							v-for="(link, index) in socialLinks"
							:key="link.label"
							:to="link.to"
							:icon="link.icon"
							target="_blank"
							rel="noopener noreferrer"
							variant="ghost"
							color="gray"
							size="sm"
							:class="[
								'transition-all duration-200',
								hoveredSocialLink === index
									? 'scale-110 text-gray-900 dark:text-white'
									: '',
							]"
							@mouseenter="hoveredSocialLink = index"
							@mouseleave="hoveredSocialLink = null" />
					</div>

					<!-- Utilisation du composant LangSwitcher pour desktop -->
					<LangSwitcher size="sm" variant="ghost" />

					<!-- Bouton de changement de thème -->
					<ThemeToggle />

					<!-- Bouton CTA principal -->
					<UButton
						:label="$t('contact')"
						to="/contact"
						variant="solid"
						color="primary"
						size="sm"
						class="hidden sm:flex transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5" />

					<!-- Menu mobile -->
					<UButton
						icon="i-heroicons-bars-3"
						variant="ghost"
						color="gray"
						size="sm"
						class="lg:hidden"
						@click="toggleMobileMenu"
						:class="{
							'text-primary-600 dark:text-primary-400': showMobileMenu,
						}" />
				</div>
			</div>
		</div>

		<Transition
			enter-active-class="transition duration-300 ease-out"
			enter-from-class="transform -translate-y-2 opacity-0"
			enter-to-class="transform translate-y-0 opacity-100"
			leave-active-class="transition duration-200 ease-in"
			leave-from-class="transform translate-y-0 opacity-100"
			leave-to-class="transform -translate-y-2 opacity-0">
			<div
				v-if="showMobileMenu"
				class="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200/50 dark:border-gray-700/50">
				<div class="container mx-auto px-4 py-4 space-y-2">
					<NuxtLink
						v-for="item in navItems"
						:key="item.to"
						:to="item.to"
						class="flex items-center justify-between py-3 px-4 rounded-lg font-medium transition-all duration-200"
						:class="[
							route.path === item.to
								? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
								: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800',
						]"
						@click="showMobileMenu = false">
						<span>{{ $t(item.label) }}</span>
						<UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
					</NuxtLink>

					<div
						class="flex items-center justify-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
						<UButton
							v-for="link in socialLinks"
							:key="link.label"
							:to="link.to"
							:icon="link.icon"
							target="_blank"
							rel="noopener noreferrer"
							variant="ghost"
							color="gray"
							size="sm"
							class="transition-all duration-200 hover:scale-110 hover:text-primary-500" />
					</div>

					<div class="pt-2">
						<LangSwitcher size="md" variant="outline" class="w-full" />
					</div>

					<div class="pt-2">
						<UButton
							:label="$t('contact')"
							variant="solid"
							color="primary"
							size="md"
							block
							class="transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
							@click="showMobileMenu = false" />
					</div>
				</div>
			</div>
		</Transition>
	</header>
</template>

<script setup lang="ts">
const route = useRoute();
const showMobileMenu = ref(false);
const header = ref<HTMLElement | null>(null);
const scrolled = ref(false);

// États pour remplacer les fonctionnalités de 'group'
const logoHovered = ref(false);
const activeNavItem = ref<number | null>(null);
const hoveredSocialLink = ref<number | null>(null);

const handleScroll = () => {
	scrolled.value = window.scrollY > 20;
};

const toggleMobileMenu = () => {
	showMobileMenu.value = !showMobileMenu.value;
	if (showMobileMenu.value) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "";
	}
};

const handleClickOutside = (event: MouseEvent) => {
	if (
		showMobileMenu.value &&
		header.value &&
		!header.value.contains(event.target as Node)
	) {
		showMobileMenu.value = false;
		document.body.style.overflow = "";
	}
};

watch(
	() => route.path,
	() => {
		showMobileMenu.value = false;
		document.body.style.overflow = "";
	}
);

// CORRECTION ICI : Utiliser les clés "plates"
const navItems = [
	{ label: "home", to: "/" },
	{ label: "projects", to: "/projects" },
	{ label: "about", to: "/about" },
];

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

onMounted(() => {
	window.addEventListener("scroll", handleScroll);
	document.addEventListener("click", handleClickOutside);
	handleScroll();
});

onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll);
	document.removeEventListener("click", handleClickOutside);
	document.body.style.overflow = "";
});
</script>

<style scoped>
/* Animation personnalisée pour le gradient du titre */
@keyframes gradient-shift {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.bg-gradient-to-r {
	background-size: 200% 200%;
	animation: gradient-shift 8s ease infinite;
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
	.bg-gradient-to-r {
		animation: none !important;
	}
}
</style>
