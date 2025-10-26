<!-- app/components/AppHeader.vue -->
<template>
	<header
		ref="header"
		class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
		:class="[
			scrolled
				? 'bg-emerald-800/95 backdrop-blur-2xl shadow-xl border-b border-emerald-700/30 py-2'
				: 'bg-gradient-to-r from-emerald-700/95 via-teal-700/90 to-emerald-800/95 backdrop-blur-md py-4',
		]">
		<!-- Effet de pluie subtil amélioré -->
		<div class="absolute inset-0 overflow-hidden pointer-events-none">
			<div class="rain-container">
				<div
					v-for="i in 20"
					:key="i"
					class="rain-drop"
					:style="`--delay: ${Math.random() * 2}s; --duration: ${
						1 + Math.random() * 2
					}s;`"></div>
			</div>
		</div>

		<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
			<!-- Hauteur du header avec transition fluide -->
			<div
				class="flex justify-between items-center transition-all duration-500"
				:class="[scrolled ? 'py-2' : 'py-4 md:py-6']">
				<!-- Logo et Nom du site avec animation améliorée -->
				<NuxtLink
					to="/"
					class="flex items-center gap-3 group"
					aria-label="Retour à l'accueil">
					<UAvatar
						src="/Profile3.png"
						alt="Photo de profil de NDILBE DOUVIC TOYOUM"
						:size="scrolled ? 'lg' : '3xl'"
						:ui="{ background: 'bg-stone-100' }"
						variant="solid"
						class="transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-emerald-400/50" />
					<div
						class="flex flex-col transition-all duration-500"
						:class="[scrolled ? 'scale-90' : 'scale-100']">
						<span
							class="font-serif font-bold transition-all duration-500 bg-gradient-to-r from-stone-100 to-emerald-100 bg-clip-text text-transparent"
							:class="[
								scrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl',
							]">
							NDILBE DOUVIC TOYOUM
						</span>
						<span
							class="text-xs font-light text-stone-300 transition-all duration-500"
							:class="[scrolled ? 'opacity-80' : 'opacity-100']">
							full stack developper
						</span>
					</div>
				</NuxtLink>

				<!-- Navigation principale (Desktop) avec indicateurs de section active -->
				<nav class="hidden lg:flex items-center space-x-1">
					<NuxtLink
						v-for="(item, index) in navItems"
						:key="item.to"
						:to="item.to"
						class="relative px-4 py-2 font-medium transition-all duration-300 text-stone-200 hover:text-white group"
						:class="[route.path === item.to ? 'text-white' : '']"
						@mouseenter="activeNavItem = index"
						@mouseleave="activeNavItem = null">
						<span class="relative z-10">{{ $t(item.label) }}</span>
						<!-- Indicateur de section active amélioré -->
						<span
							class="absolute bottom-0 left-0 h-full bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-lg transform transition-all duration-300 ease-out"
							:class="[
								route.path === item.to
									? 'w-full opacity-100'
									: activeNavItem === index
									? 'w-full opacity-60'
									: 'w-0 opacity-0',
							]">
						</span>
						<!-- Ligne inférieure -->
						<span
							class="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-stone-300 to-white transform -translate-x-1/2 transition-all duration-300 ease-out"
							:class="[
								route.path === item.to
									? 'w-full'
									: activeNavItem === index
									? 'w-3/4'
									: 'w-0',
							]">
						</span>
					</NuxtLink>
				</nav>

				<!-- Actions à droite avec animations améliorées -->
				<div class="flex items-center gap-2 pr-2 sm:pr-0">
					<!-- Bouton de menu mobile avec animation améliorée -->
					<UButton
						icon="i-heroicons-bars-3"
						variant="ghost"
						color="stone"
						:size="scrolled ? 'sm' : 'md'"
						class="lg:hidden text-stone-200 hover:text-white p-3 transition-all duration-300"
						:class="{
							'text-white rotate-90': showMobileMenu,
						}"
						@click="toggleMobileMenu"
						aria-label="Ouvrir le menu" />

					<!-- Bouton de changement de thème avec effet de rotation -->
					<ThemeToggle
						class="text-stone-300 hover:text-white transition-all duration-300 hover:rotate-180" />

					<!-- Liens sociaux avec effet de flottement -->
					<div class="hidden md:flex items-center gap-1">
						<UButton
							v-for="(link, index) in socialLinks"
							:key="link.label"
							:to="link.to"
							:icon="link.icon"
							target="_blank"
							rel="noopener noreferrer"
							variant="ghost"
							color="stone"
							:size="scrolled ? 'xs' : 'sm'"
							:class="[
								'transition-all duration-300 text-stone-300 hover:text-white hover:bg-white/10',
								hoveredSocialLink === index ? 'scale-110 -translate-y-1' : '',
							]"
							@mouseenter="hoveredSocialLink = index"
							@mouseleave="hoveredSocialLink = null"
							:aria-label="`Visiter mon profil ${link.label}`" />
					</div>

					<!-- LangSwitcher avec animation de transition -->
					<LangSwitcher
						:size="scrolled ? 'xs' : 'sm'"
						variant="ghost"
						color="stone"
						class="hidden md:block text-stone-300 hover:text-white transition-all duration-300" />

					<!-- Bouton CTA principal avec effet de pulsation subtil -->
					<UButton
						:label="$t('contact')"
						to="/contact"
						variant="solid"
						:size="scrolled ? 'xs' : 'sm'"
						class="hidden sm:flex transition-all duration-300 hover:shadow-lg hover:shadow-stone-400/50 hover:-translate-y-0.5 bg-stone-100 text-emerald-900 hover:bg-stone-200 font-semibold relative overflow-hidden group">
						<span class="relative z-10">{{ $t("contact") }}</span>
						<span
							class="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
					</UButton>
				</div>
			</div>
		</div>

		<!-- Menu mobile avec animation de glissement améliorée -->
		<Transition
			enter-active-class="transition-all duration-500 ease-out"
			enter-from-class="transform -translate-y-full opacity-0"
			enter-to-class="transform translate-y-0 opacity-100"
			leave-active-class="transition-all duration-300 ease-in"
			leave-from-class="transform translate-y-0 opacity-100"
			leave-to-class="transform -translate-y-full opacity-0">
			<div
				v-if="showMobileMenu"
				class="lg:hidden bg-emerald-900/95 backdrop-blur-lg border-t border-emerald-700/30">
				<div class="container mx-auto px-4 py-4 space-y-2">
					<NuxtLink
						v-for="(item, index) in navItems"
						:key="item.to"
						:to="item.to"
						class="flex items-center justify-between py-3 px-4 rounded-lg font-medium transition-all duration-300 text-stone-300 hover:bg-emerald-800/50 hover:text-white transform hover:translate-x-2"
						:class="[
							route.path === item.to
								? 'bg-emerald-800/50 text-white border-l-4 border-emerald-400'
								: '',
						]"
						@click="showMobileMenu = false"
						:style="`--delay: ${index * 0.1}s`">
						<span>{{ $t(item.label) }}</span>
						<UIcon
							name="i-heroicons-arrow-right"
							class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
					</NuxtLink>

					<div
						class="flex items-center justify-center gap-4 pt-4 border-t border-emerald-700/30">
						<UButton
							v-for="link in socialLinks"
							:key="link.label"
							:to="link.to"
							:icon="link.icon"
							target="_blank"
							rel="noopener noreferrer"
							variant="ghost"
							color="stone"
							size="sm"
							class="transition-all duration-300 hover:scale-110 text-stone-300 hover:text-white"
							:aria-label="`Visiter mon profil ${link.label}`" />
					</div>

					<div class="pt-2">
						<LangSwitcher
							size="md"
							variant="outline"
							color="stone"
							class="w-full text-stone-300" />
					</div>

					<div class="pt-2">
						<UButton
							:label="$t('contact')"
							variant="solid"
							size="md"
							block
							class="transition-all duration-300 hover:shadow-lg hover:shadow-stone-400/50 bg-stone-100 text-emerald-900 hover:bg-stone-200 font-semibold"
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
const lastScrollY = ref(0);
const scrollDirection = ref<"up" | "down">("up");
const headerHeight = ref(0);

// États pour remplacer les fonctionnalités de 'group'
const logoHovered = ref(false);
const activeNavItem = ref<number | null>(null);
const hoveredSocialLink = ref<number | null>(null);

const handleScroll = () => {
	const currentScrollY = window.scrollY;
	scrollDirection.value = currentScrollY > lastScrollY.value ? "down" : "up";
	lastScrollY.value = currentScrollY;

	// Seuil de scroll réduit pour une réactivité accrue
	scrolled.value = currentScrollY > 10;

	// Masquer le header lors du scroll vers le bas et le réafficher lors du scroll vers le haut
	if (header.value) {
		if (scrollDirection.value === "down" && currentScrollY > 100) {
			header.value.style.transform = "translateY(-100%)";
		} else {
			header.value.style.transform = "translateY(0)";
		}
	}
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

// Exposer la hauteur du header pour les autres composants
const updateHeaderHeight = () => {
	if (header.value) {
		headerHeight.value = header.value.offsetHeight;
	}
};

watch(
	() => route.path,
	() => {
		showMobileMenu.value = false;
		document.body.style.overflow = "";
	}
);

watch(scrolled, () => {
	updateHeaderHeight();
});

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
	window.addEventListener("scroll", handleScroll, { passive: true });
	document.addEventListener("click", handleClickOutside);
	handleScroll();
	updateHeaderHeight();

	// Observer les changements de taille du header
	const resizeObserver = new ResizeObserver(updateHeaderHeight);
	if (header.value) {
		resizeObserver.observe(header.value);
	}

	// Nettoyer l'observer à la destruction du composant
	onUnmounted(() => {
		resizeObserver.disconnect();
	});
});

onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll);
	document.removeEventListener("click", handleClickOutside);
	document.body.style.overflow = "";
});

// Exposer la hauteur du header pour les autres composants
defineExpose({
	headerHeight,
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

/* Effet de pluie amélioré avec gouttes individuelles */
.rain-container {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
}

.rain-drop {
	position: absolute;
	top: -10px;
	left: 5%;
	width: 2px;
	height: 15px;
	background: linear-gradient(
		to bottom,
		transparent,
		rgba(255, 255, 255, 0.1),
		transparent
	);
	animation: rain-fall var(--duration) linear infinite;
	animation-delay: var(--delay);
	opacity: 0.4;
}

@keyframes rain-fall {
	0% {
		transform: translateY(0);
		opacity: 0;
	}
	10% {
		opacity: 0.4;
	}
	90% {
		opacity: 0.4;
	}
	100% {
		transform: translateY(100vh);
		opacity: 0;
	}
}

/* Effet de feuille animée amélioré */
.rain-container::before {
	content: "";
	position: absolute;
	top: -10px;
	left: 10%;
	width: 10px;
	height: 10px;
	background-color: rgba(134, 239, 172, 0.2);
	border-radius: 0 100% 0 100%;
	animation: falling 10s linear infinite;
}

@keyframes falling {
	0% {
		transform: translateY(0) rotate(0deg);
		opacity: 0;
	}
	10% {
		opacity: 0.4;
	}
	90% {
		opacity: 0.4;
	}
	100% {
		transform: translateY(100vh) rotate(360deg);
		opacity: 0;
	}
}

/* Animation d'apparition progressive pour les éléments du menu mobile */
.nav-item {
	opacity: 0;
	animation: fadeInUp 0.5s ease-out forwards;
	animation-delay: var(--delay);
}

@keyframes fadeInUp {
	0% {
		opacity: 0;
		transform: translateY(20px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
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
	.bg-gradient-to-r {
		animation: none !important;
	}
	.rain-drop,
	.rain-container::before {
		animation: none !important;
	}
	.nav-item {
		animation: none !important;
		opacity: 1;
	}
}
</style>
