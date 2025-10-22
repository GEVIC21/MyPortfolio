<template>
	<div class="particles-container">
		<vue-particles
			id="tsparticles"
			class="particles-canvas"
			:options="particleOptions"
			:particles-init="particlesInit"
			@particles-loaded="particlesLoaded" />
	</div>
</template>

<script setup>
import { loadSlim } from "@tsparticles/slim";

// Configuration des particules tsParticles
const particleOptions = {
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
				parallax: {
					enable: true,
					force: 60,
					smooth: 10,
				},
			},
			resize: true,
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
			direction: "none",
			enable: true,
			outModes: {
				default: "bounce",
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
			type: "circle",
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

// Initialisation des particules
const particlesInit = async (engine) => {
	await loadSlim(engine);
};

// Callback quand les particules sont chargées
const particlesLoaded = async (container) => {
	console.log("Particles container loaded", container);
};
</script>

<style scoped>
.particles-container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 0;
}

.particles-canvas {
	width: 100%;
	height: 100%;
}
</style>
