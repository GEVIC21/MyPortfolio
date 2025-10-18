<!-- app/components/AppHeader.vue -->
<template>
    <header
        ref="header"
        class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
        :class="[
            scrolled
                ? 'bg-emerald-800/90 backdrop-blur-xl shadow-lg border-b border-emerald-700/30'
                : 'bg-gradient-to-r from-emerald-700/95 via-teal-700/90 to-emerald-800/95 backdrop-blur-sm',
        ]">
        <!-- Effet de pluie subtil -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="rain-effect"></div>
        </div>
        
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                        :ui="{ background: 'bg-stone-100', color: 'text-emerald-700' }"
                        variant="solid"
                        :class="[
                            'transition-transform duration-300',
                            logoHovered ? 'scale-110 rotate-12' : '',
                        ]" />
                    <span
                        class="font-bold text-xl md:text-2xl bg-gradient-to-r from-stone-100 to-emerald-100 bg-clip-text text-transparent">
                        Mon Portfolio
                    </span>
                </NuxtLink>

                <!-- Navigation principale (Desktop) -->
                <nav class="hidden lg:flex items-center space-x-1">
                    <NuxtLink
                        v-for="(item, index) in navItems"
                        :key="item.to"
                        :to="item.to"
                        class="relative px-4 py-2 font-medium transition-all duration-200 text-stone-200 hover:text-white"
                        :class="[
                            route.path === item.to ? 'text-white' : '',
                        ]"
                        @mouseenter="activeNavItem = index"
                        @mouseleave="activeNavItem = null">
                        {{ $t(item.label) }}
                        <span
                            class="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-stone-300 to-white transform -translate-x-1/2 transition-all duration-300 ease-out"
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
                            color="stone"
                            size="sm"
                            :class="[
                                'transition-all duration-200 text-stone-300 hover:text-white hover:bg-white/10',
                                hoveredSocialLink === index ? 'scale-110' : '',
                            ]"
                            @mouseenter="hoveredSocialLink = index"
                            @mouseleave="hoveredSocialLink = null" />
                    </div>

                    <!-- Utilisation du composant LangSwitcher pour desktop -->
                    <LangSwitcher size="sm" variant="ghost" color="stone" class="text-stone-300 hover:text-white" />

                    <!-- Bouton de changement de thème -->
                    <ThemeToggle class="text-stone-300 hover:text-white" />

                    <!-- Bouton CTA principal -->
                    <UButton
                        :label="$t('contact')"
                        to="/contact"
                        variant="solid"
                        size="sm"
                        class="hidden sm:flex transition-all duration-300 hover:shadow-lg hover:shadow-stone-400/50 hover:-translate-y-0.5 bg-stone-100 text-emerald-900 hover:bg-stone-200 font-semibold" />

                    <!-- Menu mobile -->
                    <UButton
                        icon="i-heroicons-bars-3"
                        variant="ghost"
                        color="stone"
                        size="sm"
                        class="lg:hidden text-stone-200 hover:text-white"
                        @click="toggleMobileMenu"
                        :class="{
                            'text-white': showMobileMenu,
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
                class="lg:hidden bg-emerald-900/95 backdrop-blur-lg border-t border-emerald-700/30">
                <div class="container mx-auto px-4 py-4 space-y-2">
                    <NuxtLink
                        v-for="item in navItems"
                        :key="item.to"
                        :to="item.to"
                        class="flex items-center justify-between py-3 px-4 rounded-lg font-medium transition-all duration-200 text-stone-300 hover:bg-emerald-800/50 hover:text-white"
                        :class="[
                            route.path === item.to
                                ? 'bg-emerald-800/50 text-white'
                                : '',
                        ]"
                        @click="showMobileMenu = false">
                        <span>{{ $t(item.label) }}</span>
                        <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
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
                            class="transition-all duration-200 hover:scale-110 text-stone-300 hover:text-white" />
                    </div>

                    <div class="pt-2">
                        <LangSwitcher size="md" variant="outline" color="stone" class="w-full text-stone-300" />
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

/* Effet de pluie subtil */
.rain-effect {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(255, 255, 255, 0.03) 50%,
        transparent 100%
    );
    background-size: 2px 20px;
    animation: rain 0.5s linear infinite;
    opacity: 0.3;
}

@keyframes rain {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 0 20px;
    }
}

/* Effet de feuille animée */
.rain-effect::before {
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
    .rain-effect {
        animation: none !important;
    }
    .rain-effect::before {
        animation: none !important;
    }
}
</style>