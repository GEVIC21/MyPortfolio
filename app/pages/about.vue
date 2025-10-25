<template>
	<div class="relative">
		<!-- Hero Section avec Image Illustrative -->
		<div class="relative h-96 lg:h-[500px] overflow-hidden">
			<NuxtImg
				src="/illustration-about.jpg"
				alt="Illustration développement web"
				class="w-full h-full object-cover"
				format="webp" />
			<div
				class="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/80 to-transparent" />
			<div class="absolute inset-0 flex items-center justify-center">
				<UContainer class="text-center text-white">
					<UBadge
						label="Développeur Full-Stack"
						variant="subtle"
						size="lg"
						class="mb-4 bg-emerald-800/90 text-emerald-50 backdrop-blur-sm border-emerald-700" />
					<h1 class="text-4xl lg:text-6xl font-bold mb-4 tracking-tight">
						Créateur d'Expériences Web
					</h1>
					<p
						class="text-xl lg:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto">
						Passionné par le code propre, les performances et l'innovation
						technologique
					</p>

					<!-- Boutons d'Action Principaux -->
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<UButton
							to="#cv-preview"
							icon="i-heroicons-document-text"
							variant="solid"
							size="xl"
							class="bg-emerald-50 text-emerald-900 hover:bg-emerald-100 shadow-lg border-0">
							Voir mon CV
						</UButton>
						<UButton
							to="#contact-section"
							icon="i-heroicons-envelope"
							variant="outline"
							size="xl"
							class="border-emerald-300 text-emerald-50 hover:bg-emerald-50 hover:text-emerald-900">
							Me contacter
						</UButton>
					</div>
				</UContainer>
			</div>
		</div>

		<UContainer class="py-16">
			<!-- Section "En Bref" - Informations Clés Immédiatement Visibles -->
			<div id="key-info" class="mb-16">
				<div
					class="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-2xl p-8 shadow-sm border border-emerald-200 dark:border-emerald-700">
					<h2
						class="text-2xl font-bold mb-6 text-center text-emerald-900 dark:text-emerald-100">
						En Bref
					</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div class="text-center">
							<div
								class="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
								5+
							</div>
							<div class="text-emerald-700 dark:text-emerald-300">
								Ans d'expérience
							</div>
						</div>
						<div class="text-center">
							<div
								class="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
								50+
							</div>
							<div class="text-emerald-700 dark:text-emerald-300">
								Projets livrés
							</div>
						</div>
						<div class="text-center">
							<div
								class="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
								Laravel/Vue
							</div>
							<div class="text-emerald-700 dark:text-emerald-300">
								Spécialisation
							</div>
						</div>
						<div class="text-center">
							<div
								class="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
								Tchad
							</div>
							<div class="text-emerald-700 dark:text-emerald-300">
								Localisation
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Section Compétences -->
			<div class="mb-16">
				<div class="text-center mb-12">
					<h2
						class="text-3xl lg:text-4xl font-bold mb-4 text-emerald-900 dark:text-emerald-100">
						Mes Compétences Techniques
					</h2>
					<p
						class="text-lg text-emerald-700 dark:text-emerald-300 max-w-2xl mx-auto">
						Une expertise complète dans les technologies web modernes
					</p>
				</div>

				<!-- Cartes de Compétences -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
					<UCard
						v-for="category in skillCategories"
						:key="category.name"
						class="h-full shadow-sm border-emerald-200 dark:border-emerald-700 hover:shadow-md transition-shadow">
						<template #header>
							<div class="flex items-center justify-between">
								<h3
									class="text-xl font-bold text-emerald-900 dark:text-emerald-100">
									{{ category.name }}
								</h3>
								<Icon :name="category.icon" class="w-8 h-8 text-emerald-500" />
							</div>
						</template>
						<div class="space-y-3">
							<div
								v-for="skill in category.skills"
								:key="skill.name"
								class="flex items-center justify-between">
								<span
									class="font-medium text-emerald-800 dark:text-emerald-200"
									>{{ skill.name }}</span
								>
								<div class="flex items-center space-x-2">
									<div
										class="w-24 bg-emerald-200 dark:bg-emerald-800 rounded-full h-2">
										<div
											class="bg-emerald-500 h-2 rounded-full transition-all duration-500"
											:style="{ width: skill.level + '%' }" />
									</div>
									<span class="text-sm text-emerald-600 dark:text-emerald-400"
										>{{ skill.level }}%</span
									>
								</div>
							</div>
						</div>
					</UCard>
				</div>

				<!-- Technologies Additionnelles -->
				<div
					class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-700">
					<h3
						class="text-xl font-bold mb-6 text-center text-emerald-900 dark:text-emerald-100">
						Autres Technologies & Outils
					</h3>
					<div class="flex flex-wrap gap-3 justify-center">
						<UBadge
							v-for="tech in otherTechs"
							:key="tech"
							size="lg"
							variant="soft"
							color="emerald">
							{{ tech }}
						</UBadge>
					</div>
				</div>
			</div>

			<!-- Aperçu du CV -->
			<div id="cv-preview" class="mb-16">
				<div class="text-center mb-8">
					<h2
						class="text-3xl lg:text-4xl font-bold mb-4 text-emerald-900 dark:text-emerald-100">
						Mon Parcours en Détail
					</h2>
					<p class="text-lg text-emerald-700 dark:text-emerald-300">
						Un aperçu de mon expérience avant de télécharger le CV complet
					</p>
				</div>

				<!-- Timeline Expérience -->
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
					<div>
						<h3
							class="text-xl font-bold mb-4 flex items-center text-emerald-900 dark:text-emerald-100">
							<Icon
								name="i-heroicons-briefcase"
								class="mr-2 text-emerald-500" />
							Expérience Professionnelle
						</h3>
						<div class="space-y-4">
							<div
								v-for="exp in experiences"
								:key="exp.title"
								class="border-l-2 border-emerald-500 pl-4">
								<h4
									class="font-semibold text-emerald-900 dark:text-emerald-100">
									{{ exp.title }}
								</h4>
								<p class="text-sm text-emerald-600 dark:text-emerald-400">
									{{ exp.company }} • {{ exp.period }}
								</p>
								<p class="text-emerald-700 dark:text-emerald-300 mt-1">
									{{ exp.description }}
								</p>
							</div>
						</div>
					</div>

					<div>
						<h3
							class="text-xl font-bold mb-4 flex items-center text-emerald-900 dark:text-emerald-100">
							<Icon
								name="i-heroicons-academic-cap"
								class="mr-2 text-emerald-500" />
							Formation & Certifications
						</h3>
						<div class="space-y-4">
							<div
								v-for="edu in education"
								:key="edu.title"
								class="border-l-2 border-emerald-500 pl-4">
								<h4
									class="font-semibold text-emerald-900 dark:text-emerald-100">
									{{ edu.title }}
								</h4>
								<p class="text-sm text-emerald-600 dark:text-emerald-400">
									{{ edu.institution }} • {{ edu.year }}
								</p>
								<p class="text-emerald-700 dark:text-emerald-300 mt-1">
									{{ edu.description }}
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Bouton Téléchargement CV -->
				<div class="text-center">
					<UButton
						to="/cv.pdf"
						icon="i-heroicons-document-arrow-down"
						variant="solid"
						size="lg"
						target="_blank"
						class="bg-emerald-600 hover:bg-emerald-700 text-white">
						Télécharger le CV complet (PDF)
					</UButton>
				</div>
			</div>

			<!-- Section Contact -->
			<div id="contact-section" class="mb-16">
				<UCard
					class="bg-gradient-to-br from-emerald-700 to-emerald-800 text-white shadow-lg border-0">
					<div class="py-12">
						<h2 class="text-3xl font-bold mb-6 text-center">
							Démarrons une Conversation
						</h2>
						<p class="text-center text-emerald-100 mb-8 max-w-2xl mx-auto">
							Je suis actuellement disponible pour de nouveaux projets.
							N'hésitez pas à me contacter pour discuter de vos besoins ou
							simplement échanger sur la tech !
						</p>

						<!-- Informations de Contact Directes -->
						<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
							<div class="text-center">
								<Icon
									name="i-heroicons-envelope"
									class="w-8 h-8 mx-auto mb-2 text-emerald-200" />
								<p class="font-semibold">Email</p>
								<a
									href="mailto:contact@example.com"
									class="text-emerald-100 hover:text-white transition-colors">
									contact@example.com
								</a>
							</div>
							<div class="text-center">
								<Icon
									name="i-heroicons-device-phone-mobile"
									class="w-8 h-8 mx-auto mb-2 text-emerald-200" />
								<p class="font-semibold">Téléphone/WhatsApp</p>
								<a
									href="tel:+23567389181"
									class="text-emerald-100 hover:text-white transition-colors">
									+235 67 38 91 81
								</a>
							</div>
							<div class="text-center">
								<Icon
									name="i-heroicons-map-pin"
									class="w-8 h-8 mx-auto mb-2 text-emerald-200" />
								<p class="font-semibold">Localisation</p>
								<p class="text-emerald-100">Tchad</p>
							</div>
						</div>

						<!-- Boutons d'Action -->
						<div class="flex flex-col sm:flex-row gap-4 justify-center">
							<UButton
								to="/contact"
								variant="solid"
								color="white"
								size="lg"
								icon="i-heroicons-paper-airplane"
								class="justify-center text-emerald-700 hover:text-emerald-800">
								Envoyer un message
							</UButton>
							<UButton
								to="https://calendly.com/votre-lien"
								variant="outline"
								color="white"
								size="lg"
								icon="i-heroicons-calendar"
								class="justify-center hover:bg-white hover:text-emerald-700">
								Planifier un appel
							</UButton>
						</div>
					</div>
				</UCard>
			</div>

			<!-- Grid Principal -->
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
				<!-- Colonne Gauche -->
				<div class="lg:col-span-1 space-y-6">
					<div class="relative group">
						<NuxtImg
							src="/Profile4.jpg"
							alt="Photo de profil"
							class="w-full rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
							format="webp"
							width="400"
							height="400" />
						<div
							class="absolute inset-0 bg-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					</div>

					<!-- Réseaux Sociaux -->
					<UCard class="shadow-sm border-emerald-200 dark:border-emerald-700">
						<template #header>
							<h3
								class="text-lg font-semibold text-center text-emerald-900 dark:text-emerald-100">
								Me Contacter
							</h3>
						</template>
						<div class="flex justify-center space-x-3">
							<UButton
								v-for="social in socials"
								:key="social.name"
								:to="social.url"
								:icon="social.icon"
								variant="ghost"
								color="gray"
								size="lg"
								target="_blank"
								class="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300" />
						</div>
					</UCard>
				</div>

				<!-- Colonne Droite -->
				<div class="lg:col-span-2 space-y-8">
					<!-- À Propos -->
					<div>
						<h2
							class="text-2xl font-bold mb-4 flex items-center text-emerald-900 dark:text-emerald-100">
							<Icon name="i-heroicons-user" class="mr-2 text-emerald-500" />
							Plus sur Moi
						</h2>
						<div class="prose prose-gray dark:prose-invert max-w-none">
							<p
								class="text-lg text-emerald-700 dark:text-emerald-300 leading-relaxed">
								Développeur web passionné avec plus de 5 ans d'expérience dans
								la création d'applications modernes et performantes. J'aime
								transformer des idées complexes en solutions élégantes et
								intuitives.
							</p>
							<p class="text-emerald-700 dark:text-emerald-300 leading-relaxed">
								Mon approche combine une expertise technique solide avec une
								compréhension approfondie des besoins utilisateurs pour créer
								des expériences web qui marient performance et esthétique.
							</p>
						</div>
					</div>

					<!-- Valeurs -->
					<div>
						<h2
							class="text-2xl font-bold mb-6 flex items-center text-emerald-900 dark:text-emerald-100">
							<Icon
								name="i-heroicons-light-bulb"
								class="mr-2 text-emerald-500" />
							Mes Valeurs
						</h2>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div
								v-for="value in values"
								:key="value.title"
								class="flex items-start space-x-3 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 hover:shadow-sm transition-shadow">
								<Icon
									:name="value.icon"
									class="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
								<div>
									<h4
										class="font-semibold mb-1 text-emerald-900 dark:text-emerald-100">
										{{ value.title }}
									</h4>
									<p class="text-sm text-emerald-700 dark:text-emerald-300">
										{{ value.description }}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</UContainer>
	</div>
