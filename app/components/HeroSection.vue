<template>
	<section
		ref="heroSection"
		class="relative min-h-screen flex items-center justify-center overflow-hidden">
		<!-- Canvas pour les particules interactives -->
		<canvas ref="particleCanvas" class="absolute inset-0 z-0"></canvas>

		<!-- Éléments géométriques animés -->
		<div class="absolute inset-0 overflow-hidden">
			<!-- Formes géométriques flottantes -->
			<div
				v-for="(shape, index) in geometricShapes"
				:key="`shape-${index}`"
				:ref="(el) => (shapeElements[index] = el)"
				class="absolute"
				:style="`left: ${shape.left}%; top: ${shape.top}%;`">
				<div
					class="border-2"
					:style="`width: ${shape.size}px; height: ${shape.size}px; border-color: ${shape.color}; transform: rotate(${shape.rotation}deg);`"
					:class="shape.type"></div>
			</div>

			<!-- Lignes connectrices animées -->
			<svg class="absolute inset-0 w-full h-full">
				<line
					v-for="(line, index) in connectionLines"
					:key="`line-${index}`"
					:ref="(el) => (lineElements[index] = el)"
					:x1="line.x1"
					:y1="line.y1"
					:x2="line.x2"
					:y2="line.y2"
					:stroke="line.color"
					stroke-width="1"
					opacity="0.3" />
			</svg>
		</div>

		<!-- Contenu du hero avec adaptation dark/light mode -->
		<div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
			<div ref="titleElement" class="mb-6">
				<h1 class="text-5xl md:text-7xl font-bold mb-4">
					<span
						class="block text-emerald-900 dark:text-emerald-200/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
						>Hey, salut!</span
					>
					<span
						class="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-teal-700 to-cyan-700 dark:from-emerald-400/90 dark:via-teal-400/90 dark:to-cyan-400/90 drop-shadow-[0_2px_15px_rgba(5,150,105,0.4)] dark:drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]"
						>Je suis NDILBE DOUVIC</span
					>
				</h1>
			</div>

			<div ref="subtitleElement" class="mb-8">
				<p
					class="text-xl md:text-2xl text-emerald-900 dark:text-emerald-300/90 mb-4 drop-shadow-[0_1px_5px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_0_3px_rgba(255,255,255,0.2)]">
					Créateur passionné par la transformation d'idées en expériences
					numériques
				</p>
			</div>

			<!-- Textes captivants avec effet de typing adaptatif -->
			<div ref="typingElement" class="mb-8 h-20">
				<p
					class="text-xl md:text-2xl text-emerald-800 dark:text-emerald-300/90 font-medium drop-shadow-[0_1px_8px_rgba(5,150,105,0.4)] dark:drop-shadow-[0_0_8px_rgba(52,211,153,0.7)]">
					<span ref="typingText"></span>
					<span
						ref="typingCursor"
						class="inline-block w-1 h-6 bg-emerald-700 dark:bg-emerald-300/90 ml-1 align-middle"></span>
				</p>
			</div>

			<div
				ref="buttonElement"
				class="flex flex-col sm:flex-row gap-4 justify-center">
				<UButton
					to="#projets"
					size="xl"
					class="shadow-lg shadow-emerald-500/25 dark:shadow-emerald-500/25 hover:shadow-emerald-500/40 dark:hover:shadow-emerald-500/40 transition-all duration-300 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-600/90 dark:to-teal-600/90 hover:from-emerald-700 hover:to-teal-700 dark:hover:from-emerald-700/90 dark:hover:to-teal-700/90 text-white"
					trailing-icon="i-heroicons-arrow-right-20-solid">
					Découvrir mes réalisations
				</UButton>
			</div>
		</div>

		<!-- Indicateur de défilement avec effet de pulsation adaptatif -->
		<div
			ref="scrollIndicator"
			class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
			<div class="relative">
				<div
					class="absolute inset-0 bg-emerald-500/90 dark:bg-emerald-500/90 rounded-full blur-xl opacity-30 dark:opacity-50 animate-pulse"></div>
				<UButton
					to="#projets"
					icon="i-heroicons-chevron-down"
					variant="ghost"
					size="lg"
					class="relative text-emerald-700 dark:text-emerald-200/90 animate-bounce" />
			</div>
		</div>
	</section>
