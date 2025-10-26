<template>
	<div class="relative">
		<!-- Hero Section avec fond animé et particules -->
		<div
			class="relative min-h-screen lg:min-h-[calc(100vh-128px)] overflow-hidden flex items-center justify-center pt-24 lg:pt-32">
			<!-- Fond dégradé animé -->
			<div
				class="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-950" />
			<!-- Formes géométriques animées -->
			<div class="absolute inset-0">
				<div
					class="absolute top-20 left-10 w-72 h-72 bg-emerald-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
				<div
					class="absolute top-40 right-10 w-72 h-72 bg-teal-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
				<div
					class="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
			</div>

			<!-- Particules flottantes -->
			<div class="absolute inset-0 overflow-hidden">
				<div
					v-for="i in 20"
					:key="i"
					class="absolute bg-white rounded-full opacity-20 animate-float"
					:style="{
						width: Math.random() * 6 + 2 + 'px',
						height: Math.random() * 6 + 2 + 'px',
						left: Math.random() * 100 + '%',
						top: Math.random() * 100 + '%',
						animationDelay: Math.random() * 20 + 's',
						animationDuration: Math.random() * 20 + 10 + 's',
					}"></div>
			</div>

			<!-- Image de fond avec effet de parallaxe -->
			<div class="absolute inset-0 opacity-20">
				<NuxtImg
					src="/illustration-about.jpg"
					alt="Illustration développement web"
					class="w-full h-full object-cover"
					format="webp" />
			</div>

			<div class="relative z-10 text-center text-white">
				<UContainer>
					<UBadge
						label="Développeur Full-Stack"
						variant="subtle"
						size="lg"
						class="mb-4 bg-white/10 backdrop-blur-md border-white/20 text-white animate-fade-in" />
					<h1
						class="text-4xl lg:text-6xl font-bold mb-4 tracking-tight animate-slide-up">
						Créateur d'Expériences Web
					</h1>
					<p
						class="text-xl lg:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-200">
						Passionné par le code propre, les performances et l'innovation
						technologique
					</p>

					<!-- Boutons d'Action Principaux -->
					<div
						class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
						<UButton
							to="#cv-preview"
							icon="i-heroicons-document-text"
							variant="solid"
							size="xl"
							class="bg-emerald-50 text-emerald-900 hover:bg-emerald-100 shadow-lg border-0 transform hover:scale-105 transition-all duration-300">
							Voir mon CV
						</UButton>
						<UButton
							to="#contact-section"
							icon="i-heroicons-envelope"
							variant="outline"
							size="xl"
							class="border-emerald-300 text-emerald-50 hover:bg-emerald-50 hover:text-emerald-900 transform hover:scale-105 transition-all duration-300">
							Me contacter
						</UButton>
					</div>
				</UContainer>
			</div>

			<!-- Indicateur de défilement -->
			<div
				class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
				<Icon name="i-heroicons-chevron-down" class="w-8 h-8" />
			</div>
		</div>

		<UContainer class="py-16">
			<!-- Section "En Bref" avec animations améliorées -->
			<div id="key-info" class="mb-16">
				<div
					class="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-2xl p-8 shadow-sm border border-emerald-200 dark:border-emerald-700">
					<h2
						class="text-2xl font-bold mb-6 text-center text-emerald-900 dark:text-emerald-100">
						En Bref
					</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div
							v-for="(stat, index) in keyStats"
							:key="index"
							class="text-center group">
							<div class="relative inline-block mb-2">
								<Icon
									:name="stat.icon"
									class="w-12 h-12 text-emerald-500 group-hover:text-emerald-600 transition-colors" />
								<div
									class="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity"></div>
							</div>
							<div
								class="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
								<ClientOnly>
									<span>{{ animatedStats[index] }}</span>
									<template #fallback>
										<span>{{ stat.value }}</span>
									</template>
								</ClientOnly>
								<span v-if="stat.suffix" class="text-xl">{{
									stat.suffix
								}}</span>
							</div>
							<div class="text-emerald-700 dark:text-emerald-300">
								{{ stat.label }}
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Section Compétences avec design moderne et animations -->
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
					<p
						class="text-md text-emerald-600 dark:text-emerald-400 mt-4 max-w-3xl mx-auto">
						Je sélectionne la stack technique la plus adaptée aux objectifs de
						chaque projet, que ce soit l'écosystème
						<strong>Laravel/Vue.js</strong> pour sa rapidité de développement ou
						l'association <strong>Angular/Spring Boot</strong> pour des
						architectures d'entreprise robustes.
					</p>
				</div>

				<!-- Cartes de Compétences avec animations améliorées -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
					<UCard
						v-for="(category, index) in skillCategories"
						:key="category.name"
						class="h-full shadow-sm border-emerald-200 dark:border-emerald-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden animate-fade-in"
						:style="{ animationDelay: index * 200 + 'ms' }">
						<div
							class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
						<template #header>
							<div class="flex items-center justify-between relative z-10">
								<h3
									class="text-xl font-bold text-emerald-900 dark:text-emerald-100">
									{{ category.name }}
								</h3>
								<Icon
									:name="category.icon"
									class="w-8 h-8 text-emerald-500 group-hover:scale-110 transition-transform" />
							</div>
						</template>
						<div class="space-y-4 relative z-10">
							<div
								v-for="skill in category.skills"
								:key="skill.name"
								class="space-y-2">
								<div class="flex items-center justify-between">
									<span
										class="font-medium text-emerald-800 dark:text-emerald-200"
										>{{ skill.name }}</span
									>
									<span class="text-sm text-emerald-600 dark:text-emerald-400"
										>{{ skill.level }}%</span
									>
								</div>
								<div
									class="w-full bg-emerald-200 dark:bg-emerald-800 rounded-full h-2.5">
									<div
										class="bg-gradient-to-r from-emerald-500 to-teal-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
										:style="{ width: skill.level + '%' }" />
								</div>
							</div>
						</div>
					</UCard>
				</div>

				<!-- Technologies Additionnelles avec design moderne -->
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
							color="emerald"
							class="hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors cursor-pointer transform hover:scale-105">
							{{ tech }}
						</UBadge>
					</div>
				</div>
			</div>

			<!-- Section Processus de Travail avec design amélioré -->
			<div class="mb-16">
				<div class="text-center mb-12">
					<h2
						class="text-3xl lg:text-4xl font-bold mb-4 text-emerald-900 dark:text-emerald-100">
						Mon Processus de Travail
					</h2>
					<p
						class="text-lg text-emerald-700 dark:text-emerald-300 max-w-2xl mx-auto">
						Une approche structurée pour garantir la réussite de chaque projet
					</p>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					<div
						v-for="(step, index) in workProcess"
						:key="index"
						class="relative group">
						<div
							class="bg-white dark:bg-emerald-900/30 rounded-xl p-6 shadow-sm border border-emerald-200 dark:border-emerald-700 h-full flex flex-col hover:shadow-lg transition-all duration-300 animate-fade-in"
							:style="{ animationDelay: index * 200 + 'ms' }">
							<div
								class="flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-800 rounded-full mb-4 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-700 transition-colors">
								<Icon
									:name="step.icon"
									class="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
							</div>
							<h3
								class="text-lg font-semibold mb-2 text-emerald-900 dark:text-emerald-100">
								{{ step.title }}
							</h3>
							<p class="text-emerald-700 dark:text-emerald-300 flex-grow">
								{{ step.description }}
							</p>
						</div>
						<div
							v-if="index < workProcess.length - 1"
							class="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-emerald-300">
							<Icon name="i-heroicons-arrow-right" class="w-6 h-6" />
						</div>
					</div>
				</div>
			</div>

			<!-- Section Services -->
			<div class="mb-16">
				<div class="text-center mb-12">
					<h2
						class="text-3xl lg:text-4xl font-bold mb-4 text-emerald-900 dark:text-emerald-100">
						Mes Services
					</h2>
					<p
						class="text-lg text-emerald-700 dark:text-emerald-300 max-w-2xl mx-auto">
						Des solutions sur mesure pour répondre à vos besoins spécifiques
					</p>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div
						v-for="(service, index) in services"
						:key="index"
						class="bg-white dark:bg-emerald-900/30 rounded-xl p-6 shadow-sm border border-emerald-200 dark:border-emerald-700 hover:shadow-lg transition-all duration-300 group animate-fade-in"
						:style="{ animationDelay: index * 200 + 'ms' }">
						<div
							class="w-16 h-16 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-700 transition-colors">
							<Icon
								:name="service.icon"
								class="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
						</div>
						<h3
							class="text-xl font-semibold mb-2 text-emerald-900 dark:text-emerald-100">
							{{ service.title }}
						</h3>
						<p class="text-emerald-700 dark:text-emerald-300 mb-4">
							{{ service.description }}
						</p>
						<ul class="space-y-2">
							<li
								v-for="feature in service.features"
								:key="feature"
								class="flex items-center text-emerald-700 dark:text-emerald-300">
								<Icon
									name="i-heroicons-check-circle"
									class="w-5 h-5 mr-2 text-emerald-500" />
								{{ feature }}
							</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- Aperçu du CV avec timeline améliorée -->
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
							class="text-xl font-bold mb-6 flex items-center text-emerald-900 dark:text-emerald-100">
							<Icon
								name="i-heroicons-briefcase"
								class="mr-2 text-emerald-500" />
							Expérience Professionnelle
						</h3>
						<div class="space-y-6">
							<div
								v-for="(exp, index) in experiences"
								:key="exp.title"
								class="relative pl-8 pb-6 group animate-fade-in"
								:style="{ animationDelay: index * 200 + 'ms' }">
								<div
									class="absolute left-0 top-0 w-4 h-4 bg-emerald-500 rounded-full"></div>
								<div
									class="absolute left-1.5 top-4 w-0.5 h-full bg-emerald-200 dark:bg-emerald-700"></div>
								<div
									class="bg-white dark:bg-emerald-900/30 rounded-lg p-4 shadow-sm border border-emerald-200 dark:border-emerald-700 group-hover:shadow-md transition-shadow">
									<h4
										class="font-semibold text-emerald-900 dark:text-emerald-100">
										{{ exp.title }}
									</h4>
									<p
										class="text-sm text-emerald-600 dark:text-emerald-400 mb-2">
										{{ exp.company }} • {{ exp.period }}
									</p>
									<p class="text-emerald-700 dark:text-emerald-300">
										{{ exp.description }}
									</p>
								</div>
							</div>
						</div>
					</div>

					<div>
						<h3
							class="text-xl font-bold mb-6 flex items-center text-emerald-900 dark:text-emerald-100">
							<Icon
								name="i-heroicons-academic-cap"
								class="mr-2 text-emerald-500" />
							Formation & Certifications
						</h3>
						<div class="space-y-6">
							<div
								v-for="(edu, index) in education"
								:key="edu.title"
								class="relative pl-8 pb-6 group animate-fade-in"
								:style="{ animationDelay: index * 200 + 'ms' }">
								<div
									class="absolute left-0 top-0 w-4 h-4 bg-emerald-500 rounded-full"></div>
								<div
									class="absolute left-1.5 top-4 w-0.5 h-full bg-emerald-200 dark:bg-emerald-700"></div>
								<div
									class="bg-white dark:bg-emerald-900/30 rounded-lg p-4 shadow-sm border border-emerald-200 dark:border-emerald-700 group-hover:shadow-md transition-shadow">
									<h4
										class="font-semibold text-emerald-900 dark:text-emerald-100">
										{{ edu.title }}
									</h4>
									<p
										class="text-sm text-emerald-600 dark:text-emerald-400 mb-2">
										{{ edu.institution }} • {{ edu.year }}
									</p>
									<p class="text-emerald-700 dark:text-emerald-300">
										{{ edu.description }}
									</p>
								</div>
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
						class="bg-emerald-600 hover:bg-emerald-700 text-white transform hover:scale-105 transition-all duration-300">
						Télécharger le CV complet (PDF)
					</UButton>
				</div>
			</div>

			<!-- Section Témoignages avec carousel -->
			<div class="mb-16">
				<div class="text-center mb-12">
					<h2
						class="text-3xl lg:text-4xl font-bold mb-4 text-emerald-900 dark:text-emerald-100">
						Ce Que Disent Mes Clients
					</h2>
					<p
						class="text-lg text-emerald-700 dark:text-emerald-300 max-w-2xl mx-auto">
						Retours d'expériences sur nos collaborations
					</p>
				</div>

				<div class="relative">
					<div class="overflow-hidden">
						<div
							class="flex transition-transform duration-500 ease-in-out"
							:style="{
								transform: `translateX(-${currentTestimonial * 100}%)`,
							}">
							<div
								v-for="testimonial in testimonials"
								:key="testimonial.name"
								class="w-full flex-shrink-0 px-4">
								<UCard
									class="h-full shadow-sm border-emerald-200 dark:border-emerald-700 hover:shadow-md transition-all duration-300">
									<div class="flex items-center mb-4">
										<div
											class="w-12 h-12 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center mr-3">
											<Icon
												name="i-heroicons-user"
												class="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
										</div>
										<div>
											<h4
												class="font-semibold text-emerald-900 dark:text-emerald-100">
												{{ testimonial.name }}
											</h4>
											<p class="text-sm text-emerald-600 dark:text-emerald-400">
												{{ testimonial.position }}
											</p>
										</div>
									</div>
									<div class="flex mb-3">
										<Icon
											v-for="i in 5"
											:key="i"
											name="i-heroicons-star"
											class="w-5 h-5 text-yellow-400" />
									</div>
									<p class="text-emerald-700 dark:text-emerald-300 italic">
										"{{ testimonial.content }}"
									</p>
								</UCard>
							</div>
						</div>
					</div>

					<!-- Navigation du carousel -->
					<div class="flex justify-center mt-6 space-x-2">
						<button
							v-for="i in testimonials.length"
							:key="i"
							@click="currentTestimonial = i - 1"
							:class="[
								'w-3 h-3 rounded-full transition-colors',
								currentTestimonial === i - 1
									? 'bg-emerald-500'
									: 'bg-emerald-300',
							]"></button>
					</div>
				</div>
			</div>

			<!-- Section Contact avec design moderne -->
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
							<div class="text-center group">
								<div
									class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors">
									<Icon
										name="i-heroicons-envelope"
										class="w-8 h-8 text-emerald-200" />
								</div>
								<p class="font-semibold">Email</p>
								<a
									href="mailto:contact@example.com"
									class="text-emerald-100 hover:text-white transition-colors">
									contact@example.com
								</a>
							</div>
							<div class="text-center group">
								<div
									class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors">
									<Icon
										name="i-heroicons-device-phone-mobile"
										class="w-8 h-8 text-emerald-200" />
								</div>
								<p class="font-semibold">Téléphone/WhatsApp</p>
								<a
									href="tel:+23567389181"
									class="text-emerald-100 hover:text-white transition-colors">
									+235 67 38 91 81
								</a>
							</div>
							<div class="text-center group">
								<div
									class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors">
									<Icon
										name="i-heroicons-map-pin"
										class="w-8 h-8 text-emerald-200" />
								</div>
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
								class="justify-center text-emerald-700 hover:text-emerald-800 transform hover:scale-105 transition-all duration-300">
								Envoyer un message
							</UButton>
							<UButton
								to="https://calendly.com/votre-lien"
								variant="outline"
								color="white"
								size="lg"
								icon="i-heroicons-calendar"
								class="justify-center hover:bg-white hover:text-emerald-700 transform hover:scale-105 transition-all duration-300">
								Planifier un appel
							</UButton>
						</div>
					</div>
				</UCard>
			</div>

			<!-- Grid Principal avec design asymétrique -->
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
								class="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transform hover:scale-110 transition-all duration-300" />
						</div>
					</UCard>

					<!-- Section Hobbies -->
					<UCard class="shadow-sm border-emerald-200 dark:border-emerald-700">
						<template #header>
							<h3
								class="text-lg font-semibold text-center text-emerald-900 dark:text-emerald-100">
								Centres d'Intérêt
							</h3>
						</template>
						<div class="grid grid-cols-3 gap-3">
							<div
								v-for="hobby in hobbies"
								:key="hobby.name"
								class="text-center group">
								<div
									class="w-12 h-12 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-700 transition-colors">
									<Icon
										:name="hobby.icon"
										class="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
								</div>
								<p class="text-xs text-emerald-700 dark:text-emerald-300">
									{{ hobby.name }}
								</p>
							</div>
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
								Développeur web passionné avec une expertise en Génie Logiciel.
								Mon approche consiste à choisir l'ensemble d'outils le plus
								adapté à chaque projet, que ce soit l'écosystème Laravel/Vue.js
								pour sa productivité ou la robustesse d'Angular/Spring Boot pour
								les applications d'entreprise. J'aime transformer des idées
								complexes en solutions élégantes et performantes.
							</p>
							<p class="text-emerald-700 dark:text-emerald-300 leading-relaxed">
								Cette polyvalence me permet de m'adapter aux besoins spécifiques
								de chaque client, en garantissant une solution technique
								optimale, maintenable et évolutive.
							</p>
						</div>
					</div>

					<!-- Citation -->
					<div
						class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-6 border-l-4 border-emerald-500">
						<p
							class="text-lg text-emerald-700 dark:text-emerald-300 italic mb-2">
							"Le code est comme l'humour. Quand vous devez l'expliquer, c'est
							mauvais."
						</p>
						<p class="text-emerald-600 dark:text-emerald-400">- Cory House</p>
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
								class="flex items-start space-x-3 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 hover:shadow-sm transition-shadow group">
								<div
									class="w-10 h-10 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-700 transition-colors">
									<Icon
										:name="value.icon"
										class="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
								</div>
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

		<!-- Bouton "Retour en haut" -->
		<UButton
			v-show="showScrollTop"
			@click="scrollToTop"
			icon="i-heroicons-arrow-up"
			size="lg"
			color="emerald"
			variant="solid"
			class="fixed bottom-8 right-8 z-50 shadow-lg transform hover:scale-110 transition-transform"
			:ui="{ rounded: 'full' }" />
	</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from "vue";

