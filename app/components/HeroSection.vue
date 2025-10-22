<template>
	<section
		ref="heroSection"
		class="relative min-h-screen flex items-center justify-center w-full">
		<!--
      Particle container.
      'absolute inset-0' positions it to cover the entire section.
      'overflow-hidden' is crucial to prevent overflow.
    -->
		<div class="absolute inset-0 z-0 overflow-hidden">
			<!--
        tsParticles component.
        Unique ID to avoid conflicts.
      -->
			<vue-particles
				id="tsparticles-hero"
				class="w-full h-full"
				:options="particleOptions"
				@particles-loaded="particlesLoaded" />
		</div>
		<!-- Hero content -->
		<div class="relative z-10 text-center w-full px-4 sm:px-6 lg:px-8">
			<div ref="titleElement" class="mb-6">
				<h1 class="text-5xl md:text-7xl font-bold mb-4">
					<span
						class="block text-emerald-900 dark:text-emerald-200/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
						Hey, salut!
					</span>
					<span
						class="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-teal-700 to-cyan-700 dark:from-emerald-400/90 dark:via-teal-400/90 dark:to-cyan-400/90 drop-shadow-[0_2px_15px_rgba(5,150,105,0.4)] dark:drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]">
						Je suis NDILBE DOUVIC
					</span>
				</h1>
			</div>
			<div ref="subtitleElement" class="mb-8">
				<p
					class="text-xl md:text-2xl text-emerald-900 dark:text-emerald-300/90 mb-4 drop-shadow-[0_1px_5px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_0_3px_rgba(255,255,255,0.2)]">
					Créateur passionné par la transformation d'idées en expériences
					numériques
				</p>
			</div>
			<!-- Typing effect text -->
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
		<!-- Scroll indicator -->
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

<script setup lang="ts">
import { gsap } from "gsap";
import { onMounted, onUnmounted, ref } from "vue";

// DOM element references
const heroSection = ref<HTMLElement | null>(null);
const titleElement = ref<HTMLElement | null>(null);
const subtitleElement = ref<HTMLElement | null>(null);
const typingElement = ref<HTMLElement | null>(null);
const typingText = ref<HTMLElement | null>(null);
const typingCursor = ref<HTMLElement | null>(null);
const buttonElement = ref<HTMLElement | null>(null);
const scrollIndicator = ref<HTMLElement | null>(null);

// Captivating texts for typing effect
const captivatingTexts = [
	"Je conçois des interfaces qui allient esthétique et fonctionnalité.",
	"Je développe des solutions robustes avec les technologies modernes.",
	"J'explore les frontières entre créativité et innovation technique.",
	"Je transforme les défis complexes en expériences utilisateur fluides.",
];

// Current text index
let currentTextIndex = 0;

// tsParticles configuration
const particleOptions = {
	fullScreen: {
		enable: false, // Explicitly disable fullScreen to confine particles
		zIndex: 0, // Ensure particles stay behind content
	},
	background: {
		color: {
			value: "transparent",
		},
	},
	fpsLimit: 120,
	interactivity: {
		events: {
			onClick: {
				enable: true,
				mode: "push",
			},
			onHover: {
				enable: true,
				mode: "repulse",
			},
			resize: {
				enable: true,
			},
		},
		modes: {
			bubble: {
				distance: 400,
				duration: 2,
				opacity: 0.8,
				size: 40,
			},
			push: {
				quantity: 4,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
			},
		},
	},
	particles: {
		color: {
			value: ["#10b981", "#14b8a6", "#06b6d4"],
			animation: {
				enable: true,
				speed: 20,
				sync: false,
			},
		},
		links: {
			color: "#10b981",
			distance: 150,
			enable: true,
			opacity: 0.5,
			width: 1,
		},
		move: {
			direction: "none" as const,
			enable: true,
			outModes: {
				default: "bounce" as const,
			},
			random: false,
			speed: 2,
			straight: false,
		},
		number: {
			density: {
				enable: true,
				area: 800,
			},
			value: 80,
		},
		opacity: {
			value: 0.5,
			animation: {
				enable: true,
				speed: 1,
				sync: false,
			},
		},
		shape: {
			type: "circle" as const,
		},
		size: {
			value: { min: 1, max: 5 },
			animation: {
				enable: true,
				speed: 5,
				sync: false,
			},
		},
	},
	detectRetina: true,
};

// Callback when particles are loaded
const particlesLoaded = async (container: any) => {
	console.log("Particles container loaded", container);
	const canvas = container.canvas.element as HTMLCanvasElement;
	if (canvas && heroSection.value) {
		// Force canvas to stay within parent container
		canvas.style.position = "absolute";
		canvas.style.top = "0";
		canvas.style.left = "0";
		canvas.style.width = "100%";
		canvas.style.height = "100%";
		canvas.style.zIndex = "0";
		// Ensure canvas respects parent bounds
		const parent = heroSection.value;
		canvas.width = parent.clientWidth;
		canvas.height = parent.clientHeight;
	}
};

// GSAP timelines
let tl: gsap.core.Timeline | null = null;
let typingTimeline: gsap.core.Timeline | null = null;

// Typing effect function
function typeText(
	text: string,
	element: HTMLElement,
	cursor: HTMLElement,
	onComplete: () => void
) {
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
			onUpdate: () => {
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

// Rotate through texts
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

onMounted(() => {
	if (typeof window === "undefined") return;

	// Initial animations
	tl = gsap.timeline();
	if (titleElement.value) {
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
					textShadow: "0 0 0px rgba(5,150,105,0)",
					duration: 1.5,
					ease: "power2.out",
				},
				"-=1.2"
			);
	}
	if (subtitleElement.value) {
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
	}
	if (typingElement.value) {
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
	}
	if (buttonElement.value) {
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
	}
	if (scrollIndicator.value) {
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
	}
});

onUnmounted(() => {
	if (tl) {
		tl.kill();
	}
	if (typingTimeline) {
		typingTimeline.kill();
	}
});
</script>

<style scoped>
/* No additional styles needed; Tailwind and script handle everything */
</style>
