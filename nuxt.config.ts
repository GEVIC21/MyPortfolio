// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
				compatibilityDate: "2025-07-15",
				devtools: { enabled: true },

				modules: [
								"@nuxt/ui",
								"@nuxt/image",
								"@nuxtjs/seo",
								"@nuxt/icon",
								"v-gsap-nuxt",
								"@nuxtjs/i18n",
				],

				css: ["~/assets/css/main.css"],

				// Configuration pour optimiser les bundles et éviter les conflits
				optimizeDeps: {
								exclude: ["@tsparticles/engine"],
				},

				// Configuration pour les composants qui ne fonctionnent qu'en client-side
				ssr: true,

				// Configuration de Vite pour gérer correctement les modules
				vite: {
								optimizeDeps: {
												exclude: ["@tsparticles/engine"],
								},
								define: {
												__VUE_OPTIONS_API__: true,
								},
				},

				i18n: {
								locales: [
												{ code: "en", language: "en-US", name: "English", file: "en.json" },
												{ code: "fr", language: "fr-FR", name: "Français", file: "fr.json" },
								],
								defaultLocale: "fr",
								lazy: true,
								langDir: "locales", // 👈 Indique que les fichiers sont dans le dossier 'locales'
								detectBrowserLanguage: {
												useCookie: true,
												cookieKey: "i18n_redirected",
												redirectOn: "root",
												alwaysRedirect: false,
												fallbackLocale: "fr",
								},
								strategy: "prefix_except_default",
				},

				nitro: {
								experimental: {
												wasm: true,
								},
				},

				ui: {
								global: true,
								theme: {
												colors: {
																nature: {
																				50: "#f0f9f0",
																				100: "#dcf2dc",
																				200: "#bae5ba",
																				300: "#8dd48d",
																				400: "#5cb85c",
																				500: "#3d8b3d",
																				600: "#2d6a2d",
																				700: "#1f4d1f",
																				800: "#163316",
																				900: "#0d1f0d",
																				950: "#061006",
																},
												},
								},
				},

				colorMode: {
								preference: "system",
								fallbackValue: "light",
								dataValue: "theme",
				},

				// Configuration pour les composants auto-importés
				components: [
								{
												path: "~/components",
												pathPrefix: false,
								},
				],
});