// Données des compétences mises à jour
const skillCategories = [
	{
		name: "Frontend",
		icon: "i-heroicons-device-phone-mobile",
		skills: [
			{ name: "Vue.js / Nuxt", level: 90 },
			{ name: "Angular", level: 80 },
			{ name: "TypeScript", level: 85 },
			{ name: "Tailwind CSS", level: 90 },
			{ name: "Bootstrap", level: 85 },
		],
	},
	{
		name: "Backend",
		icon: "i-heroicons-server",
		skills: [
			{ name: "Laravel", level: 90 },
			{ name: "Spring Boot", level: 80 },
			{ name: "PHP", level: 88 },
			{ name: "MySQL", level: 85 },
			{ name: "PostgreSQL", level: 80 },
		],
	},
	{
		name: "Déploiement & DevOps",
		icon: "i-heroicons-cloud",
		skills: [
			{ name: "Render", level: 85 },
			{ name: "Vercel", level: 90 },
			{ name: "Private VPS", level: 80 },
			{ name: "Docker", level: 75 },
			{ name: "CI/CD", level: 80 },
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
	"Nuxt 4",
];

// Statistiques clés avec icônes
const keyStats = [
	{
		icon: "i-heroicons-calendar-days",
		value: 3,
		suffix: "+",
		label: "Ans d'expérience",
	},
	{
		icon: "i-heroicons-rocket-launch",
		value: 10,
		suffix: "+",
		label: "Applications développées",
	},
	{ icon: "i-heroicons-code-bracket", value: "Full", label: "Spécialisation" },
	{ icon: "i-heroicons-map-pin", value: "Togo/Tchad", label: "Localisation" },
];

// Données pour les statistiques animées
const animatedStats = ref([0, 0, 0, 0]);

// Processus de travail
const workProcess = [
	{
		icon: "i-heroicons-light-bulb",
		title: "Découverte",
		description: "Comprendre vos besoins et définir les objectifs du projet",
	},
	{
		icon: "i-heroicons-pencil-square",
		title: "Conception",
		description: "Créer des maquettes et définir l'architecture technique",
	},
	{
		icon: "i-heroicons-cog",
		title: "Développement",
		description: "Coder l'application en suivant les meilleures pratiques",
	},
	{
		icon: "i-heroicons-rocket-launch",
		title: "Lancement",
		description: "Déployer la solution et assurer un suivi post-lancement",
	},
];

// Services
const services = [
	{
		icon: "i-heroicons-code-bracket",
		title: "Développement Web",
		description: "Création de sites web et d'applications sur mesure",
		features: [
			"Applications React/Vue/Angular",
			"API RESTful",
			"Design responsive",
			"Optimisation des performances",
		],
	},
	{
		icon: "i-heroicons-cog-6-tooth",
		title: "Développement Backend",
		description: "Architecture serveur robuste et sécurisée",
		features: [
			"API Laravel/Spring Boot",
			"Bases de données SQL/NoSQL",
			"Authentification sécurisée",
			"Systèmes de paiement",
		],
	},
	{
		icon: "i-heroicons-cloud",
		title: "Déploiement & DevOps",
		description: "Mise en production et maintenance continue",
		features: [
			"Déploiement sur Vercel/Render",
			"Configuration CI/CD",
			"Conteneurisation Docker",
			"Surveillance et monitoring",
		],
	},
];

// Témoignages
const testimonials = [
	{
		name: "Jean Dupont",
		position: "CEO, TechSolutions",
		content:
			"Un développeur exceptionnel qui a transformé notre idée en une application fonctionnelle et performante. Je recommande vivement !",
	},
	{
		name: "Marie Curie",
		position: "Directrice Marketing, InnovCo",
		content:
			"Professionnalisme, expertise et une excellente communication. Il a livré notre projet dans les temps et au-delà de nos attentes.",
	},
	{
		name: "Paul Martin",
		position: "Fondateur, StartUpX",
		content:
			"Sa polyvalence technique et sa capacité à s'adapter à nos besoins changeants ont été cruciales pour le succès de notre projet.",
	},
];

// Hobbies
const hobbies = [
	{ name: "Code", icon: "i-heroicons-code-bracket" },
	{ name: "Lecture", icon: "i-heroicons-book-open" },
	{ name: "Voyage", icon: "i-heroicons-paper-airplane" },
	{ name: "Musique", icon: "i-heroicons-musical-note" },
	{ name: "Photo", icon: "i-heroicons-camera" },
	{ name: "Sport", icon: "i-heroicons-heart" },
];

// Expériences professionnelles
const experiences = [
	{
		title: "Développeur Full-Stack Freelance",
		company: "Indépendant",
		period: "2023 - Présent",
		description:
			"Développement d'applications sur-mesure en choisissant la stack technique la plus pertinente (Laravel/Vue.js ou Angular/Spring Boot) selon les besoins du projet.",
	},
	{
		title: "Stagiaire en Développement",
		company: "Direction Générale des Impôts",
		period: "2024 - Présent",
		description:
			"Contribution au développement d'applications internes pour la gestion fiscale.",
	},
];

// Formation
const education = [
	{
		title: "Génie Logiciel",
		institution: "IPNET INSTITUTE OF TECHNOLOGY, Togo",
		year: "2021 - 2024",
		description:
			"Formation spécialisée en développement logiciel avec projet de fin d'études soutenu en 2024",
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
		title: "Adaptabilité",
		description: "Choisir la bonne technologie pour le bon problème",
		icon: "i-heroicons-arrow-path",
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

// État pour le bouton "Retour en haut" et le carousel
const showScrollTop = ref(false);
const currentTestimonial = ref(0);

// Fonctions
function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleScroll() {
	showScrollTop.value = window.scrollY > 300;
}

// Animation des compteurs
function animateCounters() {
	const duration = 2000; // 2 secondes
	const steps = 60;
	const stepDuration = duration / steps;

	keyStats.forEach((stat, index) => {
		if (typeof stat.value === "number") {
			let current = 0;
			const increment = stat.value / steps;
			const timer = setInterval(() => {
				current += increment;
				if (current >= stat.value) {
					animatedStats.value[index] = stat.value;
					clearInterval(timer);
				} else {
					animatedStats.value[index] = Math.floor(current);
				}
			}, stepDuration);
		} else {
			animatedStats.value[index] = stat.value;
		}
	});
}

// Navigation automatique du carousel
function startTestimonialCarousel() {
	setInterval(() => {
		currentTestimonial.value =
			(currentTestimonial.value + 1) % testimonials.length;
	}, 5000);
}

// Hooks du cycle de vie
onMounted(() => {
	window.addEventListener("scroll", handleScroll);
	// Lancer l'animation des compteurs
	nextTick(() => {
		animateCounters();
		startTestimonialCarousel();
	});
});

// SEO
useHead({
	title: "À Propos - NDILBE DOUVIC",
	meta: [
		{
			name: "description",
			content:
				"Développeur Full-Stack spécialisé Laravel, Vue.js et Spring Boot. Formé au Togo à l'IPNET INSTITUTE OF TECHNOLOGY, actuellement au Tchad.",
		},
	],
});
</script>

<style scoped>
/* Animation pour les blobs du hero */
@keyframes blob {
	0% {
		transform: translate(0px, 0px) scale(1);
	}
	33% {
		transform: translate(30px, -50px) scale(1.1);
	}
	66% {
		transform: translate(-20px, 20px) scale(0.9);
	}
	100% {
		transform: translate(0px, 0px) scale(1);
	}
}
.animate-blob {
	animation: blob 7s infinite;
}
.animation-delay-2000 {
	animation-delay: 2s;
}
.animation-delay-4000 {
	animation-delay: 4s;
}

/* Animation pour les particules flottantes */
@keyframes float {
	0% {
		transform: translateY(0px) translateX(0px);
	}
	50% {
		transform: translateY(-20px) translateX(10px);
	}
	100% {
		transform: translateY(0px) translateX(-10px);
	}
}
.animate-float {
	animation: float 15s infinite ease-in-out;
}

/* Animations d'apparition */
@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
.animate-fade-in {
	animation: fadeIn 0.8s ease-out forwards;
	opacity: 0;
}

@keyframes slideUp {
	0% {
		opacity: 0;
		transform: translateY(30px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}
.animate-slide-up {
	animation: slideUp 0.8s ease-out forwards;
	opacity: 0;
}

.animation-delay-200 {
	animation-delay: 200ms;
}
.animation-delay-400 {
	animation-delay: 400ms;
}
.animation-delay-600 {
	animation-delay: 600ms;
}
</style>
