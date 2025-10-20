<template>
	<div ref="contactPageRef" class="opacity-0">
		<UContainer>
			<UPageHero
				title="Contactez-moi"
				description="Vous avez un projet en tête ? Une opportunité à discuter ? N'hésitez pas à m'envoyer un message !" />

			<div class="py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
				<div>
					<h2 class="text-2xl font-bold mb-6">Parlons-en</h2>
					<p class="text-gray-600 dark:text-gray-400 mb-8">
						Je suis toujours ouvert à discuter de nouveaux projets, d'idées
						créatives ou de possibilités de collaboration.
					</p>
					<div class="space-y-4">
						<div class="flex items-center gap-3">
							<UIcon
								name="i-heroicons-envelope"
								class="w-5 h-5 text-primary-500" />
							<span>contact.ndilbe@example.com</span>
						</div>
						<div class="flex items-center gap-3">
							<UIcon
								name="i-heroicons-phone"
								class="w-5 h-5 text-primary-500" />
							<span>+237 6 XX XX XX XX</span>
						</div>
						<div class="flex items-center gap-3">
							<UIcon
								name="i-heroicons-map-pin"
								class="w-5 h-5 text-primary-500" />
							<span>Douala, Cameroun</span>
						</div>
					</div>
				</div>

				<UForm :state="state" @submit="onSubmit" class="space-y-4">
					<UFormGroup label="Nom" name="name">
						<UInput v-model="state.name" />
					</UFormGroup>
					<UFormGroup label="Email" name="email">
						<UInput v-model="state.email" type="email" />
					</UFormGroup>
					<UFormGroup label="Message" name="message">
						<UTextarea v-model="state.message" :rows="5" />
					</UFormGroup>
					<UButton
						type="submit"
						color="primary"
						size="lg"
						block
						:loading="isSubmitting">
						Envoyer le message
					</UButton>
				</UForm>
			</div>
		</UContainer>
	</div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { onMounted, reactive, ref } from "vue";

const state = reactive({
	name: "",
	email: "",
	message: "",
});

const isSubmitting = ref(false);

const onSubmit = async () => {
	isSubmitting.value = true;
	await new Promise((resolve) => setTimeout(resolve, 2000));
	alert("Message envoyé ! (Ceci est une simulation)");
	isSubmitting.value = false;
	state.name = "";
	state.email = "";
	state.message = "";
};

useHead({
	title: "Contact - NDILBE DOUVIC TOYOUM",
	meta: [
		{
			name: "description",
			content: "Contactez-moi pour discuter de vos projets.",
		},
	],
});

// Animation GSAP
const contactPageRef = ref<HTMLElement | null>(null);

onMounted(() => {
	if (contactPageRef.value) {
		gsap.to(contactPageRef.value, {
			opacity: 1,
			duration: 0.8,
			ease: "power2.inOut",
		});
	}
});
</script>