</template>

<script setup>
import { gsap } from "gsap";
import { onMounted, onUnmounted, ref } from "vue";

// Références aux éléments DOM
const heroSection = ref(null);
const particleCanvas = ref(null);
const titleElement = ref(null);
const subtitleElement = ref(null);
const typingElement = ref(null);
const typingText = ref(null);
const typingCursor = ref(null);
const buttonElement = ref(null);
const scrollIndicator = ref(null);
const shapeElements = ref([]);
const lineElements = ref([]);

// Textes captivants pour l'effet de typing
const captivatingTexts = [
	"Je conçois des interfaces qui allient esthétique et fonctionnalité.",
	"Je développe des solutions robustes avec les technologies modernes.",
	"J'explore les frontières entre créativité et innovation technique.",
	"Je transforme les défis complexes en expériences utilisateur fluides.",
];

// Index du texte actuel
let currentTextIndex = 0;

// Données pour les formes géométriques avec couleurs adaptatives
const geometricShapes = Array.from({ length: 12 }, (_, i) => ({
	left: Math.random() * 100,
	top: Math.random() * 100,
	size: Math.random() * 100 + 50,
	rotation: Math.random() * 360,
	color: `hsl(${Math.random() * 60 + 160}, 70%, 50%)`, // Ajusté pour les tons émeraude
	type: i % 3 === 0 ? "rounded-full" : i % 3 === 1 ? "rounded-lg" : "",
}));

// Données pour les lignes connectrices avec couleurs adaptatives
const connectionLines = Array.from({ length: 8 }, () => ({
	x1: Math.random() * window.innerWidth,
	y1: Math.random() * window.innerHeight,
	x2: Math.random() * window.innerWidth,
	y2: Math.random() * window.innerHeight,
	color: `hsl(${Math.random() * 60 + 160}, 70%, 50%)`, // Ajusté pour les tons émeraude
}));

// Variables pour les particules sur canvas
let particles = [];
let animationId = null;
let mousePosition = { x: 0, y: 0 };
let isDarkMode = false;

// Timeline pour les animations
let tl = null;
let typingTimeline = null;
let mouseMoveHandler = null;

// Détecter le mode sombre
function detectDarkMode() {
	isDarkMode =
		document.documentElement.classList.contains("dark") ||
		window.matchMedia("(prefers-color-scheme: dark)").matches;
	updateParticleColors();
}

// Mettre à jour les couleurs des particules selon le mode
function updateParticleColors() {
	const baseHue = isDarkMode ? 160 : 160; // Ajusté pour les tons émeraude
	const saturation = isDarkMode ? 70 : 60;
	const lightness = isDarkMode ? 60 : 50;

	particles.forEach((particle) => {
		particle.color = `hsl(${baseHue + Math.random() * 60}, ${saturation}%, ${lightness}%)`;
	});
}

/**
 * Fonction pour l'effet de typing avec animation d'envoi
 */
function typeText(text, element, cursor, onComplete) {
	if (typingTimeline) {
		typingTimeline.kill();
	}

	typingTimeline = gsap.timeline({ onComplete });

	gsap.set(element, { textContent: "", x: 0, opacity: 1 });

	const cursorAnimation = gsap.to(cursor, {
		opacity: 0,
		duration: 0.4,
		repeat: -1,
		yoyo: true,
		ease: "power2.inOut",
	});

	const progress = { value: 0 };
	const typingSpeed = 0.08;

	typingTimeline
		.to(progress, {
			value: text.length,
			duration: text.length * typingSpeed,
			ease: "none",
			onUpdate: function () {
				const currentLength = Math.floor(progress.value);
				element.textContent = text.substring(0, currentLength);
			},
		})
		.add(() => cursorAnimation.kill())
		.to({}, { duration: 1.5 })
		.to(element, {
			x: 50,
			opacity: 0,
			duration: 0.6,
			ease: "power2.in",
		})
		.to({}, { duration: 0.7 })
		.set(element, { x: 0, opacity: 1 });
}

