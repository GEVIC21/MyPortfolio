<!-- app/components/LangSwitcher.vue -->
<template>
	<div class="relative" ref="dropdownRef">
		<!-- Bouton principal -->
		<button
			@click="toggleDropdown"
			:class="[
				'flex items-center gap-2 transition-all duration-200',
				size === 'sm' ? 'px-2 py-1.5 text-sm' : 'px-3 py-2 text-base',
				variant === 'ghost'
					? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md'
					: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-700',
			]"
			aria-label="Changer la langue"
			aria-expanded="isOpen"
			aria-haspopup="true">
			<UIcon :name="currentLocaleIcon" class="w-5 h-5" />
			<span>{{ currentLocaleName }}</span>
			<UIcon
				name="i-heroicons-chevron-down-20-solid"
				class="w-4 h-4 transition-transform duration-200"
				:class="{ 'rotate-180': isOpen }" />
		</button>

		<!-- Menu déroulant -->
		<Transition
			enter-active-class="transition duration-200 ease-out"
			enter-from-class="transform scale-95 opacity-0"
			enter-to-class="transform scale-100 opacity-100"
			leave-active-class="transition duration-150 ease-in"
			leave-from-class="transform scale-100 opacity-100"
			leave-to-class="transform scale-95 opacity-0">
			<div
				v-if="isOpen"
				class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
				<div class="py-1">
					<button
						v-for="item in localesOptions"
						:key="item.code"
						@click="selectLanguage(item.code)"
						:class="[
							'flex items-center gap-3 w-full px-3 py-2 text-left transition-colors duration-150',
							locale === item.code
								? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
								: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700',
						]">
						<UIcon :name="item.icon" class="w-5 h-5" />
						<span>{{ item.name }}</span>
						<UIcon
							v-if="locale === item.code"
							name="i-heroicons-check-20-solid"
							class="w-4 h-4 ml-auto text-primary-600 dark:text-primary-400" />
					</button>
				</div>
			</div>
		</Transition>
	</div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

// Props pour rendre le composant réutilisable (desktop vs mobile)
const props = defineProps({
	size: {
		type: String,
		default: "sm",
		validator: (value: string) => ["sm", "md", "lg"].includes(value),
	},
	variant: {
		type: String,
		default: "ghost",
		validator: (value: string) => ["ghost", "outline", "solid"].includes(value),
	},
});

// État du dropdown
const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

// Récupérer les fonctions et données de i18n
const { locale, locales, setLocale } = useI18n();

// Mapper les codes de langue (ex: 'fr') à des noms d'icônes de drapeau
const flagIconMap: Record<string, string> = {
	en: "i-flag-gb-4x3", // Utiliser le drapeau britannique pour l'anglais
	fr: "i-flag-fr-4x3",
	es: "i-flag-es-4x3",
	de: "i-flag-de-4x3",
	it: "i-flag-it-4x3",
	pt: "i-flag-pt-4x3",
	nl: "i-flag-nl-4x3",
	ja: "i-flag-jp-4x3",
	zh: "i-flag-cn-4x3",
	ru: "i-flag-ru-4x3",
	ar: "i-flag-sa-4x3",
};

// Créer une liste d'options enrichie avec les icônes pour l'affichage
const localesOptions = computed(() => {
	return (locales.value as any[]).map((loc) => ({
		code: loc.code,
		name: loc.name,
		icon: flagIconMap[loc.code] || "i-heroicons-question-mark-circle",
	}));
});

// Obtenir la locale actuelle avec son nom et icône
const currentLocale = computed(() => {
	return (locales.value as any[]).find((loc) => loc.code === locale.value);
});

const currentLocaleName = computed(() => {
	return currentLocale.value?.name || locale.value;
});

const currentLocaleIcon = computed(() => {
	return flagIconMap[locale.value] || "i-heroicons-language";
});

// Fonctions pour gérer le dropdown
const toggleDropdown = () => {
	isOpen.value = !isOpen.value;
};

const selectLanguage = (code: string) => {
	setLocale(code);
	isOpen.value = false;
};

// Fermer le dropdown lorsqu'on clique à l'extérieur
const handleClickOutside = (event: MouseEvent) => {
	if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
		isOpen.value = false;
	}
};

// Gérer le focus et l'accessibilité
const handleKeydown = (event: KeyboardEvent) => {
	if (event.key === "Escape") {
		isOpen.value = false;
	}
};

// Cycle de vie
onMounted(() => {
	document.addEventListener("click", handleClickOutside);
	document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
	document.removeEventListener("click", handleClickOutside);
	document.removeEventListener("keydown", handleKeydown);
});
</script>