</template>

<script setup lang="ts">
// Données des compétences mises à jour
const skillCategories = [
	{
		name: "Frontend",
		icon: "i-heroicons-device-phone-mobile",
		skills: [
			{ name: "Vue.js / Nuxt", level: 95 },
			{ name: "Angular", level: 85 },
			{ name: "TypeScript", level: 90 },
			{ name: "Tailwind CSS", level: 95 },
			{ name: "Bootstrap", level: 88 },
		],
	},
	{
		name: "Backend",
		icon: "i-heroicons-server",
		skills: [
			{ name: "Laravel", level: 92 },
			{ name: "Spring Boot", level: 85 },
			{ name: "PHP", level: 90 },
			{ name: "MySQL", level: 88 },
			{ name: "PostgreSQL", level: 85 },
		],
	},
	{
		name: "Déploiement & DevOps",
		icon: "i-heroicons-cloud",
		skills: [
			{ name: "Render", level: 90 },
			{ name: "Vercel", level: 95 },
			{ name: "Private VPS", level: 85 },
			{ name: "Docker", level: 80 },
			{ name: "CI/CD", level: 85 },
		],
	},
];

// Autres technologies
const otherTechs = [
	"Git",
	"REST API",
	"GraphQL",
	"Redis",
	"AWS",
	"JavaScript ES6+",
	"HTML5",
	"CSS3",
	"SASS",
];