// Fonction pour faire défiler les textes
function rotateTexts() {
	if (typingText.value && typingCursor.value) {
		typeText(
			captivatingTexts[currentTextIndex],
			typingText.value,
			typingCursor.value,
			() => {
				currentTextIndex = (currentTextIndex + 1) % captivatingTexts.length;
				rotateTexts();
			}
		);
	}
}

// Initialisation des particules sur canvas avec adaptation au mode
function initParticles() {
	const canvas = particleCanvas.value;
	const ctx = canvas.getContext("2d");

	// Définir la taille du canvas
	function resizeCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}
	resizeCanvas();
	window.addEventListener("resize", resizeCanvas);

	// Créer les particules
	particles = [];
	const particleCount = 100;

	for (let i = 0; i < particleCount; i++) {
		const baseHue = 160; // Ajusté pour les tons émeraude
		particles.push({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			vx: (Math.random() - 0.5) * 0.5,
			vy: (Math.random() - 0.5) * 0.5,
			radius: Math.random() * 2 + 1,
			color: `hsl(${baseHue + Math.random() * 60}, ${isDarkMode ? 70 : 60}%, ${isDarkMode ? 60 : 50}%)`,
		});
	}

	// Fonction d'animation des particules
	function animateParticles() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Mettre à jour et dessiner les particules
		particles.forEach((particle) => {
			// Mettre à jour la position
			particle.x += particle.vx;
			particle.y += particle.vy;

			// Rebondir sur les bords
			if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
			if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

			// Interaction avec la souris
			const dx = mousePosition.x - particle.x;
			const dy = mousePosition.y - particle.y;
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance < 100) {
				const force = (100 - distance) / 100;
				particle.vx -= (dx / distance) * force * 0.2;
				particle.vy -= (dy / distance) * force * 0.2;
			}

			// Limiter la vitesse
			const speed = Math.sqrt(
				particle.vx * particle.vx + particle.vy * particle.vy
			);
			if (speed > 2) {
				particle.vx = (particle.vx / speed) * 2;
				particle.vy = (particle.vy / speed) * 2;
			}

			// Dessiner la particule
			ctx.beginPath();
			ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
			ctx.fillStyle = particle.color;
			ctx.fill();

			// Dessiner les connexions entre particules proches
			particles.forEach((otherParticle) => {
				if (particle === otherParticle) return;

				const dx = particle.x - otherParticle.x;
				const dy = particle.y - otherParticle.y;
				const distance = Math.sqrt(dx * dx + dy * dy);

				if (distance < 100) {
					ctx.beginPath();
					ctx.moveTo(particle.x, particle.y);
					ctx.lineTo(otherParticle.x, otherParticle.y);
					const connectionColor = isDarkMode
						? `rgba(16, 185, 129, ${0.2 * (1 - distance / 100)})` // Ajusté pour émeraude
						: `rgba(5, 150, 105, ${0.15 * (1 - distance / 100)})`; // Ajusté pour émeraude
					ctx.strokeStyle = connectionColor;
					ctx.lineWidth = 0.5;
					ctx.stroke();
				}
			});
		});

		animationId = requestAnimationFrame(animateParticles);
	}

	animateParticles();

	return () => {
		window.removeEventListener("resize", resizeCanvas);
		if (animationId) {
			cancelAnimationFrame(animationId);
		}
	};
}

onMounted(() => {
	// Détecter le mode initial
	detectDarkMode();

	// Écouter les changements de mode
	const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
	darkModeMediaQuery.addEventListener("change", detectDarkMode);

	// Observer les changements de classe sur l'élément html
	const observer = new MutationObserver(detectDarkMode);
	observer.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ["class"],
	});

	// Initialiser les particules sur canvas
	const cleanupParticles = initParticles();

	// Animation initiale des éléments
	tl = gsap.timeline();

	// Animation du titre avec effet adaptatif
	tl.from(titleElement.value, {
		y: 50,
		opacity: 0,
		duration: 1,
		ease: "power3.out",
	})
		.from(
			titleElement.value.querySelector("span:first-child"),
			{
				textShadow: "0 0 0px rgba(0,0,0,0)",
				duration: 1.5,
				ease: "power2.out",
			},
			"-=0.8"
		)
		.from(
			titleElement.value.querySelector("span:last-child"),
			{
				textShadow: "0 0 0px rgba(5,150,105,0)", // Ajusté pour émeraude
				duration: 1.5,
				ease: "power2.out",
			},
			"-=1.2"
		);

	// Animation du sous-titre
	tl.from(
		subtitleElement.value,
		{
			y: 30,
			opacity: 0,
			duration: 0.8,
			ease: "power3.out",
		},
		"-=0.6"
	);

	// Animation de l'élément de typing
	tl.from(
		typingElement.value,
		{
			y: 30,
			opacity: 0,
			duration: 0.8,
			ease: "power3.out",
			onComplete: () => {
				rotateTexts();
			},
		},
		"-=0.4"
	);

	// Animation des boutons
	tl.from(
		buttonElement.value,
		{
			y: 30,
			opacity: 0,
			duration: 0.8,
			ease: "power3.out",
		},
		"-=0.4"
	);

	// Animation de l'indicateur de défilement
	tl.from(
		scrollIndicator.value,
		{
			y: 20,
			opacity: 0,
			duration: 0.6,
			ease: "power3.out",
		},
		"-=0.2"
	);

	// Animation des formes géométriques
	shapeElements.value.forEach((shape, index) => {
		gsap.to(shape, {
			rotation: "+=360",
			duration: 20 + index * 5,
			repeat: -1,
			ease: "none",
		});

		gsap.to(shape, {
			x: "random(-50, 50)",
			y: "random(-50, 50)",
			duration: 10 + index * 2,
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut",
		});
	});

	// Animation des lignes connectrices
	lineElements.value.forEach((line, index) => {
		gsap.to(line, {
			attr: {
				x1: `random(0, ${window.innerWidth})`,
				y1: `random(0, ${window.innerHeight})`,
				x2: `random(0, ${window.innerWidth})`,
				y2: `random(0, ${window.innerHeight})`,
			},
			duration: 15 + index * 3,
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut",
		});
	});

	// Effet parallaxe au mouvement de la souris
	mouseMoveHandler = (e) => {
		const { clientX, clientY } = e;
		const { innerWidth, innerHeight } = window;

		// Mettre à jour la position de la souris pour les particules
		mousePosition.x = clientX;
		mousePosition.y = clientY;

		// Calcul du mouvement parallaxe
		const xPos = (clientX - innerWidth / 2) / innerWidth;
		const yPos = (clientY - innerHeight / 2) / innerHeight;

		// Appliquer le mouvement aux formes géométriques
		shapeElements.value.forEach((shape, index) => {
			const speed = (index + 1) * 0.5;
			gsap.to(shape, {
				x: xPos * speed,
				y: yPos * speed,
				duration: 1,
				ease: "power2.out",
			});
		});
	};

	// Ajouter l'écouteur d'événement de mouvement de souris
	heroSection.value.addEventListener("mousemove", mouseMoveHandler);

	// Nettoyage lors du démontage
	onUnmounted(() => {
		cleanupParticles();
		darkModeMediaQuery.removeEventListener("change", detectDarkMode);
		observer.disconnect();
		if (heroSection.value && mouseMoveHandler) {
			heroSection.value.removeEventListener("mousemove", mouseMoveHandler);
		}
		if (tl) {
			tl.kill();
		}
		if (typingTimeline) {
			typingTimeline.kill();
		}
	});
});
</script>

<style scoped>
/* Styles personnalisés si nécessaire */
</style>