// Expériences professionnelles
const experiences = [
	{
		title: "Développeur Full-Stack Senior",
		company: "Indépendant",
		period: "2022 - Présent",
		description:
			"Développement d'applications web complètes avec Laravel/Vue.js et Angular/Spring Boot",
	},
	{
		title: "Développeur Full-Stack",
		company: "TechCompany",
		period: "2020 - 2022",
		description:
			"Création et maintenance d'applications SaaS avec déploiement sur VPS et plateformes cloud",
	},
];

// Formation
const education = [
	{
		title: "Formation Développement Web Full-Stack",
		institution: "Ecole Supérieure de Tech",
		year: "2019 - 2020",
		description: "Spécialisation Laravel, Vue.js et architectures modernes",
	},
	{
		title: "Certification Cloud & DevOps",
		institution: "AWS Academy",
		year: "2021",
		description: "Déploiement d'applications et gestion d'infrastructure cloud",
	},
];

// Valeurs
const values = [
	{
		title: "Code Propre",
		description: "Maintenable, testé et documenté",
		icon: "i-heroicons-sparkles",
	},
	{
		title: "Performance",
		description: "Optimisation pour une expérience fluide",
		icon: "i-heroicons-rocket-launch",
	},
	{
		title: "Apprentissage",
		description: "Veille constante sur les nouvelles tech",
		icon: "i-heroicons-book-open",
	},
	{
		title: "Collaboration",
		description: "Esprit d'équipe et communication",
		icon: "i-heroicons-users",
	},
];

// Réseaux sociaux mis à jour
const socials = [
	{
		name: "GitHub",
		url: "https://github.com",
		icon: "i-simple-icons-github",
	},
	{
		name: "LinkedIn",
		url: "https://linkedin.com",
		icon: "i-simple-icons-linkedin",
	},
	{
		name: "WhatsApp",
		url: "https://wa.me/23567389181",
		icon: "i-simple-icons-whatsapp",
	},
];

// SEO
useHead({
	title: "À Propos - Mon Portfolio",
	meta: [
		{
			name: "description",
			content:
				"Développeur Full-Stack spécialisé Laravel, Vue.js et Spring Boot. Basé au Tchad, disponible pour des projets internationaux.",
		},
	],
});
</script>
